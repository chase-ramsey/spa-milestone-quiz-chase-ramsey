
// Output div - where the cards will populate in the DOM
	var outputDiv = document.getElementById("output");

// Text input - disabled initially; listens for keyup and runs validateKeyup
	var textInput = document.getElementById("input");
	textInput.setAttribute("disabled", "true");
	textInput.addEventListener("keyup", validateKeyup);

// Checkbox for purchased - disabled initially
	var checkPurchased = document.getElementById("purchased");
	checkPurchased.setAttribute("disabled", "true");

// Label for checkbox - stored here for toggling the .disabled class
	var labelPurchased = document.getElementById("labelPurchased");

// Navbar submit button - listens for click and calls Carlot.cardFocusOff
	var buttonSubmit = document.getElementById("submit");
	buttonSubmit.addEventListener("click", Carlot.cardFocusOff);

// Edit mode variable - holds a boolean that will not allow card focus to
// change until edits are submitted on the current card
	var editMode = false;

// Callback for textInput event listener - checks for return key
	function validateKeyup(key) {
			if (key.which === 13) {
				Carlot.cardFocusOff();
			}
		}

// Call the method to load inventory from JSON and begin populating the page
	Carlot.loadInventory();
