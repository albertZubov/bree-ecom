var link=document.querySelector(".user-navigation .search-link-icon");
var search=document.querySelector(".search");
var close=search.querySelector(".btn-close-form");
var main=document.querySelector(".catalog-product");
var header=document.querySelector(".main-header");


link.addEventListener("click", function(evt){
	evt.preventDefault();
	search.classList.add("search-show");
	main.classList.add("catalog-product-show");
	header.classList.add("main-header-show");
});


close.addEventListener("click", function(evt) {
	evt.preventDefault();
	search.classList.remove("search-show");
	main.classList.remove("catalog-product-show");
	header.classList.remove("main-header-show");
});
