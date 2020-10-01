// Materialize Initialisation

// Initialise Sidenav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: "right"
  });
});

// Initialise Dictionary Select Dropdown
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});

// Initialise Dictionary Collapsible
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    outDuration: 200
  });
});

// Initialise Tooltips
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {
    html: true
  });
});

// Initialise Floating Action Button
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {});
});

// Initialise Character Counter
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelector("#long_description");
  const instances = M.CharacterCounter.init(elems, {});
});


// Functions
/* 
    Search for terms as user types in the searchbar
*/
function searchTerms() {
  const searchField = document.querySelector(".searchbar");
  const searchTerm = searchField.value;
  const regex = new RegExp(searchTerm, "gi");
  const allTerms = Array.from(document.querySelectorAll(".term"));
  const termText = allTerms.map(term => term.textContent);
  const found = termText.filter(term => {
    return term.match(regex);
  });
  filterBySearch(allTerms, found);
}


function filterBySearch(allTerms, matches) {
  allTerms.forEach(term => {
    if (matches.includes(term.textContent)) {
      term.parentElement.parentElement.parentElement.classList.remove("hidden");
    }
    else(term.parentElement.parentElement.parentElement.classList.add("hidden"));
  });
  checkAllTermsHidden();
}


function clearSearchbar() {
  const searchbar = document.querySelector(".searchbar");
  searchbar.value = "";
  showAllDefinitions();
}


/* 
    Filter displayed definitions based on the letter that the user selects 
    from the alphabetical buttons displayed. Hide containers where the 
    first letter of the term doesn't match the selected filter
*/
function filterByLetter() {
  clearSearchbar();
  const letter = this.innerText;
  const allTerms = Array.from(document.querySelectorAll(".term"));
  allTerms.forEach(term => {
    if (term.textContent[0] !== letter) {
      term.parentElement.parentElement.parentElement.classList.add("hidden");
    }
    else(term.parentElement.parentElement.parentElement.classList.remove("hidden"));
  });
  checkAllTermsHidden();
}


/* 
    Filter displayed definitions based on the game that the user selects 
    from the game dropdown
*/
function filterByGame() {
  clearSearchbar();
  const chosenGame = this.value;
  const allGameCategories = Array.from(document.querySelectorAll(".game-name"));
  allGameCategories.forEach(gameName => {
    if (gameName.textContent !== chosenGame) {
      gameName.parentElement.parentElement.parentElement.classList.add("hidden");
    }
    else(gameName.parentElement.parentElement.parentElement.classList.remove("hidden"));
  });
  checkAllTermsHidden();
}


/* 
    Show all definitions. Used when changing filters or when the user 
    clicks the Clear Filters button
*/
function showAllDefinitions() {
  const allTermContainers = Array.from(document.querySelectorAll(".term-container"));
  allTermContainers.forEach(container => container.classList.remove("hidden"));
  checkAllTermsHidden();
}

/* 
    Check if filter applied has hidden every definition
*/
function checkAllTermsHidden() {
  const allTermContainers = Array.from(document.querySelectorAll(".term-container"));
  const allHidden = allTermContainers.every(container => container.classList.contains("hidden"));
  const prompt = document.querySelector(".blank-search");
  if (allHidden) {
    prompt.classList.remove("hidden");
  }
  else {
    prompt.classList.add("hidden");
  }
}


/*
    When registering, check the confirm password field against the password
    field. If the two do not match, display a warning that advises user 
    that they don't match, highlight the field in red (as other validation
    checks do), and disable the Register button
*/
function confirmPasswordMatch() {
  const passwordField = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  const passwordWarningText = document.querySelector(".confirm-warning");

  if (confirmPassword.value !== passwordField.value) {
    confirmPassword.classList.remove("valid");
    confirmPassword.classList.add("invalid");
    passwordWarningText.classList.remove("hidden");
  }
  else {
    passwordWarningText.classList.add("hidden");
  }

}


/* 
    Disable / Enable Register button depending on valid status of registration 
    fields
*/
function checkAllValid() {
  const requiredFields = Array.from(document.querySelectorAll(".validate"))
  const btn = document.querySelector(".registerBtn");
  const allValid = requiredFields.every(field => field.classList.contains("valid"))
  
  if (allValid) {
      btn.classList.remove("disabled");
  } else {
      btn.classList.add("disabled");
  }
}

/*
    Update the "Back to homepage" button on 404.html with a randomly chosen
    gaming term from a predefined list
*/
function updateHomepageButton() {
  const homepageBtn = document.querySelector(".homepage-button");
  const phrases = ["Rocket Jump", "Bunny Hop", "Auto Run", "Fast Travel", "Teleport", "Strafe Jump", "Barrel Roll", "Shootdodge", "Noclip"];
  const choice = phrases[Math.floor(Math.random() * phrases.length)];
  homepageBtn.innerHTML = "<a class='off-white' href='/get_terms'><i class='fas fa-home'></i> " + choice + " back to the homepage</a>";
}


/*
    Display modal to confirm that the user wishes to delete a term. 
    Function updates the button with the href that targets the 
    delete_definition function in app.py and supplies the term's ID

*/
function deleteTermModal(e) {
  const modal = document.querySelector(".delete-term-modal");
  const closeBtn = document.querySelector(".close-modal");
  const confirmDeleteBtn = document.querySelector(".modal-delete-btn");
  const term = e.target.dataset.id;
  modal.classList.remove("hidden");
  confirmDeleteBtn.setAttribute("href", "delete_definition/" + term);
  closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}


/*
    Display modal to confirm that the user wishes to delete a game. 
    Function updates the button with the href that targets the 
    delete_game function in app.py and supplies the game's ID

*/
function deleteGameModal(e) {
  const modal = document.querySelector(".game-modal");
  const closeBtn = document.querySelector(".close-modal");
  const confirmDeleteBtn = document.querySelector(".modal-delete-btn");
  const game = e.target.dataset.id;
  modal.classList.remove("hidden");
  confirmDeleteBtn.setAttribute("href", "delete_game/" + game);
  closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}


/* 
    Update rating displayed in real time as user upvotes or downvotes a 
    definition. If a user has previously upvoted and upvotes again, it will
    remove that initial upvote, reducing the total rating by 1. If the user
    has previously downvoted a rating and now upvotes it, it removes the 
    initial downvote (increasing the rating by 1) before applying the new 
    upvote (increasing the rating by another 1) 
*/
function changeRating(ratingIndex, changeOfRating) {
  const allRatings = document.querySelectorAll(".term-rating");
  let thisRating = allRatings[ratingIndex];
  let thisRatingNumber = parseInt(thisRating.innerHTML, 10);
  thisRatingNumber += changeOfRating;
  thisRating.innerHTML = thisRatingNumber;
}


/* 
    Controls behaviour of upvote arrow when a user clicks upon it.
    Changes the class of the arrow's parent based on if the user had 
    previously upvoted, downvoted, or had not voted. Calls upon 
    changeRating function to update the rating based on these same factors.
*/
function arrowOnUpvote(chosenArrow) {
  const allArrows = Array.from(document.querySelectorAll("[data-value]"));
  const chosenArrowIndex = allArrows.indexOf(chosenArrow);
  const parentSpan = chosenArrow.parentElement;
  const correspondingDownArrow = allArrows[chosenArrowIndex + 1];
  const correspondingArrowParent = correspondingDownArrow.parentElement;

  if (parentSpan.classList.contains("inactive") && correspondingArrowParent.classList.contains("active")) {
    parentSpan.classList.remove("inactive");
    parentSpan.classList.add("active");
    correspondingArrowParent.classList.remove("active");
    correspondingArrowParent.classList.add("inactive");
    changeRating(chosenArrowIndex / 2, 2);
  }
  else if (parentSpan.classList.contains("inactive")) {
    parentSpan.classList.remove("inactive");
    parentSpan.classList.add("active");
    changeRating(chosenArrowIndex / 2, 1);
  }
  else if (parentSpan.classList.contains("active")) {
    parentSpan.classList.remove("active");
    parentSpan.classList.add("inactive");
    changeRating(chosenArrowIndex / 2, -1);
  }
  else return;
}


/*
    Gets the ID of the term being rated as well as the username of the user
    rating the term. Passes these details to the upvote function in app.py.
*/
function handleUpvote(e) {
  e.stopPropagation();
  const clickedArrow = e.target;
  arrowOnUpvote(clickedArrow);

  const termID = clickedArrow.dataset.value;
  const username = clickedArrow.dataset.user;

  let request = new XMLHttpRequest();
  request.open('POST', 'upvote/' + termID + "/" + username, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(termID, username);
}


/* 
    Controls behaviour of downvote arrow when a user clicks upon it.
    Changes the class of the arrow's parent based on if the user had 
    previously downvoted, upvoted, or had not voted. Calls upon 
    changeRating function to update the rating based on these same factors.
*/
function arrowOnDownvote(chosenArrow) {
  const allArrows = Array.from(document.querySelectorAll("[data-value]"));
  const chosenArrowIndex = allArrows.indexOf(chosenArrow);
  const parentSpan = chosenArrow.parentElement;
  const correspondingUpArrow = allArrows[chosenArrowIndex - 1];
  const correspondingArrowParent = correspondingUpArrow.parentElement;

  if (parentSpan.classList.contains("inactive") && correspondingArrowParent.classList.contains("active")) {
    parentSpan.classList.remove("inactive");
    parentSpan.classList.add("active");
    correspondingArrowParent.classList.remove("active");
    correspondingArrowParent.classList.add("inactive");
    changeRating((chosenArrowIndex - 1) / 2, -2);
  }
  else if (parentSpan.classList.contains("inactive")) {
    parentSpan.classList.remove("inactive");
    parentSpan.classList.add("active");
    changeRating((chosenArrowIndex - 1) / 2, -1);
  }
  else if (parentSpan.classList.contains("active")) {
    parentSpan.classList.remove("active");
    parentSpan.classList.add("inactive");
    changeRating((chosenArrowIndex - 1) / 2, 1);
  }
  else return;
}


/*
    Gets the ID of the term being rated as well as the username of the user
    rating the term. Passes these details to the downvote function in app.py.
*/
function handleDownvote(e) {
  e.stopPropagation();
  const clickedArrow = e.target;
  arrowOnDownvote(clickedArrow);

  const termID = clickedArrow.dataset.value;
  const username = clickedArrow.dataset.user;

  let request = new XMLHttpRequest();
  request.open('POST', 'downvote/' + termID + "/" + username, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(termID, username);
}


/*
    Displays modal if user tries to rate a term while not logged in to 
    encourage them to register or log in
*/
function loginModalPrompt(e) {
  e.stopPropagation();
  const modal = document.querySelector(".login-modal");
  const closeBtn = document.querySelector(".close-prompt");
  modal.classList.remove("hidden");
  closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}


/* 
    Prevent definition's collapsible body from opening if user clicks on
    username that submitted a definition to view their profile
*/
function stayCollapsed(e) {
  e.stopPropagation();
}

/*
     Add stars to the user's profile page under their total rating based on
     the value passed through from displayStarRating function
 */
function addProfileStars(quantity) {
  const starSection = document.querySelector(".user-stars");
  starSection.innerHTML += "<i class='fas fa-star'></i> ".repeat(quantity);
}

/* 
     Calculate how many stars should be displayed on a user's profile page
     based on their total rating stored in the database
*/
function displayStarRating() {
  const userRating = document.querySelector(".total-rating").textContent;
  if (userRating < 10) {
    addProfileStars(1)
  }
  else if (userRating >= 10 && userRating <= 100) {
    addProfileStars(2);
  }
  else if (userRating > 100 && userRating <= 200) {
    addProfileStars(3);
  }
  else if (userRating > 200 && userRating <= 500) {
    addProfileStars(4);
  }
  else {
    addProfileStars(5);
  }
}


/*
    Handle messages posted from Contact Us page
*/
function sendMessage(e) {
  const contactForm = document.querySelector(".contact-form");
  e.preventDefault();
  emailjs.send("gmail", "esportsdictionary", {
      "name": contactForm.name.value,
      "email": contactForm.email.value,
      "message": contactForm.message.value
    })
    .then(function (response) {
      contactForm.submit();
    }, function (error) {
      alert("We're sorry, an error occurred: ", error);
    })
  return false;
}


// Event Listeners
// Test for existence

document.addEventListener("DOMContentLoaded", function () {
  // Filter definitions displayed on Dictionary page by letter 
  const alphabetFilters = document.querySelectorAll(".alphabet-letter");
  if (alphabetFilters) {
    alphabetFilters.forEach(letter => letter.addEventListener("click", filterByLetter));
  }

  // Filter definitions displayed on Dictionary page by game
  const gameDropdown = document.querySelector(".game-filter");
  if (gameDropdown) {
    gameDropdown.addEventListener("change", filterByGame);
  }

  // Clear filters
  const clearFilterBtn = document.querySelectorAll(".clear-btn");
  if (clearFilterBtn) {
    clearFilterBtn.forEach(button => button.addEventListener("click", showAllDefinitions));
  }

  // Check if password and confirm password fields match on registration page
  const confirmPasswordField = document.querySelector("#confirm-password");
  if (confirmPasswordField) {
    confirmPasswordField.addEventListener("focusout", confirmPasswordMatch);
  }

  // Update text contained within homepage button on 404 page
  const homepageRedirect = document.querySelector(".homepage-button");
  if (homepageRedirect) {
    window.addEventListener("load", updateHomepageButton);
  }

  // Open modal to confirm if user wishes to delete a term
  const termModalBtn = document.querySelectorAll(".term-modal-btn");
  if (termModalBtn) {
    termModalBtn.forEach(button => button.addEventListener("click", deleteTermModal));
  }

  // Open modal to confirm if user wishes to delete a game
  const gameModalBtn = document.querySelectorAll(".game-modal-btn");
  if (gameModalBtn) {
    gameModalBtn.forEach(button => button.addEventListener("click", deleteGameModal));
  }

  // Handle upvotes and downvotes
  const upArrow = document.querySelectorAll(".uparrow");
  if (upArrow) {
    upArrow.forEach(arrow => arrow.addEventListener("click", handleUpvote));
  }

  const downArrow = document.querySelectorAll(".downarrow");
  if (downArrow) {
    downArrow.forEach(arrow => arrow.addEventListener("click", handleDownvote));
  }

  // Prompt logged out users to login if they try to rate a term
  const loginPrompt = document.querySelectorAll(".modal-arrow");
  if (loginPrompt) {
    loginPrompt.forEach(button => button.addEventListener("click", loginModalPrompt));
  }

  // Search and filter terms based on user's keypresses
  const searchbar = document.querySelector(".searchbar");
  if (searchbar) {
    searchbar.addEventListener("keyup", searchTerms);
  }

  // Clear the searchbar
  const clearBtn = document.querySelector("#clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearSearchbar);
  }

  // Prevent collapsible body from opening if user clicks submitted by username
  const submissionCredit = document.querySelectorAll(".username");
  if (submissionCredit) {
    submissionCredit.forEach(username => username.addEventListener("click", stayCollapsed));
  }

  // Display stars on user profile
  const userRating = document.querySelector(".user-rating");
  if (userRating) {
    window.addEventListener("load", displayStarRating);
  }

  // Send message via EmailJS
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", sendMessage);
  }

  // Check all registration fields valid
  const registrationForm = document.querySelector(".registration-form");
  if (registrationForm) {
    const requiredFields = document.querySelectorAll(".validate");
    requiredFields.forEach(field => field.addEventListener("focusout", checkAllValid));  
  }
});