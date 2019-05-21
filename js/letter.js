var link = document.querySelector(".footer-social-wrapper .subscription");
var popup = document.querySelector(".modal-contact");
var popupContacts = document.querySelector(".appointment-item-contacts");
var close = popup.querySelector(".btn-close-form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-overlay-show");
	if (storage) {
		login.value=storage;
		email.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popupContacts.classList.remove("modal-error");
	overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function (evt){
	if(!login.value || !email.value) { 
		evt.preventDefault();
		popupContacts.classList.add("modal-error"); } else {
			localStorage.setItem("login", login.value);
		}
	});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if(popup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popupContacts.classList.remove("modal-error");
		}
	}
});