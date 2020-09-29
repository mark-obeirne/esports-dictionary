# [Esports Dictionary](http://esports-dictionary.herokuapp.com/)

Code Institute - Milestone Project 3

Live Heroku Link: http://esports-dictionary.herokuapp.com/

[Multi-Device Mockup]

## Table of Contents
* [Summary](##Summary)
* [Background](##Background)
* [Aim of the Site](##Aim-of-the-Site)

## Summary
Esports Dictionary is a user-generated collection of definitions of terms used in relation to competitive gaming, a.k.a Esports.

## Background
While video games have often traditionally had an element of competition to them, whether that be the in-built high score featured (which has led to spirited competition for Guinness World Records) or more formal events like Nintendo's first World Championships in 1990, the idea of competitive gaming - or Esports as it is otherwise known - has grown exponentially in recent years.

In recent years, The International - the biggest competition for Dota 2 teams - has seen its prize pool grow from $1.6 million to more than $34 million in 2019; League of Legends' Worlds finals were watched by more 99.6 million unique viewers; and traditional sports stars and teams, including Michael Jordan, Shaquille O’Neal, Fernando Alonso, Munster Rugby, Manchester City, PSG, and Valencia CF, among many others have invested in teams or have signed players or teams to compete under their brand.

In 2020, with sports on hiatus, some sports stars took to competing virtually, while TV channels aired Esports matches. F1 drivers took to the track as part of the [F1 Esports Virtual Grand Prix series](https://www.youtube.com/watch?v=QwcRDOjgfkE), Premiership soccer players [played out a cancelled derby](https://www.youtube.com/watch?v=Meoe145_Itk&feature=emb_title), and [Fox Sports aired Nascar's iRacing series](https://techcrunch.com/2020/05/18/with-stadiums-closed-tv-networks-turn-to-live-esports-broadcasts). 

Esports is no longer a niche topic where superstars exist only in South Korea, or attention-grabbing headlines are confined to one-off publicity events such as a [match against a developer for a Ferrari](https://www.rollingstone.com/culture/culture-news/meet-dennis-thresh-fong-the-original-pro-gamer-103208/). 

## Aim of the Site
The purpose of Esports Dictionary is to act as a go-to guide for esports terminology. Tuning into an esports broadcast can be intimidating: there is a lot of action happening on screen (and at times even if you play the game it can seem like they're playing a completely different game with the skills and techniques on display), and the commentators use terms and sayings that aren't commonplace in day-to-day life.

The site aims to connect those in the know and those that understand the lingo with those who are delving into this world, possibly for the first time. As the site grows and develops a more thorough dictionary of terms, an aim is to expand by connecting with cartoonists to bring some of the terms to life in the form of cute and amusing A-Z books aimed at gamers who are also parents of young children. 

While there are sites that have written articles about esports terminology, our research has found that they tend to be surface level terms or, where they do go into more depth, tend to focus on one particular game. A drawback of the coverage to date is that these glossaries are usually in article form and therefore remain static until it comes time to write another article with a release timed around a major event. The alternative is to consult Reddit and hope that there is an all-encompassing post with the terminology required, but that requires a knowledge of where to find such information and how to navigate to it.

Esports Dictionary is different as it can evolve over time, draws upon the knowledge of a community, can provide more context through the use of YouTube links, and is easy to navigate.

## Scope
The site's main target are passionate gamers who know the lexicon of gaming and, in particular, Esports. These users will shape the site by contributing definitions and rating on those that provide the most detail or accuracy. However, as Esports reaches new audiences, it will target these newcomers who want to learn more and develop a greater understanding of the words being used in association with this entertainment industry.

### User Stories
#### Users
"As an Esports fanatic, I want to be able to share my knowledge so that more people can enjoy this passion of mine."

"As a parent, I want to learn more about my child's hobby, so that I can connect with them and spend some more quality time with them."

"As a sports fan who stumbled upon gaming coverage during lockdown, I would like to be able to understand what the commentators are talking about, so that I can enjoy the action more."

#### Site Owner
"As the site owner, I would like to build a comprehensive glossary of gaming and Esports terms so that the site is the go-to resource when someone wants to find out what a gaming term means."

"As the site owner, I want to be able to find ways to reward users for getting involved, so that they will help to contribute to this database of knowledge."

"As the site owner, I would like to leverage this database of knowledge in the future by selling books on the topic, so that we have another revenue stream."

## Site Features
### Jumbotron
When a user visits the homepage, they are greeted by a visually-appealing jumbotron. If the user is logged in, they are invited to add a term as this is one of the core experiences and goals of the site. If the user is currently logged out, they will instead be presented with two buttons, one to login and one to register. 

### Search Filters
As the site grows and more terms are added, it becomes more integral to be able to filter the available information to what is most relevant to the user. 

It is possible to filter displayed terms and definitions based on three criteria:
* The user can search for a particular term by typing it in and the list of terms will filter as they type
* Search for all terms associated with a particular supported game
* Filter alphabetically and only show definitions of a particular letter

On both mobile and desktop, these search filters are readily accessible at all times when viewing the dictionary. The mobile and tablet versions of the site use a sidebar for the alphabetical filter to preserve some screen real estate when scrolled. 

### User Ratings
Each term has a community-granted rating associated with it. If logged in, users can upvote a definition if they like it or downvote a definition if they think it's inaccurate. Definitions that drop below -2 in rating are hidden from view; this ensures that definitions that are deemed helpful are given prominence and also helps to counteract troublesome users and spam.

When a user presses the up or down arrow on a given term, the rating in the database is updated to reflect this. To provide feedback to the user, the chosen arrow is highlighted and the rating on display changes to reflect their vote. This change occurs in real-time, but as the page does not display it will not reflect other user ratings that may occur in the background. When the page is refreshed again, the rating displayed will be that which is currently stored in the database.

If a user is not logged in when they click on an arrow, they are presented with a modal that encourages them to register or log in so that they can get involved.

#### Explanation of the Rating System
The rating system emulates Reddit's system. 

* If a user upvotes a definition, it is given a +1 rating. 
* If they press the upvote arrow again, it is taken as an indication that they are taking this rating away and the term's rating is reduced by the 1 that they previously gave it.
* This shows a user that they can't spam the upvote or downvote button.

* If a user has upvoted a definition, but later downvote it, the rating will reduce by 2. The +1 that they originally gave it is taken away. And a -1 is subsequently applied. 
* This replicates the behaviour of a user simply downvoting a definition, i.e. giving it -1. 

### Floating Action Button
It was decided that the navbar should not be sticky as it resulted in very little screen real estate being available on mobile for definitions when combined with the sticky search filters section. To ensure that users could quickly get back to the top of the page (or to other pages that they may want to access quickly), a Floating Action Button is featured on each page. For logged in users, this button gives them quick links to the top of the page, the submit definition page, and their user profile. Logged out users are able to get back to the top of the page quickly or register for an account.

### User Profiles
Each user has a profile page, which showcases their top rated definition and all other definitions that they have submitted. This page also displays their user rating, which is an accumulation of all the ratings given to terms that they've submitted, and a star rating based on this value. This is one method that has been shown to get people to create content, and is something that we would like to expand upon in the future. This user profile also displays the user's favourite games and favourite teams or players if they provided that information on signup.

A user can edit their account details from a link on this page, enabling them to update their username or their password. When making changes to their account details, the user is required to enter their current password.

### Contact Page
The Contact Page contains a form, which invites users to get in touch with any comments, suggestions, or to report a bug. This is linked to my email through EmailJS, and once the email sends, the page redirects to the homepage through the use of a route.

### 404 Page
If a user attempts to navigate to a page that does not exist or stumbles upon a link that does not work, they are presented with a straightforward 404 page that can help them get back to the homepage easily. This page features a button that generates a gaming term from a predefined list as a fun little tie-in with the site's theme. However, the core message of "back to the homepage" remains consistent.

## Future Features
### Profile Gamification
As outlined in the Site Owner's user story, we are looking for further ways to encourage users to get involved. A rating system is one that has worked on sites such as Reddit, but we would like to expand this further. 

Achievements are an integral part of videogames and we would like to explore this avenue with achivements that would feature on a user's profile. These achievements would reward users for submissions, for submitting well-received terms, for account longevity, for filling out their profile, and more.  

### Shop
As the site depends on user submissions, it is too early to launch a shop to sell site-related merchandise. As outlined, it is planned that the shop will feature products that draw upon contributed definitions and knowledge such as cute and cartoony A-Z books aimed at parents who are gamers.

### Report Terms
While the site features a rating system, which could enable the community to prevent spam and malicious posting by downvoting submissions, we would like to go further by implementing a reporting system. This would enable users to highlight submissions to an Admin that may need to be edited or deleted. 

Admins are currently able to edit or delete any term, and this system could help them do their job more thoroughly. 

### Favourite Terms
In the future, we plan to enable users to favourite individual terms or definitions for later consultation.

### YouTube API Integration

### Expand Profanity Filter


## Skeleton
### Mobile Wireframes
[Dictionary / Home Page]
[Register Page]
[Submit Definition Page]
[Edit Definition Page]
[Profile Page]
[Edit User Page]
[Contact Us Page]
[Manage Games Page - Admins]
[Edit Game Page - Admins]
[404 Page]

### Tablet Wireframes
[Dictionary / Home Page]
[Register Page]
[Submit Definition Page]
[Edit Definition Page]
[Profile Page]
[Edit User Page]
[Contact Us Page]
[Manage Games Page - Admins]
[Edit Game Page - Admins]
[404 Page]

### Desktop Wireframes
[Dictionary / Home Page]
[Register Page]
[Submit Definition Page]
[Edit Definition Page]
[Profile Page]
[Edit User Page]
[Contact Us Page]
[Manage Games Page - Admins]
[Edit Game Page - Admins]
[404 Page]

## Structure
The navbar links available are different based on the user's logged in status, while Admins have another link available to them. The navbar features the site's logo in the centre of the page with the hamburger menu to the right on mobile. On larger devices, the logo shifts to the left-hand side of the page with the navigation options spreading out across the right.

Visitors who are logged out will be presented with these naviation links:
* Dictionary
* Register
* Log In
* Contact

Visitors who log in will see these navigation options:
* Dictionary
* Submit Definition
* My Profile
* Contact Us
* Log Out

Finally, users who are granted Admin status will see:
* Dictionary
* Submit Definition
* My Profile
* Manage Games
* Contact Us
* Log Out

This order was chosen to emphasise the dictionary for all users, which is where the bulk of the site's content lives. When a user logs in, we want the Submit Definition page to be visible as an integral part of the site, while the user's profile can present interesting information that will keep them coming back for more (particularly if they become attached to their rating).

For Admins, managing the games available should not be an every day task, while we do not expect users to be emailing frequently with issues or comments. Finally, the Log Out button is kept on the far right to adhere to traditional placement.

## Surface
### Fonts
As the site is a dictionary, Playfair Display was chosen as the font for page headings and terms. It was decided to use small caps with the first letter capitalised as it looked more appealing in testing.

Roboto was used as the font across the rest of the site as it is easily readable at a range of font-sizes, is easy on the eyes in instances where there is a lot of text (which may be the case in longer descriptions), and combines well with Playfair Display.

### Colours
Gaming websites as a whole have moved away from the black or dark websites that once populated the internet. In addition, Esports takes some of its cues from the world of sports. As highlighted by an [article on Redbull about Esports branding](https://www.redbull.com/ca-en/how-esports-branding-works), the palette of the most notable Esports teams is reds, blues, and whites. This is reminiscent of sports leagues such as the NBA and MLB. This is a palette that we wanted to utilise across the site.

The main colour featured across the site is a rich blue (#0F66D2). This acts as a perfect background colour for areas where there is text, such as the navbar, page icons, and buttons. 

A red colour (#AC1610) is used more sparingly across the site, commonly appearing as the background colour for delete buttons. It is also used as the background colour for the "Add Term" button within the jumbotron, however, as it contrasts well with the background and stands out when positioned between the blue navbar and the grey and blue elements below. 

A platinum grey (#E2E1DF) is used as the background colour across the site, enabling headings, buttons, and other elements to be the primary focus. 

Raisin black (#2D2A32) acts as the background for the collapsible headers that house terms and their short definitions, as well as the admin buttons underneath. This provides a good contrast against the rating arrows (regardless of their status), the text to describe a term, and the colour of the buttons. This colour is also used for the darker text across the site. 

Finally, a cultured white (#F5F5F4) is used as the white text in headings and in the collapsible headers. This contrasts well against the other colours used for elements without straining the eyes.

On hover, blue, red, and black elements are highlighted by changing to a colour that is 10% lighter, according to [colorbook.io](https://www.colorbook.io).


## Technologies Used
### Languages
HTML & CSS - For the basic site structure and design elements.

JavaScript - To enhance the user's experience, enable filtering in real time, provide feedback when rating terms, and to pop up modals to defensively program against accidental deletions.

Python - To handle data provided by the database.

Jinja - To handle the display of data provided by the backend in addition to traditional HTML code.

### Framworks
Flask - To construct and render page templates.

Materialize - To create elements such as the Floating Action Button, the sidenav, and tooltips, and to layout each page's structure.


### Tools

MongoDB - To store our database and collections relating to users, terms, and supported games.

PIP - To install and manage software packages.

PyMongo - To enable communication between MongoDB and Python.

Git - To track changes in code during development.

GitHub - To host the project’s repository.

Balsamiq - To create the wireframes that the site's design and layout is based upon.

Coolors - For finding a suitable palette for the site.

Google Fonts - To find the right fonts for this site's purpose.

Font Awesome - For icons used across the site, which provide the user with additional context at first glance.

Gimp 2 - For image manipulation and to create the brand logo.

TinyPNG - To compress and optimise image files.

Favicon Converter - To create the favicon based on the brand logo.

## Testing
Separate doc?

### Validators and Tools

### Manual Testing
#### Devices Used for Testing

#### Manual Testing Process
Register
- While logged in
- Test password fields
- Link to log in page
- Capitalized / lower case
Sign In 
- While already signed in
- Link to register page
- Incorrect case (should be fine)
Sign Out
- While signed out
Submit Definition
- While logged out
Edit Term
 - Try to edit a term by someone else
 - Try to edit a term while logged out
Delete Term
 - Try to delete a term by someone else
 - Try to delete a term while logged out
Profile page
- Profile of user that hasn't posted
- Test links and hover behaviour on mouseover of submitted by link
Edit User
 - Change username (same as existing, different than existing)
 - Get password wrong
 - Change password
 - Edit a different user while logged In
 - Try to edit a user while logged out
Nav Links
- Sidebar nav Links
Jumbotron
- Register / Log In Links
- Add Definition Link
404 page
- Check randomly generated button text
- Ensure page appears when link incorrect
Upvote / Downvote
- Rate while logged out
    - Test Modal link
- Give same rating previously given (take back)
- Give a upvote rating
- Give a downvote rating
- Give opposite rating to previously given
- Check terms disappear when rating drops below threshold
Buttons
- Hover behaviour and Colours
- Actions on click
Filters
- Search for a term
    - Terms exist
    - No results (test link) - logged in and logged out
    - Test x button to clear
- Game Dropdown
- Filter by letter
    - Test behaviours of other filters when changing each other filter
- Clear filters button

Admin Features
 - Edit a term
 - Delete a term
 - Add a new game
 - Edit a supported game 
 - Delete a supported game

## Issues Encountered and Resolutions



### Any known issues?


## Meeting user expectations



## Deployment
### Configure Mongo Atlas Database
* Sign in or sign up to [MongoDB](https://account.mongodb.com/account)
* Create a new cluster
* Clicking on the "Connect" button will enable you to connect to this cluster
* Under the Collections tab, click Create Database
* For ease of use, this project has collections for games, terms, and users; set these collections up
* Under the Security Menu on the left, select Database Access.
* Add a new database user, and keep the credentials secure
* Within the Network Access option, add IP Address 0.0.0.0 


### Local Deployment
To clone this project and deploy it locally:
* Navigate to the [Esports Dictionary project respository](https://github.com/mark-obeirne/esports-dictionary)
* Click on the green button, marked "Code"
* Copy the link provided (https://github.com/mark-obeirne/esports-dictionary.git)
* Using your terminal, type "git clone" followed by the link 
* As Python is utilised, it is recommended to operate within a virtual environment. The instructions on setting up and activating a virtual environment can differ based on your operating system, so it is best to consult the offical [Python Documentation](https://docs.python.org/3/library/venv.html).
* Install required modules used in this project with the command "pip -r requirements.txt"
* Create a file called ".flaskenv" and within this file, create the SECRET_KEY and MONGO_URI variables. The MONGO_URI will link to your own database and will look like this:


    mongodb+srv://<username>:<password>@<cluster_name>-qtxun.mongodb.net/<database_name>?retryWrites=true&w=majority

* You should now be able to run this application locally by typing "python3 app.py"
* The website will be available at http://127.0.0.1:5000



### Heroku
In order to deploy this project to Heroku:
* Create a requirements.txt file by typing "pip3 freeze --local > requirements.txt" into the terminal line
* Create a Procfile by typing "echo web: python app.py > Procfile". It is important to note that the first letter of "Procfile" is capitalised.
* Add, commit, and push these files to GitHub
* Navigate to the [Heroku website](https://dashboard.heroku.com/)
* Click on "New" in the top right hand corner and then select "Create new app" from the dropdown
* Proceed to give it a unique app name and choose a region that is local to you
* Once created, scroll down to the Deployment method section on the app's dashboard
* For the purpose of this project, Github was utilised, enabling us to search for the relevant repository to connect to
* Once connected, navigate to the app's settings page and find the section marked "Config Vars"
* Reveal Config Vars and set the following:


    IP = 0.0.0.0
    MONGO_DBNAME = [Name of MongoDB chosen]
    MONGO_URI = mongodb+srv://<username>:<password>@<cluster_name>-qtxun.mongodb.net/<database_name>?retryWrites=true&w=majority
    PORT = 5000
    SECRET_KEY = [Secret key chosen]

* Click the Deploy tablet
* Under "Manual Deployment", ensure that the master branch is selected and click "Deploy Branch"


 

## Credits



## Acknowledgement


## Disclaimer
This project is for educational purposes only.