import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, Markup)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
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
    terms = mongo.db.terms.find()
    games = mongo.db.games.find()
    return render_template("terms.html", terms=terms, games=games)


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.route("/get_games")
def get_games():
    games = list(mongo.db.games.find().sort("game_name", 1))
    return render_template("games.html", games=games)


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username currently exists in DB
        existing_username = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_username:
            flash(Markup("Username already exists. "
                         "Please choose another or <a href=''>login</a>."))
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
        flash(Markup("Thanks for signing up " + request.form.get("username")))
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
                session["user"] = request.form.get("username")
                flash(Markup("Welcome ") + request.form.get("username"))
                return redirect(url_for("get_terms"))
            else:
                # invalid password entered
                flash("Username and/or password incorrect")
                return redirect(url_for("login"))
        else:
            # username doesn't exist
            flash("Username and/or password incorrect")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.errorhandler(404)
def invalid_route(e):
    return render_template("404.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
