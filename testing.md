# Testing Details
[README.md file](https://github.com/mark-obeirne/esports-dictionary/blob/master/README.md)

This document includes details of sites used for validation and testing, how manual testing was accomplished, and issues faced over the course of this project's completion.

## Table of Contents
* [Validators and Tools](#validators-and-tools)
* [Manual Testing](#manual-testing)
    * [Devices Used for Testing](#devices-used-for-testing)
* [Manual Testing Process](#manual-testing-process)
    * [Register Functionality](#register-functionality)
    * [Log In Functionality](#log-in-functionality)
    * [Sign Out Functionality](#sign-out-functionality)
    * [Submit Definition](#submit-definition)
    * [Edit Term](#edit-term)
    * [Delete Term](#delete-term)
    * [Profile Page](#profile-page)
    * [Edit User Details](#edit-user-details)
    * [Navigation](#navigation)
    * [Jumbotron Links](#jumbotron-links)
    * [404 Page](#404-page)
    * [Upvote / Downvote Functionality](#upvote--downvote-functionality)
    * [Search Filters](#search-filters)
    * [Admin Features](#admin-features)
        * [Edit A Term](#edit-a-term)
        * [Delete A Term](#delete-a-term)
        * [Add New Game](#add-new-game)
        * [Edit Game](#edit-game)
        * [Delete Game](#delete-game)
* [Issues Encountered and Resolutions](#issues-encountered-and-resolutions)
* [Any Known Issues](#any-known-issues)




### Validators and Tools
[W3C Markup Validation Service](https://validator.w3.org/) - Every page across the site was input directly into this service, resulting in no highlighted errors. This was done in a state of being logged in and logged out for thoroughness.

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - No errors were highlighted after inputting the style.css file into this service.

[JSHint](https://jshint.com/) - JSHint highlighted unused variable errors in relation to the initialisation of Materialise components. One error was highlighted in relation to custom JS whereby the EmailJS variables were undeclared. Scripts relating to this page are, however, found on the Contact page alone and were inaccessible by this online tool when testing.

[ESPrima (JS)](https://esprima.org/demo/validate.html) - Code was returned as being syntactically valid.

[Pep8 Online](http://pep8online.com/checkresult) - No errors were highlighted when testing Python code.

[Web Accessibility by Level access](https://www.webaccessibility.com/) - Esports Dictionary received a compliance rating of 92%. One note highlighted that it is best practice to provide warning in relation to links that open new windows, which is the case with the icons in the footer. 

[WAVE](https://wave.webaim.org/report#/http://esports-dictionary.herokuapp.com/) - After fixing highlighted errors, no further errors were flagged. Contrast errors were highlighted however. These were linked to text that is visible to screen readers only and text that appears over the jumbotron image where the background colour of this image is ignored. To ensure that there is adequate contrast used across the site, Google's Developer Tools have been utilised extensively throughout the project.



## Manual Testing
### Devices Used for Testing
Please note that this project does not support Internet Explorer due to the use of ES6 features and notation. Esports Dictionary was tested on a variety of devices, including:

Dell Laptop
* Google Chrome
* Microsoft Edge
* Mozilla Firefox

Samsung Galaxy S10 Mobile
* Google Chrome
* Firefox
* Kiwi Browser

iPhone 8 Mobile
* Google Chrome
* Safari


### Manual Testing Process
While testing this site, a regular user and an admin account were utilised to check behaviour across these usergroups. In addition, many functions were tested while logged out to ensure that some defensive programming measures were in place.

#### Register Functionality
1. Click on the Register button while logged out and ensure that the page loads
2. Enter a username
3. Enter a password
4. Enter a mismatched password when confirming password. Ensure that this is highlighted as invalid and the submit button disables.
5. Click Register
    * If the username is available, the user should be logged in, redirected to the homepage, and greeted with a flash message
    * If the username is currently in use, the page should reload and a flash message should inform the user that they have to choose another username

##### Additional Checks
* While logged in, attempt to access the register page directly via the link. Ensure that the homepage is loaded with a flash message informing the user that they are already registered and logged in. 
* Click on the link to log in page. Ensure that the correct page loads.
* Attempt to sign up with a swear word as a username. The page should reload and inform the user that this username is unavailable. Testing has found that there are some workarounds despite better-profanity's ability to swap in numbers for letters and match swear words.
* Try to sign up with the same username as another user but in a different case. Ensure that the user is informed that they cannot use this username.

#### Log In Functionality
1. Click on the Log In button while logged out and ensure that the page loads.
2. Enter an incorrect username and/or password. The page should reload and inform the user that they have supplied the wrong details by way of a flash message.
3. Enter the correct details and click log in.
4. The user should be redirected to the homepage and greeted with a flash message.

##### Additional Checks
* While logged in, attempt to access the log in page directly via the link. Ensure that the homepage is loaded with a flash message informing the user that they are already logged in.
* Click on the link to register page. Ensure that the correct page loads.
* Attempt to log in with a case that doesn't match the original username. The user should be able to log in and the flash message should display the username stored in the database.

#### Sign Out Functionality
1. While logged in, click on the log out button. The homepage should load with a flash message to inform the user that they have logged out.

##### Additional Checks
* If the user is an admin, ensure that they are unable to access admin areas after logging out.
* While logged out, attempt to visit the log out URL directly. Ensure that the homepage loads with a flash message informing the user that they are not logged in.

#### Submit Definition
1. Click on Submit Definition link and ensure that page loads correctly.
2. Avoid filling out one of the mandatory fields and attempt to submit the form. Ensure that the form does not submit and the user is informed that they have not completed a required field.
3. Click the cancel button and ensure that user is brought to homepage.
4. Complete the form correctly and click the add definition button. Ensure that the user is redirected to the homepage and a flash message thanks them for their submission.

##### Additional Checks
* While logged out, attempt to access the submit definition URL directly. The user should be redirected to the homepage and informed through a flash message that they must register or log in to submit a definition.
* After submitting a definition, ensure that the user's term is displayed on the homepage and has been upvoted by them as standard.


#### Edit Term
1. On the Dictionary page, find a term submitted by own username and click the edit button. Ensure that edit page loads correctly. 
2. Click on the cancel button and ensure that user is brought to homepage.
3. From the edit definition page again, edit some fields and click the update definition button. Ensure that the dictionary page loads, the term's details have updated and other details have remained the same. 

##### Additional Checks
* Attempt to navigate directly to the edit definition page, adding the ID of another existing term by another user. Ensure that the user is redirected to the homepage and a flash message is shown to tell them that they cannot edit a definition by another user.
* Attempt to navigate directly to the edit definition page for a term while logged out. Ensure that the user is redirected to the homepage and a flash message appears informing them to log in to edit a definition.

#### Delete Term
1. On the Dictionary page, find a term submitted by own username and click the delete button. Ensure that the modal pops up correctly. 
2. On the resulting modal, click the cancel button to close the modal.
3. Reopen the delete button. Click the X in the top right corner of the modal to close it.
4. Open the modal one more time and click Delete


##### Additional Checks
* Attempt to process a deletion of a term directly by inputting the ID of a term; if you submitted the term, it should reload the homepage and confirm that the term has been deleted.
* Attempt to delete a term submitted by another user by inputting the URL for delete definition and the ID of a term; the user should be directed to the homepage with a flash message informing them that they cannot delete a term they did not submit.
* Attempt to delete a term while logged out by inputting the URL for delete definition and the ID of a term; the user should be directed to the homepage with a flash message informing them that they cannot delete a term while logged out.


#### Profile Page
1. Use the navbar to visit My Profile when logged in and ensure the page loads correctly
2. Click on the edit user details button when viewing own profile and ensure that the edit user details page loads correctly. This page is tested further at a later point.
3. Click on the collapsible headers on the profile page and ensure that they open and display the relevant details.
4. On the Dictionary page, hover over a username and ensure that the tooltip appears to indicate that the user's profile page can be visited.
5. On the Dictionary page, click on a username and ensure that their profile page displays correctly. 
6. Visit the profile page of an account that has not submitted a definition yet and ensure that the visitor is informed that the user hasn't posted yet.

#### Edit User Details
1. Navigate to the profile of the user logged in
2. Click the edit user details button
3. Attempt to update the username to one that is currently in use. The page should reload with a flash message indicating that the username is unavailable.
4. Attempt to update username or password without filling in current password. The form validation should highlight that this is a necessary field.
5. Cancel any changes by clicking the cancel button. The user is brought back to their profile page.
6. Proceed with changing user details. Upon submission ensure that the user is brought to their profile page and their new username is displayed.
7. Ensure that this new username is featured on any submitted terms to date. 

##### Additional Checks
* Attempt to access the edit user page directly while logged out; the user is redirected to the homepage with a flash message advising that they need to log in to update their details.
* Attempt to access the edit user page directly while logged in as a different user; the user is redirected to the homepage and a flash message displays informing them that they do not have permission to edit the user's details.

#### Navigation
1. Access each page in the navbar while logged in.
2. Access each page featured in the mobile side navbar while logged in.
3. Access each page in the navbar while logged out.
4. Access each page featured in the mobile side navbar while logged out.
5. Log in as an admin and navigate to the Manage Games page using the navbar.
6. While logged in as an admin, navigate to the Manage Games page using the mobile side navbar.

#### Jumbotron Links
1. While logged out, click on the Register button in the jumbotron and ensure the page loads correctly.
2. While logged out, click on the Log In button in the jumbotron and ensure the page loads correctly.
3. While logged in, ensure that the button in the jumbotron displays "Add Term".
4. Click on the Add Term button and ensure the page loads correctly.

#### 404 Page
1. Navigate to the 404 page by typing an incorrect URL into the address bar and ensure the page loads correctly.
2. Refresh the resulting 404 page and check text in the "Back to Homepage" button.
3. Click on the back to homepage button and ensure that the page loads correctly.


#### Upvote / Downvote Functionality
1. Attempt to rate a definition while logged out; a modal inviting the user to register or login should appear
2. Test these links to ensure they bring the user to the correct pages.
3. Give an upvote to a definition. Ensure that the arrow turns blue and the number ticks up by 1.
4. Click on the upvote arrow on the same definition to indicate a change of mind. Ensure that the arrow turns grey and the rating is reduced by 1.
5. Give a downvote to a different definition. Ensure that the arrow turns blue and the rating is decreased by 1.
6. Click on the downvote arrow on the same definition to indicate a change of mind. Ensure that the arrow turns grey and the rating is increased by 1.
7. Using a term already rated, click on the opposite arrow to the rating given previously. Ensure that the active arrow changes to reflect the new verdict and the rating changes by 2 - 1 to take back the rating initially left and 1 to increase or decrease the rating to reflect new verdict. 
    * If the rating simply changed by 1, that would leave the definition's rating at a neutral level rather than indicating that the user now likes it (as if they had upvoted in the first place) or dislikes it (as though they had initially downvoted). 
8. Downvote a definition (using multiple accounts if necessary) to drop its rating to -2. Refresh the page and ensure that this definition is now hidden from view.

#### Search Filters
1. Start typing a desired search term in the input field. 
    * Ensure that terms with letters matching the input are displayed while all other terms are hidden.
    * If no matching search terms exist, ensure that a message is displayed to the user inviting them to submit a definition (or log in or register to submit a definition if logged out).
2. Select a game from the dropdown list to filter by the selected game.
    * Ensure that all terms displayed match the chosen game filter.
    * If no matching search terms exist, ensure that a message is displayed to the user inviting them to submit a definition (or log in or register to submit a definition if logged out).
    * Ensure that the search input field is set back to a blank value
3. On mobile, click the Filter Alphabetically button and ensure the sidenav menu pops out.
4. Select a letter from the sidenav and ensure that filtered terms start with the chosen letter.
    * If no matching search terms exist, ensure that a message is displayed to the user inviting them to submit a definition (or log in or register to submit a definition if logged out).
    * Ensure that the search input field is set back to a blank value
5. Replicate the above step on desktop by clicking on a letter to filter.
6. Click the Clear Filters button and ensure that all terms are displayed once more.


#### Admin Features
The following tests are run while logged into an Admin account.
#### Edit A Term
1. Click the edit button on a definition. Ensure that edit page loads correctly. 
2. Click on the cancel button and ensure that user is brought to homepage.
3. From the edit definition page again, edit some fields and click the update definition button. Ensure that the dictionary page loads, the term's details have updated and other details have remained the same. 

#### Delete A Term
1. On the Dictionary page, click the delete button attached to a term. Ensure that the modal pops up correctly. 
2. On the resulting modal, click the cancel button to close the modal.
3. Reopen the delete button. Click the X in the top right corner of the modal to close it.
4. Open the modal one more time and click Delete and ensure that the page reloads and the term is deleted.

#### Add New Game
1. Navigate to the Manage Games page.
2. Click the Add Game button and ensure that the page loads correctly.
3. Click the cancel button and ensure that the user is brought back to the Manage Games page.
4. Complete the form and click the add game button. Ensure that the user is redirected to the Manage Games page with a flash message to inform them that the game was added correctly.

#### Edit Game
1. Navigate to the Manage Games page.
2. Click the edit button on a game.
3. Click the cancel button and ensure that the user is brought back to the Manage Games page.
4. Complete the form and click Update Game Details. Ensure that the user is brought to the Manage Games page and that changes have been applied.

#### Delete Game
1. Navigate to the Manage Games page.
2. Click the delete button on a game and ensure that the modal opens correctly. 
3. Click the cancel button and ensure that the modal closes. 
4. Open the modal again and click delete. Ensure that the page reloads, a flash message informs the user that the game has been deleted, and the game has been removed.
5. Navigate to the Dictionary page and ensure that any terms associated with the game have been removed due to cascading delete.

##### Note
* Rating points acquired by users from games that get deleted are left intact, as it would not be right to diminish a user's contribution to the site because a game is no longer supported.

##### Additional checks
* Attempt to navigate to the Manage Games page while logged out. The user should be redirected to the homepage and informed that they do not have permission to access the page. 
* Attempt to navigate to the Manage Games page while logged in as a regular user. The user should be redirected to the homepage and informed that they do not have permission to access the page.
* Attempt to add a game while logged out. The user should be redirected to the homepage and informed that they do not have permission to access the page. 
* Attempt to add a game while logged in as a regular user. The user should be redirected to the homepage and informed that they do not have permission to access the page. 
* Attempt to edit a game while logged out. The user should be redirected to the homepage and informed that they do not have permission to access the page. 
* Attempt to edit a game while logged in as a regular user. The user should be redirected to the homepage and informed that they do not have permission to access the page. 
* Attempt to delete a game while logged out. The user should be redirected to the homepage and informed that they do not have permission to manage supported games. 
* Attempt to delete a game while logged in as a regular user. The user should be redirected to the homepage and informed that they do not have permission to manage supported games. 


Buttons
- Hover behaviour and Colours
- Actions on click

## Issues Encountered and Resolutions
### Edit / Delete Buttons
Initially, usernames as strings were utilised to record who had submitted a term. This made the process of checking the session user cookie against the username in the submitted_by field very straightforward. However, my mentor indicated that it would be better to utilise IDs as foreign keys to allow for any changes to usernames to be reflected. Some refactoring was done, but this made the process of displaying usernames next to definitions more tricky. 

I decided against setting a session cookie with the user's id for security. Consulting the Jinja documentation, it seemed that a namespace object would be a good approach to take. This enabled me to run a loop over the list of users in the database and show the username whose ID matched the ID of the submitter. Then if the user accessing the page had the same username as the username displayed under a definition, they could be shown the admin buttons to edit or delete a term.

### Ratings
It was important to be able to rate definitions without leaving the page or forcing users to reload the page. When researching potential solutions, I found an idea [on StackOverflow](https://stackoverflow.com/questions/21566649/flask-button-run-python-without-refreshing-page) that utilised AJAX. This enabled me to run a JavaScript function that could get the ID of the term being rated, handle the feedback on the front end, and pass data (such as the term's ID, to the backend for updating.

### Sticky Navbar
Identifying that the dictionary could be quite long when left unfiltered, I tested a sticky navbar. However, on mobile, the search filters section is also sticky so that it is readily accessible. This resulted in a lot of screen real estate being taken up as the user scrolled down (as well as an overlap of the navbar and the search section).

Initially, I experimented with JavaScript to hide elements within the search section when the screen was scrolled down to a certain point. While some experimenting enabled the headings to hide or display relatively smoothly and other elements to move upwards into this freed up space, there was a point on the page where the function would meet the hide conditions and when hidden, the window scrollY value would cause the elements to display again. 

In the end, I decided that a more elegant approach would be to include a Floating Action Button on each page. This provides users with quick access to important navigation links, and doesn't take up a lot of space.

### Submit Definition
Users were able to submit definitions without being able to select a game from the dropdown menu. Adding required to the select element simply resulted in the form not submitting, but there was no indication as to why the form would not submit. As a result, asterisks were added to the required form elements and the button's default behaviour was set to be disabled (as is the case on the registration page). When the user completes all necessary fields, including selecting an option from the game dropdown, a JavaScript function enables the button so that the definition can be submitted.

#### Dropdown Selection On iPhone
Using Materialize, there is currently a bug on iOS when using the dropdown selection elements (searching for a game, for example). After selecting an option from the list, the wrong option is displayed, and used, as a filter. This issue is not unique to Esports Dictionary, however, and has been reported on a number of sites. The behaviour was replicated on the [Materialize site](https://materializecss.com/select.html) when testing the demo Select element.

A workaround was [posted by alexdpunkt](https://github.com/Dogfalo/materialize/issues/4983) and has been implemented in this project.

### Any known issues?
#### Search Terms Game Dropdown
While the text searchbar is cleared if any other filter is applied, the game dropdown remains set to the last selected filter. Attempts to update the class of the first item to selected or setting the value of the option element have proven fruitless so far. 

