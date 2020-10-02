# [Esports Dictionary](http://esports-dictionary.herokuapp.com/)

## Code Institute - Milestone Project 3

### Live Heroku Link: http://esports-dictionary.herokuapp.com/

![Multi-Device Mockup](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/images/multi-mockup.PNG)

## Table of Contents
* [Summary](#summary)
* [Background](#background)
* [Aim of the Site](#aim-of-the-site)
* [Scope](#scope)
    * [User Stories](#user-stories)
* [Site Features](#site-features)
    * [Jumbotron](#jumbotron)
    * [Search Filters](#search-filters)
    * [User Ratings](#user-ratings)
        * [Explanation of the rating system](#explanation-of-the-rating-system)
    * [Floating Action Button](#floating-action-button)
    * [User Profiles](#user-profiles)
    * [Contact Page](#contact-page)
    * [404 Page](#404-page)
* [Future Features](#future-features)
    * [Profile Gamification](#profile-gamification)
    * [Shop](#shop)
    * [Report Terms](#report-terms)
    * [Favourite Terms](#favourite-terms)
    * [YouTube API Integration](#youtube-api-integration)
* [Information Architecture](#information-architecture)
* [Skeleton](#skeleton)
    * [Mobile Wireframes](#mobile-wireframes)
    * [Tablet Wireframes](#tablet-wireframes)
    * [Desktop Wireframes](#desktop-wireframes)
* [Changes to Wireframes](#changes-to-wireframes)
* [Structure](#structure)
* [Surface](#surface)
    * [Fonts](#fonts)
    * [Colours](#colours)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Meeting User Expectations](#meeting-user-expectations)
* [Deployment](#deployment)
* [Credits](#credits)
* [Acknowledgements](#acknowledgements)


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
The site's main target are passionate gamers who know the lexicon of gaming and, in particular, Esports. These users will shape the site by contributing definitions and rating those that provide the most detail or accuracy. However, as Esports reaches new audiences, it will target these newcomers who want to learn more and develop a greater understanding of the words being used in association with this entertainment industry.

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

* If a user has upvoted a definition, but later downvotes it, the rating will reduce by 2. The +1 that they originally gave it is taken away. And a -1 is subsequently applied. 
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

Achievements are an integral part of videogames and we would like to explore this avenue with achievements that would feature on a user's profile. These achievements would reward users for submissions, for submitting well-received terms, for account longevity, for filling out their profile, and more.  

### Shop
As the site depends on user submissions, it is too early to launch a shop to sell site-related merchandise. As outlined, it is planned that the shop will feature products that draw upon contributed definitions and knowledge such as cute and cartoony A-Z books aimed at parents who are gamers.

### Report Terms
While the site features a rating system, which could enable the community to prevent spam and malicious posting by downvoting submissions, we would like to go further by implementing a reporting system. This would enable users to highlight submissions to an Admin that may need to be edited or deleted. 

Admins are currently able to edit or delete any term, and this system could help them do their job more thoroughly. 

### Favourite Terms
In the future, we plan to enable users to favourite individual terms or definitions for later consultation.

### Expand Profanity Filter
The site utilises the base version of better-profanity, which prevents users from signing up with swear words as their usernames. There are some workarounds, so we would like to customise this feature further over time and continue to evolve a restricted list as new terms crop up.

## Information Architecture
### Database Choice
The NoSQL database, MongoDB, was chosen as the database for this particular project. While there were some elements that would have been better suited, the requirements of this project stipulated that MongoDB should be utilised. As a result, IDs were used as foreign keys where relationships were required.

### Data Storage Types
Esports Dictionary utilised the following data types:
* ObjectId
* String
* Int 32
* Array
* Boolean

### Database Schema
The Esports Dictionary database is made up of three collections: games, terms and users. They contain the following keys as standard:

#### Games Collection

| Name    | Database key | Data Type |
| --- | --- | --- |
|ID  | _id   | ObjectId |
|Game Name | game_name | String |


#### Terms Collection
| Name    | Database key | Data Type |
| --- | ---- | --- |
|ID | _id | ObjectId |
|Term | term_header | String |
| Game | game_fk | String |
| Short Definition | short_definition | String |
| Long Description | long_description | String |
| YouTube Link | youtube_link | String |
| Submitted By | submitted_by | ObjectId |
| Submission Date | submission_date | String |
| Rating | rating | Int 32 |
| Upvoted By | upvoted_by | Array |
| Downvoted By | downvoted_by | Array |

#### Users Collection
| Name    | Database key | Data Type |
| --- | ---- | --- |
|ID | _id | ObjectId |
| Username | username | String |
| Password | password | String |
| Favourite Games | fav_games | String |
| Admin | is_admin | Boolean |
| Favourite Competitors | fav_competitors | String |
| User Rating | total_rating | Int 32 |

##### Relational Data
A user's _id is used as the value for the submitted_by, upvoted_by, and downvoted_by fields in terms where relevant. The relevant game _id value is used as the game_fk value within the terms collection.

## Skeleton
### Mobile Wireframes
* [Dictionary / Home Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Dictionary%20-%20Mobile.png)
* [Register Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Register%20-%20Mobile.png)
* [Submit / Edit Definition Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Submit%20Definition%20Mobile.png)
* [Profile Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Profile%20Mobile.png)
* [Edit User Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Edit%20User%20Mobile.png)
* [Contact Us Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Contact%20Mobile.png)
* [Manage Games Page - Admins](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Manage%20Supported%20Games%20Mobile.png)
* [Add / Edit Game Page - Admins](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Add_Edit%20Game%20Mobile.png)
* [404 Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/404%20Template%20Mobile.png)

### Tablet Wireframes
* [Dictionary / Home Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Dictionary%20Tablet.png)
* [Register Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Register%20-%20Tablet.png)
* [Submit / Edit Definition Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Submit%20Definition%20Tablet.png)
* [Profile Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Profile%20Tablet.png)
* [Edit User Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Edit%20User%20Tablet.png)
* [Contact Us Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Contact%20Tablet.png)
* [Manage Games Page - Admins](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Manage%20Games%20Tablet.png)
* [Add / Edit Game Page - Admins](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Add_Edit%20Game%20Tablet.png)
* [404 Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/404%20Template%20Tablet.png)

### Desktop Wireframes
* [Dictionary / Home Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Dictionary%20Desktop.png)
* [Register Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Register%20-%20Desktop.png)
* [Submit / Edit Definition Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Submit%20Definition%20Desktop.png)
* [Profile Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Profile%20Desktop.png)
* [Edit User Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Edit%20User%20Desktop.png)
* [Contact Us Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Contact%20Desktop.png)
* [Manage Games Page - Admins](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Manage%20Games%20Desktop.png)
* [Add / Edit Game Page - Admins](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/Add_Edit%20Game%20Desktop.png)
* [404 Page](https://raw.githubusercontent.com/mark-obeirne/esports-dictionary/master/static/wireframes/404%20Template%20Desktop.png)

## Changes to Wireframes
### Dictionary Page
On tablets, it was decided to emulate the behaviour and layout of the mobile view when it came to the Alphabetical Filters. In testing, the approach of having a sidebar slide out to allow the user to select a letter was more appealing. On larger devices, the full alphabet could be displayed without taking up too much screen real estate or seeming overwhelming.

### Manage Supported Games
In order to give each game card more space, the number of cards in each row on tablets was reduced to 2. This also ensured that the page would render correctly within Jinja templating even if the game's name splits onto a second line, as is the case with League of Legends.

### Add / Edit Game Page
Initially, it was planned to enable Admins to add links to the icons for the games to be utilised on the homepage. However, as the game's name is not the focal point of the dictionary, the images were taking away from other more important elements or looked too small and hard to make out when reduced further in size.

## Structure
The navbar links available are different based on the user's logged in status, while Admins have another link available to them. The navbar features the site's logo in the centre of the page with the hamburger menu to the right on mobile. On larger devices, the logo shifts to the left-hand side of the page with the navigation options spreading out across the right.

Visitors who are logged out will be presented with these navigation links:
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

For Admins, managing the games available should not be an everyday task, while we do not expect users to be emailing frequently with issues or comments. Finally, the Log Out button is kept on the far right to adhere to traditional placement.

## Surface
### Fonts
As the site is a dictionary, Playfair Display was chosen as the font for page headings and terms. It was decided to use small caps with the first letter capitalised as it looked more appealing in testing.

Roboto was used as the font across the rest of the site as it is easily readable at a range of font-sizes, is easy on the eyes in instances where there is a lot of text (which may be the case in longer descriptions), and combines well with Playfair Display.

### Colours
Gaming websites as a whole have moved away from the black or dark websites that once populated the internet. In addition, Esports takes some of its cues from the world of sports. As highlighted by an [article on Redbull about Esports branding](https://www.redbull.com/ca-en/how-esports-branding-works), the palette of the most notable Esports teams is reds, blues, and whites. This is reminiscent of sports leagues such as the NBA and MLB. This is a palette that we wanted to utilise across the site.

![Site Colours](https://i.imgur.com/akI3bJo.png)

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

### Frameworks
Flask - To construct and render page templates.

Materialize - To create elements such as the Floating Action Button, the sidenav, and tooltips, and to layout each page's structure.


### Tools
MongoDB - To store our database and collections relating to users, terms, and supported games.

PIP - To install and manage software packages.

PyMongo - To enable communication between MongoDB and Python.

Git - To track changes in code during development.

GitHub - To host the project’s repository.

[Trello](https://trello.com/) - To track work that needed to be done, including bugs and tweaks found during testing, and check off completed work. 

[Balsamiq](https://balsamiq.com/wireframes/desktop/#) - To create the wireframes that the site's design and layout is based upon.

[Coolors](https://coolors.co/) - For finding a suitable palette for the site.

[Google Fonts](https://fonts.google.com/) - To find the right fonts for this site's purpose.

[Font Awesome](https://fontawesome.com/) - For icons used across the site, which provide the user with additional context at first glance.

[Gimp 2](https://www.gimp.org/) - For image manipulation and to create the brand logo.

[TinyPNG](https://tinypng.com/) - To compress and optimise image files.

[Favicon Converter](https://favicon.io/favicon-converter/) - To create the favicon based on the brand logo.

[HTML Formatter](https://webformatter.com/html) - To format HTML files and ensure consistency in spacing.

[FreeFormatter CSS Beautifier](https://www.freeformatter.com/css-beautifier.html#ad-output) - To format CSS stylesheet.

[FreeFormatter JS Beautifier](https://www.freeformatter.com/javascript-beautifier.html) - To format script.js file.



## Testing
Information related to the testing of this project, issues encountered, and any known outstanding bugs can be found in the [testing.md](https://github.com/mark-obeirne/esports-dictionary/blob/master/testing.md) file.

## Meeting user expectations
* "As an Esports fanatic, I want to be able to share my knowledge so that more people can enjoy this passion of mine."

It has been made very easy for users to sign up and immediately start contributing terms to the dictionary. On the homepage, where the user is redirected once they are registered and logged in, there are three immediate ways to submit a definition - via the link in the navbar, from the button in the jumbotron, or from the link in the Floating Action Button. Additionally, if a user searches and is presented with no results, they are invited to submit a definition.  

* "As a parent, I want to learn more about my child's hobby, so that I can connect with them and spend some more quality time with them."

Not only are users able to search for terms and gain a greater understanding of the lexicon used within the Esports realm, but those submitting definitions are able to provide additional context by linking to YouTube videos, which provides a fuller explanation of the term in question.

* "As a sports fan who stumbled upon gaming coverage during lockdown, I would like to be able to understand what the commentators are talking about, so that I can enjoy the action more."

As stated previously, the goal is to build a comprehensive knowledge bank of terms and their meaning. In addition, providing YouTube videos alongside the terms and their meanings provides additional context as to what the term means and when it might be used.


* "As the site owner, I would like to build a comprehensive glossary of gaming and Esports terms so that the site is the go-to resource when someone wants to find out what a gaming term means."

By making it straightforward to register and submit definitions, there are fewer barriers in the way for users to get involved. In addition, unlike formally written articles, the site can stay up to date through user submissions and ratings. Finally, admins are able to maintain the list of supported games, adding new games as they are released and utilised for competitive play. All of these terms for a variety of games are housed in one convenient location, readily searched or perused.

"As the site owner, I want to be able to find ways to reward users for getting involved, so that they will help to contribute to this database of knowledge."

* To start, users gain rating points based on their submissions and the quality of these submissions as deemed by their peers. However, there is room to expand this further as noted in the Future Features section as the site experience is gamified with users earning achievements based on their activities.

"As the site owner, I would like to leverage this database of knowledge in the future by selling books on the topic, so that we have another revenue stream."

* This is a future goal of the site, as we understand that we need to build a solid database of knowledge as well as a core group of users first. However, we have seen this as an opportunity to pursue further.

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
* As Python is utilised, it is recommended to operate within a virtual environment. The instructions on setting up and activating a virtual environment can differ based on your operating system, so it is best to consult the official [Python Documentation](https://docs.python.org/3/library/venv.html).
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
### Code
[Using Markup to display flash messages with links](https://pythonpedia.com/en/knowledge-base/21248718/how-to-flashing-a-message-with-link-using-flask-flash-): This enabled me to feature links to the register / login page in flash messages displayed if a user attempts to complete an action that they do not have permission to do (submitting or deleting a term if logged out, for example).

[HoverCSS](https://github.com/IanLunn/Hover): This package of CSS was used to alter the behaviour of the social media icons in the footer of hover, enabling them to grow and stand out more.

[Sorting list of dictionaries](https://www.geeksforgeeks.org/ways-sort-list-dictionaries-values-python-using-lambda-function/): As lambda functions were not something that I had much experience with to date, I consulted this guide, which pointed me in the right direction for sorting a list of dictionaries by value. This enabled me to hand over the sorting of terms to its own unique function.

[Adjusting colour of form input text](https://stackoverflow.com/questions/14431818/css-styling-placeholder-text)

[Spinner button on Contact Us page](https://www.w3schools.com/howto/howto_css_loading_buttons.asp)

[Fix iOS issue with Materialize select dropdowns](https://github.com/Dogfalo/materialize/issues/4983)

### Media
[Logo Image](https://cdn.pixabay.com/photo/2017/09/08/00/05/icon-2727224_960_720.png)

[Rocket League Image](https://rocketleague.media.zestyio.com/rl_platform_keyart_2019.309bf22bd29c2e411e9dd8eb07575bb1.jpg)

[Team Fortress 2 Spy - 404 Page](https://e7.pngegg.com/pngimages/509/122/png-clipart-team-fortress-2-dota-2-valve-corporation-mod-steam-chic-spy-day-face-team.png)

## Acknowledgements
I would like to thank my mentor, Antonio Rodriguez for their support and advice over the course of the project.

I would also like to thank my fellow Code Institute students and the alumni who provided support, advice, and a second opinion on Slack.

Finally, I would like to thank all those who took the time to test this website and provide feedback and suggestions.


## Disclaimer
This project is for educational purposes only.