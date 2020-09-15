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
        for (let i = 0; i < allTerms.length; i++) {
            for (let j = 0; j < allTermContainers.length; j++) {
                if (allTerms[i].textContent[0] !== letter) {
                    allTermContainers[j].classList.add("hidden")
                }
            }
        }
    }

    function filterByGame() {
        showAllDefinitions()
        const chosenGame = this.value
        const allGameCategories = Array.from(document.querySelectorAll(".game-name"))
        console.log(allGameCategories)
        const allTermContainers = Array.from(document.querySelectorAll(".term-container"))
        // Hide a definition's container if the term's associated game doesn't match the selected game
        for (let i = 0; i < allGameCategories.length; i++) {
            for (let j = 0; j < allTermContainers.length; j++) {
                if (allGameCategories[i].textContent !== chosenGame) {
                    allTermContainers[j].classList.add("hidden")
                }
            }
        }
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
    });

    
    
    

    


    
    
    
    
    
