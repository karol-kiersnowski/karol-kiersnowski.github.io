function changeNavLocation(location) {
	navLocation = location;

	var navWrapper = document.querySelector("nav#wrapper");
	var main = document.getElementsByTagName("main")[0];

	if (window.innerWidth <= "1000")
		main.style.margin = "0";
	else
		main.style.margin = "10px";

	if (navLocation == "left") {
		navWrapper.style.left = "0";
		navWrapper.style.right = "auto";

		if (navState == "wide")
			main.style.marginLeft = "250px";
		else if (navState == "narrow")
			main.style.marginLeft = "50px";
	} else if (navLocation == "right") {
		navWrapper.style.left = "auto";
		navWrapper.style.right = "0";

		if (navState == "wide")
			main.style.marginRight = "250px";
		else if (navState == "narrow")
			main.style.marginRight = "50px";
	}
}

function changeForegroundTheme(background) {
	var bigCalendar = document.getElementById("big-calendar");
	var smallCalendar = document.getElementById("small-calendar");
	var paperPage = document.getElementById("paper-page");
	var paperPageElements = document.querySelectorAll("#paper-page *");
	var boxOffer = document.getElementsByClassName("link");
	var buttons = document.getElementsByTagName("button");
	var aButtons = document.getElementsByClassName("button");

	if (background != "black-paper") {

		if (background == "white") {
			paperPage.style.background = "#fff";
		} else if (background == "paper-fibers") {
			paperPage.style.backgroundImage = "url('img/backgrounds/paper-fibers.png')";
		} else if (background == "ricepaper") {
			paperPage.style.backgroundImage = "url('img/backgrounds/ricepaper.png')";
		} else if (background == "hip-square") {
			paperPage.style.backgroundImage = "url('img/backgrounds/hip-square.png')";
		} else if (background == "repeated-square") {
			paperPage.style.backgroundImage = "url('img/backgrounds/repeated-square.png')";
		}

		bigCalendar.style.background = "";
		bigCalendar.style.color = "";
		smallCalendar.style.background = "";
		smallCalendar.style.color = "";

		for (var i=0; i<paperPageElements.length; i++) {
			paperPageElements[i].style.backgroundColor = "";
			paperPageElements[i].style.color = "";
			paperPageElements[i].style.borderColor = "";
		}

	} else if (background == "black-paper") {
		paperPage.style.backgroundImage = "url('img/backgrounds/black-paper.png')";
		bigCalendar.style.backgroundImage = "url('img/backgrounds/black-paper.png')";
		bigCalendar.style.color = "#fff";
		smallCalendar.style.backgroundImage = "url('img/backgrounds/black-paper.png')";
		smallCalendar.style.color = "#fff";

		for (var i=0; i<paperPageElements.length; i++) {
			paperPageElements[i].style.backgroundColor = "rgba(255,255,255,0)";
			paperPageElements[i].style.color = "#fff";
			paperPageElements[i].style.borderColor = "#fff";
		}

		for (var i=0; i<buttons.length; i++) 
			buttons[i].style.backgroundColor = "rgba(238, 238, 238, 0.1)";

		for (var i=0; i<aButtons.length; i++) 
			aButtons[i].style.backgroundColor = "rgba(238, 238, 238, 0.1)";
	}

	for (var i=0; i<boxOffer.length; i++)
		boxOffer[i].style.backgroundColor = "";
}

function changeBackgroundTheme(background) {
	var body = document.body;
	var nav = document.getElementsByTagName("nav")[1];
	var footer = document.querySelectorAll("footer *");
	var navA = document.querySelectorAll("nav a");
	var navIcons = document.querySelectorAll("nav i");
	var navHr = document.querySelectorAll("nav hr");

	if (background == "default") {
		body.style.background = "#eee"; 
		nav.style.background = "#eee";

		for (var i=0; i<footer.length; i++)
			footer[i].style.color = "";
		for (var i=0; i<navA.length; i++)
			navA[i].style.color = "";
		for (var i=0; i<navIcons.length; i++)
			navIcons[i].style.color = "";
		for (var i=0; i<navHr.length; i++)
			navHr[i].style.color = "";
	}

	else if (background == "dark-wood") {
		body.style.backgroundImage = "url('img/backgrounds/dark-wood.png')"; 
		nav.style.backgroundImage = "url('img/backgrounds/dark-wood.png')";

		for (var i=0; i<footer.length; i++)
			footer[i].style.color = "#d9d9d9";
		for (var i=0; i<navA.length; i++)
			navA[i].style.color = "#d9d9d9";
		for (var i=0; i<navIcons.length; i++)
			navIcons[i].style.color = "#d9d9d9";
		for (var i=0; i<navHr.length; i++)
			navHr[i].style.color = "#d9d9d9";
	}

	else {
		if (background == "light-veneer") {
			body.style.backgroundImage = "url('img/backgrounds/light-veneer.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/light-veneer.png')";
		} else if (background == "purty-wood") {
			body.style.backgroundImage = "url('img/backgrounds/purty-wood.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/purty-wood.png')";
		} else if (background == "retina-wood") {
			body.style.backgroundImage = "url('img/backgrounds/retina-wood.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/retina-wood.png')";
			//color: #151310;
		} else if (background == "wood-pattern") {
			body.style.backgroundImage = "url('img/backgrounds/wood-pattern.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/wood-pattern.png')";
		}

		for (var i=0; i<footer.length; i++)
			footer[i].style.color = "#000";
		for (var i=0; i<navA.length; i++)
			navA[i].style.color = "#000";
		for (var i=0; i<navIcons.length; i++)
			navIcons[i].style.color = "#000";
		for (var i=0; i<navHr.length; i++)
			navHr[i].style.color = "#000";
	}
}

function changeTextColor(color) {
	var elements = document.querySelectorAll("*");
	for (var i=0; i<elements.length; i++)
		elements[i].style.color = color;
}

function changeIconColor(color) {
	var elements = document.querySelectorAll("i");
	for (var i=0; i<elements.length; i++)
		elements[i].style.color = color;
}

function changeHyperlinkColor(color) {
	var elements = document.querySelectorAll("a");
	for (var i=0; i<elements.length; i++)
		elements[i].style.color = color;
}

function changeFontFamily(fontFamily) {
	document.body.style.fontFamily = fontFamily;
}

function changeFontSize(rangeFontSize) {
	document.body.style.fontSize = rangeFontSize + "px";
	document.getElementById("outputFontSize").innerHTML = "1em = " + rangeFontSize + "px";
}

function changeFontWeight(rangeFontWeight) {
	//var all = document.querySelectorAll("*");
	//var icons = document.getElementsByTagName("i");
	//var all = document.getElementsByTagName("a");
	var h1 = document.getElementsByTagName("h1");
	var h2 = document.getElementsByTagName("h2");
	var h3 = document.getElementsByTagName("h3");
	var h4 = document.getElementsByTagName("h4");
	var h5 = document.getElementsByTagName("h5");
	for (var i=0; i<h1.length; i++)
	 	h1[i].style.fontWeight = rangeFontWeight;
	for (var i=0; i<h2.length; i++)
	 	h2[i].style.fontWeight = rangeFontWeight;
	for (var i=0; i<h3.length; i++)
	 	h3[i].style.fontWeight = rangeFontWeight;
	for (var i=0; i<h4.length; i++)
	 	h4[i].style.fontWeight = rangeFontWeight;
	for (var i=0; i<h5.length; i++)
	 	h5[i].style.fontWeight = rangeFontWeight;
	// for (var i=0; i<all.length; i++)
	// 	all[i].style.fontWeight = rangeFontWeight;
	// for (var i=0; i<icons.length; i++)
	// 	icons[i].style.fontWeight = "bold";
	document.body.style.fontWeight = rangeFontWeight;
	document.getElementById("outputFontWeight").innerHTML = rangeFontWeight;
}

function changeFontStyle(fontStyle) {
	if (fontStyle.checked)
		document.body.style.fontStyle = "italic";
	else
		document.body.style.fontStyle = "normal";
}

function changeFontVariant(fontVariant) {
	if (fontVariant.checked)
		document.body.style.fontVariant = "small-caps";
	else
		document.body.style.fontVariant = "normal";
}

function changeFooterPosition(position) {
	document.getElementsByTagName("footer")[0].style.position = position;
}

function transform() {
	var rotate = document.getElementById("inputRotate").value;
	var skewX = document.getElementById("inputSkewX").value;
	var skewY = document.getElementById("inputSkewY").value;
	document.getElementById("paper-page").style.transform = "rotate(" + rotate + "deg) skewX(" + skewX + "deg) skewY(" + skewY + "deg)";
}