document.querySelector(".burger").addEventListener("click", function (e) {
	this.classList.toggle("burger--active");
	document.querySelector(".nav").classList.toggle("nav--active");

	if (this.classList.contains("burger--active") && document.querySelector(".nav__items").classList.contains("nav__items--active")) {
		document.body.style.overflow = "hidden"
	} else {
		document.body.style.overflowY = "auto"
	}
})

document.querySelector("ul.nav__items").addEventListener("click", function (e) {
	document.querySelector(".burger").classList.toggle("burger--active");
	this.classList.toggle("nav__items--active");

	if (!this.classList.contains("burger--active") && !document.querySelector(".nav__items").classList.contains("nav__items--active")) {
		document.body.style.overflowY = "auto"
	} else {
		null
	}
})

// document.querySelector(".burger").addEventListener("click", function (e) {
// 	this.classList.toggle("burger--active");
// 	document.querySelector(".nav__items").classList.toggle("nav__items--active");

// 	if (this.classList.contains("burger--active") && document.querySelector(".nav__items").classList.contains("nav__items--active")) {
// 		document.body.style.overflow = "hidden"
// 	} else {
// 		document.body.style.overflowY = "auto"
// 	}
// })

// document.querySelector("ul.nav__items").addEventListener("click", function (e) {
// 	document.querySelector(".burger").classList.toggle("burger--active");
// 	this.classList.toggle("nav__items--active");

// 	if (!this.classList.contains("burger--active") && !document.querySelector(".nav__items").classList.contains("nav__items--active")) {
// 		document.body.style.overflowY = "auto"
// 	} else {
// 		null
// 	}
// })