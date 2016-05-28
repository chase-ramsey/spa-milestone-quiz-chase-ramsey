
var Carlot = (function(aug) {

	var currentEdit;
	var currentList;
	var currentInventory;

	aug.cardFocus = function (editElem) {
		textInput.removeAttribute("disabled", "true");
		textInput.focus("true");
		checkPurchased.removeAttribute("disabled", "true");
		editElem.classList.add("card-focus");
		var descList = editElem.querySelector("dl");
		descList.removeAttribute("style");
		descList.classList.add("card-focus-border");
		labelPurchased.classList.remove("disabled");
		currentEdit = editElem;
		currentList = descList;
		Carlot.cardEdit();
	};

	aug.cardEdit = function () {
		var inventory = Carlot.getInventory();
		currentInventory = inventory.find(function(car) {
			return car.id === currentEdit.id;
		});
		var currentDesc = currentList.querySelector(".description");
		textInput.addEventListener("keyup", function() {currentDesc.innerText = textInput.value;});
		if (currentInventory.item.purchased === "true") {
			checkPurchased.checked = true;
		} else if (currentInventory.item.purchased === "false") {
			checkPurchased.checked = false;
		}
	}

	aug.cardFocusOff = function(event) {
		event.preventDefault();
		Carlot.editInventory(currentInventory);
		currentEdit.classList.remove("card-focus");
		currentList.classList.remove("card-focus-border");
		textInput.removeAttribute("disabled", "false");
		textInput.setAttribute("disabled", "true");
		textInput.value = "";
		checkPurchased.setAttribute("disabled", "true")
		checkPurchased.checked = false;
		labelPurchased.classList.add("disabled");
		editMode = false;
	}

	return aug;

}(Carlot || {}));
