
var Carlot = (function(aug) {

	aug.populatePage = function (inventory) {
		var buildHTML = "";
		inventory.forEach(function(car) {
			buildHTML += `<div id="${car.id}" class="card column col-lg-3 col-md-5 col-sm-5 col-xs-12">` +
											`<h2>${car.item.make} ${car.item.model}</h2>` +
									 		`<dl style="border-color:${car.item.color}">` +
									 			`<dt>Year</dt><dd>${car.item.year}</dd>` +
									 			`<dt>Price</dt><dd>$${car.item.price}</dd>` +
									 			`<dt>Color</dt><dd class="text-capitalize">${car.item.color}</dd>` +
									 			`<dt>Description</dt><dd class="text-justify description">${car.item.description}</dd>` +
									 			`<dt>Availability</dt>`;
									 			if (car.item.purchased === "false") {
									 			buildHTML += `<dd class="available">Available</dd>`;
									 			} else {
									 				buildHTML += `<dd class="backorder">Out of stock</dd>`;
									 			}
			buildHTML +=		`</dl>` +
								 		`</div>` +
								 		`<div class="column col-lg-1 col-md-1 col-sm-1"></div>`;
		});
		outputDiv.innerHTML = buildHTML;
		Carlot.activateEvents();
	};

	aug.activateEvents = function () {
		var cards = Array.from(document.getElementsByClassName("card"));
		cards.forEach(function(card) {
			card.addEventListener("click", function(click) {
				if (editMode === false) {
					editMode = true;
					var editElem = document.getElementById(this.id);
					Carlot.cardFocus(editElem);
				} else {
					return;
				}
			});
		});
	};

	return aug;

}(Carlot || {}));
