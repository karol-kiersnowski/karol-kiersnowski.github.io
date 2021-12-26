function changeMenuWidth() {
	if (menuWidth == "narrow")
		widenMenu();
	else
		narrowMenu();
}

function setMenuWidth(menuWidth) {
	if (menuWidth == "narrow")
		narrowMenu();
	else
		widenMenu();
}

function narrowMenuByClickOutsideIt() {
	if (window.innerWidth <= "1000")
		narrowMenu();
}

function narrowMenu() {
	menuWidth = "narrow";
	bigCalendar.style.display = "none";
	smallCalendar.style.display = "block";
	nav[0].style.width = "50px";
	nav[1].style.width = "50px";

	if (menuLocation == "right")
		main.style.marginRight = "50px";
	else
		main.style.marginLeft = "50px";
	
}

function widenMenu() {
	menuWidth = "wide";
	nav[0].style.width = "250px";
	nav[1].style.width = "250px";

	if (window.innerWidth > "1000") {
		if (menuLocation == "right")
			main.style.marginRight = "250px";
		else
			main.style.marginLeft = "250px";
	}

	smallCalendar.style.display = "none";
	bigCalendar.style.display = "block";
}