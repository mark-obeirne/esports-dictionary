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



  // Selectors
    const alphabetFilters = document.querySelectorAll(".alphabet-letter")
    const gameDropdown = document.querySelector(".game-filter")

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

  // Event Listeners
    alphabetFilters.forEach(letter => letter.addEventListener("click", filterByLetter))
    
    gameDropdown.addEventListener("change", filterByGame)