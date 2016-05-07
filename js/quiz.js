
var outputDiv = document.getElementById("output");

var textInput = document.getElementById("input");
textInput.setAttribute("disabled", "true");
textInput.addEventListener("keyup", validateKeyup);

var buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", Carlot.cardFocusOff);

var editMode = false;

function validateKeyup(key) {
		if (key.which === 13) {
			Carlot.cardFocusOff();
		}
	}

Carlot.loadInventory();
