var navLocation = "left";
var navState = "wide";

var nav = document.getElementsByTagName("nav");
var main = document.getElementsByTagName("main")[0];
var bigCalendar = document.getElementById("big-calendar");
var smallCalendar = document.getElementById("small-calendar");

function changeMenu() {
	if (nav[0].offsetWidth == "250")
		narrowMenu();
	else if (nav[0].offsetWidth == "50")
		widenMenu();
}

function narrowMenuByClickOutsideIt() {
	if (window.innerWidth <= "1000")
		narrowMenu();
}

function narrowMenu() {
	navState = "narrow";
	bigCalendar.style.display = "none";
	smallCalendar.style.display = "block";
	nav[0].style.width = "50px";
	nav[1].style.width = "50px";

	if (navLocation == "left")
		main.style.marginLeft = "50px";
	else if (navLocation == "right")
		main.style.marginRight = "50px";
}

function widenMenu() {
	navState = "wide";
	nav[0].style.width = "250px";
	nav[1].style.width = "250px";

	if (window.innerWidth > "1000") {
		if (navLocation == "left")
			main.style.marginLeft = "250px";
		else if (navLocation == "right")
			main.style.marginRight = "250px";
	}

	smallCalendar.style.display = "none";
	bigCalendar.style.display = "block";
}