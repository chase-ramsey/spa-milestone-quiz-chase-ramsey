
var Carlot = (function(aug) {

	var currentEdit;
	var currentList;
	var currentInventory;

	aug.cardFocus = function (editElem) {
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
		inventory = Carlot.getInventory();
		currentInventory = inventory.find(function(car) {
			return car.id === currentEdit.id;
		});
		textInput.value = currentInventory.item.description;
		if (currentInventory.item.purchased === "true") {
			checkPurchased.checked = true;
		} else if (currentInventory.item.purchased === "false") {
			checkPurchased.checked = false;
		}
	}

	aug.cardFocusOff = function() {
		currentInventory.item.description = textInput.value;
		currentInventory.item.purchased = checkPurchased.checked.toString();
		console.log("currentInventory: ", currentInventory);
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
