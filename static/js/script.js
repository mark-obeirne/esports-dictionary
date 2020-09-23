// Materialize Initialisation

// Initialize Sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: "right"});
  });

// Initialize Dictionary Select Dropdown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }); 

  // Initialize Dictionary Collapsible
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {outDuration: 200});
  }); 


  // Functions
    
    function filterByLetter() {
        showAllDefinitions()
        const letter = this.innerText;
        const allTerms = Array.from(document.querySelectorAll(".term"))
        const allTermContainers = Array.from(document.querySelectorAll(".term-container"))
        // Hide a definition's container if the first letter doesn't match the selected letter
        allTerms.forEach(term => {
            if (term.textContent[0] !== letter) {
                term.parentElement.parentElement.parentElement.classList.add("hidden")
            } else (term.parentElement.parentElement.parentElement.classList.remove("hidden"))
        })
    }

    function filterByGame() {
        showAllDefinitions()
        const chosenGame = this.value;
        const allGameCategories = Array.from(document.querySelectorAll(".game-name"));
        const allTermContainers = Array.from(document.querySelectorAll(".term-container"));
        // Hide a definition's container if the term's associated game doesn't match the selected game
        allGameCategories.forEach(gameName => {
            if (gameName.textContent !== chosenGame) {
                gameName.parentElement.parentElement.parentElement.classList.add("hidden")
            } else (gameName.parentElement.parentElement.parentElement.classList.remove("hidden"))
        })
    }

    function showAllDefinitions() {
        const allTermContainers = Array.from(document.querySelectorAll(".term-container"))
        allTermContainers.forEach(container => container.classList.remove("hidden"))
    }

    function confirmPasswordMatch() {
        const passwordField = document.querySelector("#password")
        const confirmPassword = document.querySelector("#confirm-password")
        const passwordWarningText = document.querySelector(".confirm-warning")
        const btn = document.querySelector(".registerBtn")

        
        if (confirmPassword.value !== passwordField.value) {
            confirmPassword.classList.remove("valid")
            confirmPassword.classList.add("invalid")
            passwordWarningText.classList.remove("hidden")
            btn.classList.add("disabled")
    
        }
        else {
            passwordWarningText.classList.add("hidden")
            btn.classList.remove("disabled")
        }

    }

    function updateHomepageButton() {
        const homepageBtn = document.querySelector(".homepage-button")
        phrases = ["Rocket Jump", "Bunny Hop", "Auto Run", "Fast Travel", "Teleport", "Strafe Jump", "Barrel Roll", "Shootdodge", "Noclip"]
        choice = phrases[Math.floor(Math.random() * phrases.length)]
        const homeIcon = "<i class='fas fa-home'></i>"
        homepageBtn.innerHTML = "<i class='fas fa-home'></i> " + choice + " back to the homepage"
    }

    function deleteTermModal(e) {
        const modal = document.querySelector(".my-modal")
        const closeBtn = document.querySelector(".close-modal")
        const confirmDeleteBtn = document.querySelector(".modal-delete-btn")
        const term = e.target.dataset.id
        modal.classList.remove("hidden")
        confirmDeleteBtn.setAttribute("href", "delete_definition/" + term)
        closeBtn.addEventListener("click", function() {
            modal.classList.add("hidden")
        })
    }

    function deleteGameModal(e) {
        const modal = document.querySelector(".my-modal")
        const closeBtn = document.querySelector(".close-modal")
        const confirmDeleteBtn = document.querySelector(".modal-delete-btn")
        const game = e.target.dataset.id
        modal.classList.remove("hidden")
        confirmDeleteBtn.setAttribute("href", "delete_game/" + game)
        closeBtn.addEventListener("click", function() {
            modal.classList.add("hidden")
        })
    }


    function increaseTermRating(e) {
        e.stopPropagation()
        const clickedArrow = e.target
        const allArrows = Array.from(document.querySelectorAll("[data-value]"))
        // console.log(clickedArrow)
        // console.log(allArrows)
        console.log(clickedArrow.parentElement.classList)
        const parentSpan = clickedArrow.parentElement
        const chosenArrowIndex = allArrows.indexOf(clickedArrow)
        console.log(allArrows[chosenArrowIndex].classList)
        // console.log(chosenArrowIndex)
        const correspondingDownArrow =  allArrows[chosenArrowIndex + 1]
        // console.log(correspondingDownArrow)
        const correspondingArrowParent = correspondingDownArrow.parentElement

        const allRatings = document.querySelectorAll(".term-rating")
        let thisRating = allRatings[chosenArrowIndex / 2]
        let thisRatingNumber = parseInt(thisRating.innerHTML, 10)
        // console.log(thisRatingText)
        // let numberRating = parseInt(thisRatingText, 10)
        // console.log(numberRating)


        const termID = clickedArrow.dataset.value
        const username = clickedArrow.dataset.user

        let request = new XMLHttpRequest();
        request.open('POST', 'upvote/' + termID + "/" + username, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(termID, username);

        // console.log(clickedArrow.classList)
        if (parentSpan.classList.contains("inactive") && correspondingArrowParent.classList.contains("active")) {
            clickedArrow.classList.remove("inactive");
            clickedArrow.classList.add("active");
            correspondingDownArrow.classList.remove("active");
            correspondingDownArrow.classList.add("inactive");
            
            thisRatingNumber += 2;
            thisRating.innerHTML = thisRatingNumber;
        } else if (parentSpan.classList.contains("inactive")) {
            clickedArrow.classList.remove("inactive");
            clickedArrow.classList.add("active");
            thisRatingNumber += 1;
            thisRating.innerHTML = thisRatingNumber;
        } else return
       
    }

        function decreaseTermRating(e) {
        e.stopPropagation()
        const clickedArrow = e.target
        const termID = clickedArrow.dataset.value
        const username = clickedArrow.dataset.user
            console.log("Downvoting " + termID)

        let request = new XMLHttpRequest();
        request.open('POST', 'downvote/' + termID + "/" + username, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(termID, username);
    }

    function loginModalPrompt(e) {
        e.stopPropagation()
        console.log("Opening modal")
        const modal = document.querySelector(".login-modal")
        const closeBtn = document.querySelector(".close-prompt")
        modal.classList.remove("hidden")
        closeBtn.addEventListener("click", function() {
            modal.classList.add("hidden")
        })
    }

  // Event Listeners
  // Test for existence

    document.addEventListener("DOMContentLoaded", function() {
        // Filter definitions displayed on Dictionary page by letter 
        const alphabetFilters = document.querySelectorAll(".alphabet-letter");
        if (alphabetFilters) {
            alphabetFilters.forEach(letter => letter.addEventListener("click", filterByLetter))
        }

        // Filter definitions displayed on Dictionary page by game
        const gameDropdown = document.querySelector(".game-filter");
        if (gameDropdown) {
            gameDropdown.addEventListener("change", filterByGame)
        }

        // Check if password and confirm password fields match on registration page
        const confirmPasswordField = document.querySelector("#confirm-password")
        if (confirmPasswordField) {
            confirmPasswordField.addEventListener("focusout", confirmPasswordMatch)
        }

        // Update text contained within homepage button on 404 page
        const homepageRedirect = document.querySelector(".homepage-button")
        if (homepageRedirect) {
            window.addEventListener("load", updateHomepageButton)
        }

        // Open modal to confirm if user wishes to delete a term
        const termModalBtn = document.querySelectorAll(".term-modal-btn")
        if (termModalBtn) {
            termModalBtn.forEach(button => button.addEventListener("click", deleteTermModal))
        }

        // Open modal to confirm if user wishes to delete a game
        const gameModalBtn = document.querySelectorAll(".game-modal-btn")
        if (gameModalBtn) {
            gameModalBtn.forEach(button => button.addEventListener("click", deleteGameModal))
        }

        // Handle upvotes and downvotes
        const upArrow = document.querySelectorAll(".uparrow")
        if (upArrow) {
            upArrow.forEach(arrow => arrow.addEventListener("click", increaseTermRating))
        }

        const downArrow = document.querySelectorAll(".downarrow")
        if (downArrow) {
            downArrow.forEach(arrow => arrow.addEventListener("click", decreaseTermRating))
        }

        // Prompt logged out users to login if they try to rate a term
        const loginPrompt = document.querySelectorAll(".modal-arrow")
        if (loginPrompt) {
            loginPrompt.forEach(button => button.addEventListener("click", loginModalPrompt))
        }
    });

    
    
    

    


    
    
    
    
    
