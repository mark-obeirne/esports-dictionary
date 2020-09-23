import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, Markup)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import date
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_terms")
def get_terms():
    try:
        if session["user"]:
            terms = mongo.db.terms.find({"rating": {"$gt": -2}}).sort(
                [("term_header", 1), ("rating", -1), ("submission_date", 1)])
            games = list(mongo.db.games.find().sort("game_name", 1))
            users = list(mongo.db.users.find())
            current_user = mongo.db.users.find_one({"username": session["user"]})
            userid = current_user["_id"]
            print(userid)
            return render_template("terms.html", terms=terms, games=games, users=users, userid=userid)
    except KeyError:
        # user is not logged in and doesn't have session cookie set
        terms = mongo.db.terms.find({"rating": {"$gt": -2}}).sort(
            [("term_header", 1), ("rating", -1), ("submission_date", 1)])
        games = list(mongo.db.games.find().sort("game_name", 1))
        users = list(mongo.db.users.find())
        return render_template("terms.html", terms=terms, games=games, users=users)


@app.route("/submit_definition", methods=["GET", "POST"])
def submit_definition():
    if request.method == "POST":
        game = mongo.db.games.find_one(
            {"game_name": request.form.get("game_name")})
        user = mongo.db.users.find_one({"username": session["user"]})
        today = date.today()
        submission_date = today.strftime("%Y/%m/%d")
        definition = {
            "term_header": request.form.get("term_header"),
            "game_fk": game['_id'],
            "short_definition": request.form.get("short_definition"),
            "long_description": request.form.get("long_description", False),
            "youtube_link": request.form.get("youtube_link", False),
            "submitted_by": user["_id"],
            "submission_date": submission_date,
            "rating": 1,
            "upvoted_by": [user["_id"]]
        }
        mongo.db.terms.insert_one(definition)
        flash(f"Thank you, {session['user']}, for your submission",
              category="success")
        return redirect(url_for("get_terms"))
    try:
        if session["user"]:
            games = mongo.db.games.find().sort("game_name", 1)
            return render_template("add_term.html", games=games)
    except KeyError:
        # redirect user to homepage if not logged in
        flash(Markup("Please <a href='login'>"
                     "login</a> to add a new definition"), category="error")
        return redirect(url_for("get_terms"))


@app.route("/edit_definition/<term_id>", methods=["GET", "POST"])
def edit_definition(term_id):
    term = mongo.db.terms.find_one({"_id": ObjectId(term_id)})
    games = mongo.db.games.find().sort("game_name", 1)
    user = mongo.db.users.find_one({"username": session["user"]})
    selected_game = mongo.db.games.find_one(
            {"game_name": request.form.get("game_name")})

    if request.method == "POST":
        updated = {
            "term_header": request.form.get("term_header"),
            "game_fk": selected_game['_id'],
            "short_definition": request.form.get("short_definition"),
            "long_description": request.form.get("long_description", False),
            "youtube_link": request.form.get("youtube_link", False),
            "submitted_by": user["_id"],
            "submission_date": term["submission_date"],
            "rating": term["rating"],
            "upvoted_by": term["upvoted_by"],
            "downvoted_by": term["downvoted_by"]
        }
        mongo.db.terms.update({"_id": ObjectId(term_id)}, updated)
        flash("Term successfully updated", category="success")
        return redirect(url_for("get_terms"))

    try:
        is_admin = True if "admin" in session else False
        if user["_id"] == term["submitted_by"] or is_admin:
            return render_template(
                "edit_term.html", term=term, games=games, user=user)
        else:
            flash("You cannot edit a term that you did not submit",
                  category="error")
            return redirect(url_for("get_terms"))
    except KeyError:
        flash(Markup("Please <a href='login'>"
                     "login</a> to edit a definition"), category="error")
        return redirect(url_for("get_terms"))


@app.route("/delete_definition/<term_id>")
def delete_definition(term_id):
    term = mongo.db.terms.find_one({"_id": ObjectId(term_id)})
    try:
        user = mongo.db.users.find_one({"username": session["user"]})
        is_admin = True if "admin" in session else False
        if user["_id"] == term["submitted_by"] or is_admin:
            mongo.db.terms.remove({"_id": ObjectId(term_id)})
            flash("Term successfully deleted", category="success")
            return redirect(url_for("get_terms"))
        else:
            flash("You cannot delete a term that you did not submit",
                  category="error")
            return redirect(url_for("get_terms"))
    except KeyError:
        flash(Markup("Please <a href='login'>"
                     "login</a> to delete a definition"), category="error")
        return redirect(url_for("get_terms"))


@app.route("/upvote/<term_id>/<username>", methods=["GET", "POST"])
def upvote(term_id, username):
    if request.method == "POST":
        user = mongo.db.users.find_one({"username": session["user"]})
        term = dict(mongo.db.terms.find_one({"_id": ObjectId(term_id)}))
        same_term = dict(mongo.db.terms.find_one({"_id": ObjectId(term_id)}))
        upvoted_array = list(term.get("upvoted_by", []))
        downvoted_array = list(term.get("downvoted_by", []))
        # check if user has not upvoted term
        if user["_id"] not in upvoted_array:
            # check if user has previously downvoted term
            # if so, cancel out the downvote by increasing rating by 2, remove userID from list of users who have downvoted term,
            # and add userID to list of users who have upvoted term
            if user["_id"] in downvoted_array:
                try:
                    print("Cancelling downvote of " + term_id + " and increasing")
                    print(user["_id"])
                    mongo.db.terms.update_one(
                        {"_id": ObjectId(term_id)}, {"$inc": {"rating": 2}})
                    mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$pull": {"downvoted_by": user["_id"]}})
                    mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$push": {"upvoted_by": user["_id"]}})
                    return "nothing"
                except TypeError:
                    pass
            else:
                # user has not downvoted term
                # increase rating by 1 and add userID to list of users who have upvoted term
                try:
                    print("Increasing rating of " + term_id)
                    print(user["_id"])
                    mongo.db.terms.update_one(
                        {"_id": ObjectId(term_id)}, {"$inc": {"rating": 1}})
                    mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$push": {"upvoted_by": user["_id"]}})
                    return "nothing"
                except TypeError:
                    pass
        else:
            # user has upvoted term and upvote should be taken back
            try:
                print("Decreasing rating of " + term_id)
                print(user["_id"])
                mongo.db.terms.update_one(
                    {"_id": ObjectId(term_id)}, {"$inc": {"rating": -1}})
                mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$pull": {"upvoted_by": user["_id"]}})
                return "nothing"
            except TypeError:
                pass
            print("In array")
    return redirect(url_for("get_terms"))


@app.route("/downvote/<term_id>/<username>", methods=["GET", "POST"])
def downvote(term_id, username):
    if request.method == "POST":
        user = mongo.db.users.find_one({"username": session["user"]})
        term = dict(mongo.db.terms.find_one({"_id": ObjectId(term_id)}))
        same_term = dict(mongo.db.terms.find_one({"_id": ObjectId(term_id)}))
        upvoted_array = list(term.get("upvoted_by", []))
        downvoted_array = list(term.get("downvoted_by", []))
        # check if user has not downvoted term
        if user["_id"] not in downvoted_array:
            # check if user has previously upvoted term
            # if so, cancel out the upvote by decreasing rating by 2, remove userID from list of users who have upvoted term,
            # and add userID to list of users who have downvoted term
            if user["_id"] in upvoted_array:
                try:
                    print("Cancelling upvote of " + term_id + " and decreasing")
                    print(user["_id"])
                    mongo.db.terms.update_one(
                        {"_id": ObjectId(term_id)}, {"$inc": {"rating": -2}})
                    mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$pull": {"upvoted_by": user["_id"]}})
                    mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$push": {"downvoted_by": user["_id"]}})
                    return "nothing"
                except TypeError:
                    pass
            else:
                # user has not upvoted term
                # decrease rating by 1 and add userID to list of users who have downvoted term
                try:
                    print("Decreasing rating of " + term_id)
                    print(user["_id"])
                    mongo.db.terms.update_one(
                        {"_id": ObjectId(term_id)}, {"$inc": {"rating": -1}})
                    mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$push": {"downvoted_by": user["_id"]}})
                    return "nothing"
                except TypeError:
                    pass
        else:
            # user has downvoted term and downvote should be taken back
            try:
                print("Increasing rating of " + term_id)
                print(user["_id"])
                mongo.db.terms.update_one(
                    {"_id": ObjectId(term_id)}, {"$inc": {"rating": 1}})
                mongo.db.terms.update_one({"_id": ObjectId(term_id)}, {"$pull": {"downvoted_by": user["_id"]}})
                return "nothing"
            except TypeError:
                pass
            print("In array")
    return redirect(url_for("get_terms"))


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.route("/get_games")
def get_games():
    # check if user has admin permission to access this page
    is_admin = True if "admin" in session else False

    if is_admin:
        games = list(mongo.db.games.find().sort("game_name", 1))
        return render_template("games.html", games=games)
    else:
        flash("You do not have permission to access this page",
              category="error")
        return redirect(url_for("get_terms"))


@app.route("/add_game", methods=["GET", "POST"])
def add_game():
    # check if user has admin permission to access this page
    is_admin = True if "admin" in session else False

    if request.method == "POST":
        # check if game currently exists in DB
        existing_game = mongo.db.games.find_one(
            {"game_name": request.form.get("game_name").lower()})

        if existing_game:
            flash(Markup("Game is currently supported. You can manage "
                         "supported games <a href='games'>here</a>."),
                  category="error")
            # Credit for using Markup to display link in flash message:
            # https://pythonpedia.com/en/knowledge-base/21248718/how-to-flashing-a-message-with-link-using-flask-flash-
            return render_template(url_for("add_game"))

        # gather form data
        game_details = {
            "game_name": request.form.get("game_name"),
            "game_icon": request.form.get("game_icon")
            }

        # submit data to DB
        mongo.db.games.insert_one(game_details)

        flash("Game successfully added", category="success")
        return redirect(url_for("get_games"))

    if is_admin:
        return render_template("add_game.html")
    else:
        flash("You do not have permission to access this page",
              category="error")
        return redirect(url_for("get_terms"))


@app.route("/edit_game/<game_id>", methods=["GET", "POST"])
def edit_game(game_id):
    game = mongo.db.games.find_one({"_id": ObjectId(game_id)})

    if request.method == "POST":
        update = {
            "game_name": request.form.get("game_name"),
            "game_icon": request.form.get("game_icon")
        }

        mongo.db.games.update({"_id": ObjectId(game_id)}, update)
        flash("Game details updated successfully", category="success")
        return redirect(url_for("get_games"))

    # check if user has admin permission to access this page
    is_admin = True if "admin" in session else False
    if is_admin:
        return render_template("edit_game.html", game=game)
    else:
        flash("You do not have permission to access this page",
              category="error")
        return redirect(url_for("get_terms"))


@app.route("/delete_game/<game_id>")
def delete_game(game_id):
    try:
        is_admin = True if "admin" in session else False
        if is_admin:
            mongo.db.games.remove({"_id": ObjectId(game_id)})
            flash("Game successfully deleted", category="success")
            return redirect(url_for("get_games"))
        else:
            flash("You do not have permission to manage supported games",
                  category="error")
            return redirect(url_for("get_terms"))
    except KeyError:
        flash(Markup("Please <a href='login'>"
                     "login</a> to delete a game"), category="error")
        return redirect(url_for("get_terms"))


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username currently exists in DB
        existing_username = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_username:
            flash(Markup("Username already exists. "
                         "Please choose another or <a href=''>login</a>."),
                  category="error")
            # Credit for using Markup to display link in flash message:
            # https://pythonpedia.com/en/knowledge-base/21248718/how-to-flashing-a-message-with-link-using-flask-flash-
            return render_template(url_for("register"))

        # gather form data
        registration = {
            "username": request.form.get("username"),
            "password": generate_password_hash(request.form.get("password")),
            "fav_games": request.form.get("fav_games"),
            "fav_competitors": request.form.get("fav_competitors")
            }

        # submit data to DB
        mongo.db.users.insert_one(registration)

        # create session cookie and redirect to dictionary
        session["user"] = request.form.get("username")
        flash(Markup("Thanks for signing up, " + request.form.get("username")),
              category="success")
        return redirect(url_for("get_terms"))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check that username exists
        existing_username = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        if existing_username:
            # ensure hashed password matches input
            if check_password_hash(
                    existing_username["password"], request.form.get(
                    "password")):
                # check if user is an admin
                is_admin = existing_username.get("is_admin", False)
                if is_admin:
                    session["admin"] = True
                session["user"] = request.form.get("username")
                flash(Markup("Welcome, ") + request.form.get("username"),
                      category="success")
                return redirect(url_for("get_terms"))
            else:
                # invalid password entered
                flash("Username and/or password incorrect", category="error")
                return redirect(url_for("login"))
        else:
            # username doesn't exist
            flash("Username and/or password incorrect", category="error")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/logout")
def logout():
    try:
        if session["user"]:
            flash("You have logged out successfully", category="success")
            session.pop("user")
    except KeyError:
        flash("You are not logged in", category="error")
    try:
        if session["admin"]:
            session.pop("admin")
    except KeyError:
        # user is not an admin
        pass
    finally:
        return redirect(url_for("get_terms"))


@app.errorhandler(404)
def invalid_route(e):
    return render_template("404.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
