function saveSettings() {
	if (language != undefined)
		setCookie("language", language);
	if (menuWidth != undefined)
		setCookie("menuWidth", menuWidth);
	if (menuLocation != undefined)
		setCookie("menuLocation", menuLocation);
	if (foregroundTheme != undefined)
		setCookie("foregroundTheme", foregroundTheme);
	if (backgroundTheme != undefined)
		setCookie("backgroundTheme", backgroundTheme);
	if (boxShadow != undefined)
		setCookie("boxShadow", boxShadow);
	if (textColor != undefined)
		setCookie("textColor", textColor);
	if (iconColor != undefined)
		setCookie("iconColor", iconColor);
	if (hyperlinkColor != undefined)
		setCookie("hyperlinkColor", hyperlinkColor);
	if (fontFamily != undefined)
		setCookie("fontFamily", fontFamily);
	if (fontSize != undefined)
		setCookie("fontSize", fontSize);
	if (fontWeight != undefined)
		setCookie("fontWeight", fontWeight);
	if (fontStyle != undefined)
		setCookie("fontStyle", fontStyle);
	if (fontVariant != undefined)
		setCookie("fontVariant", fontVariant);
	if (footerPosition != undefined)
		setCookie("footerPosition", footerPosition);
	if (rotate != undefined)
		setCookie("rotate", rotate);
	if (skewX != undefined)
		setCookie("skewX", skewX);
	if (skewY != undefined)
		setCookie("skewY", skewY);
}

function loadSettings() {
	if (isSetCookie("language"))
		setLanguage(getCookie("language"));
	if (isSetCookie("menuWidth"))
		setMenuWidth(getCookie("menuWidth"));
	if (isSetCookie("menuLocation"))
		setMenuLocation(getCookie("menuLocation"));
	if (isSetCookie("foregroundTheme"))
		setForegroundTheme(getCookie("foregroundTheme"));
	if (isSetCookie("backgroundTheme"))
		setBackgroundTheme(getCookie("backgroundTheme"));
	if (isSetCookie("boxShadow"))
		setBoxShadow(getCookie("boxShadow"));
	if (isSetCookie("textColor"))
		setTextColor(getCookie("textColor"));
	if (isSetCookie("iconColor"))
		setIconColor(getCookie("iconColor"));
	if (isSetCookie("hyperlinkColor"))
		setHyperlinkColor(getCookie("hyperlinkColor"));
	if (isSetCookie("fontFamily"))
		setFontFamily(getCookie("fontFamily"));
	if (isSetCookie("fontSize"))
		setFontSize(getCookie("fontSize"));
	if (isSetCookie("fontWeight"))
		setFontWeight(getCookie("fontWeight"));
	if (isSetCookie("fontStyle"))
		setFontStyle(getCookie("fontStyle"));
	if (isSetCookie("fontVariant"))
		setFontVariant(getCookie("fontVariant"));
	if (isSetCookie("footerPosition"))
		setFooterPosition(getCookie("footerPosition"));
	if (isSetCookie("rotate"))
		transform(getCookie("rotate"));
	if (isSetCookie("skewX"))
		transform(getCookie("skewX"));
	if (isSetCookie("skewY"))
		transform(getCookie("skewY"));
}

function displayCookies() {
	let cookies = document.cookie.split(';');
	let result = '';
	for(let i = 0; i < cookies.length; i++) {
		let nameValue = cookies[i].split("=");
		result += "<li>" + nameValue[0] + " = " + nameValue[1] + "</li>";
	}
	document.getElementById("saved-cookies").innerHTML = result;

	for (let i=0; i<tdLanguage.length; i++)
		tdLanguage[i].innerHTML = getCookie("language");
	for (let i=0; i<tdMenuWidth.length; i++)
		tdMenuWidth[i].innerHTML = getCookie("menuWidth");
	for (let i=0; i<tdMenuWidth.length; i++)
		tdMenuWidth[i].innerHTML = getCookie("menuWidth");
	for (let i=0; i<tdMenuLocation.length; i++)
		tdMenuLocation[i].innerHTML = getCookie("menuLocation");
	for (let i=0; i<tdForegroundTheme.length; i++)
		tdForegroundTheme[i].innerHTML = getCookie("foregroundTheme");
	for (let i=0; i<tdBackgroundTheme.length; i++)
		tdBackgroundTheme[i].innerHTML = getCookie("backgroundTheme");
	for (let i=0; i<tdBoxShadow.length; i++)
		tdBoxShadow[i].innerHTML = getCookie("boxShadow");
	for (let i=0; i<tdTextColor.length; i++)
		tdTextColor[i].innerHTML = getCookie("textColor");
	for (let i=0; i<tdTextColor.length; i++)
		tdIconColor[i].innerHTML = getCookie("iconColor");
	for (let i=0; i<tdHyperlinkColor.length; i++)
		tdHyperlinkColor[i].innerHTML = getCookie("hyperlinkColor");
	for (let i=0; i<tdFontFamily.length; i++)
		tdFontFamily[i].innerHTML = getCookie("fontFamily");
	for (let i=0; i<tdFontFamily.length; i++)
		tdFontSize[i].innerHTML = getCookie("fontSize");
	for (let i=0; i<tdFontSize.length; i++)
		tdFontWeight[i].innerHTML = getCookie("fontWeight");
	for (let i=0; i<tdFontWeight.length; i++)
		tdFontStyle[i].innerHTML = getCookie("fontStyle");
	for (let i=0; i<tdFontStyle.length; i++)
		tdFontVariant[i].innerHTML = getCookie("fontVariant");
}

function restoreDefaultSettings() {
	setLanguageFromWebBrowser();
	setMenuWidth("");
	setMenuLocation("");
	setForegroundTheme("");
	setBackgroundTheme("");
	setBoxShadow("");
	setTextColor("");
	setIconColor("");
	setHyperlinkColor("");
	setFontFamily("");
	setFontSize("16");
	setFontWeight("");
	setFontStyle("");
	setFontVariant("");
	setFooterPosition("");
	resetTransformations();
	//refreshCalendar();
	deleteCookies();

	language = undefined;
	menuWidth = undefined;
	menuLocation = undefined;
	foregroundTheme = undefined;
	backgroundTheme = undefined;
	boxShadow = undefined;
	textColor = undefined;
	iconColor = undefined;
	hyperlinkColor = undefined;
	fontFamily = undefined;
	fontSize = undefined;
	fontWeight = undefined;
	fontStyle = undefined;
	fontVariant = undefined;
	footerPosition = undefined;
	rotate = undefined;
	skewX = undefined;
	skewY = undefined;
}

function setMenuLocation(MenuLocation) {
	menuLocation = MenuLocation;

	let navWrapper = document.querySelector("nav#wrapper");
	let main = document.getElementsByTagName("main")[0];

	if (window.innerWidth <= "1000")
		main.style.margin = "0";
	else
		main.style.margin = "10px";

	if (menuLocation == "right") {
		navWrapper.style.left = "auto";
		navWrapper.style.right = "0";

		if (menuWidth == "narrow")
			main.style.marginRight = "50px";
		else
			main.style.marginRight = "250px";
	}
	else {
		navWrapper.style.left = "0";
		navWrapper.style.right = "auto";

		if (menuWidth == "narrow")
			main.style.marginLeft = "50px";
		else
			main.style.marginLeft = "250px";
	}
}

function setForegroundTheme(ForegroundTheme) {
	foregroundTheme = ForegroundTheme;

	let bigCalendar = document.getElementById("big-calendar");
	let smallCalendar = document.getElementById("small-calendar");
	let paperPage = document.getElementById("paper-page");
	let paperPageElements = document.querySelectorAll("#paper-page *");
	let boxOffer = document.getElementsByClassName("link");
	let buttons = document.getElementsByTagName("button");
	let aButtons = document.getElementsByClassName("button");

	if (foregroundTheme != "black-paper") {

		if (foregroundTheme == "paper-fibers")
			paperPage.style.backgroundImage = "url('img/backgrounds/paper-fibers.png')";
		else if (foregroundTheme == "ricepaper")
			paperPage.style.backgroundImage = "url('img/backgrounds/ricepaper.png')";
		else if (foregroundTheme == "hip-square")
			paperPage.style.backgroundImage = "url('img/backgrounds/hip-square.png')";
		else if (foregroundTheme == "repeated-square")
			paperPage.style.backgroundImage = "url('img/backgrounds/repeated-square.png')";
		else
			paperPage.style.background = "";
		
		bigCalendar.style.background = "";
		bigCalendar.style.color = "";
		smallCalendar.style.background = "";
		smallCalendar.style.color = "";

		for (let i=0; i<paperPageElements.length; i++) {
			paperPageElements[i].style.backgroundColor = "";
			paperPageElements[i].style.color = "";
			paperPageElements[i].style.borderColor = "";
		}

	} else if (foregroundTheme == "black-paper") {
		paperPage.style.backgroundImage = "url('img/backgrounds/black-paper.png')";
		bigCalendar.style.backgroundImage = "url('img/backgrounds/black-paper.png')";
		bigCalendar.style.color = "#fff";
		smallCalendar.style.backgroundImage = "url('img/backgrounds/black-paper.png')";
		smallCalendar.style.color = "#fff";

		for (let i=0; i<paperPageElements.length; i++) {
			paperPageElements[i].style.backgroundColor = "rgba(255,255,255,0)";
			paperPageElements[i].style.color = "#fff";
			paperPageElements[i].style.borderColor = "#fff";
		}

		for (let i=0; i<buttons.length; i++) 
			buttons[i].style.backgroundColor = "rgba(238, 238, 238, 0.1)";

		for (let i=0; i<aButtons.length; i++) 
			aButtons[i].style.backgroundColor = "rgba(238, 238, 238, 0.1)";
	}

	for (let i=0; i<boxOffer.length; i++)
		boxOffer[i].style.backgroundColor = "";
}

function setBackgroundTheme(BackgroundTheme) {
	backgroundTheme = BackgroundTheme;

	let body = document.body;
	let nav = document.getElementsByTagName("nav")[1];
	let footer = document.querySelectorAll("footer *");
	let navA = document.querySelectorAll("nav a");
	let navIcons = document.querySelectorAll("nav i");
	let navHr = document.querySelectorAll("nav hr");

	if (backgroundTheme == ("default" && "")) {
		body.style.background = "#eee"; 
		nav.style.background = "#eee";

		for (let i=0; i<footer.length; i++)
			footer[i].style.color = "";
		for (let i=0; i<navA.length; i++)
			navA[i].style.color = "";
		for (let i=0; i<navIcons.length; i++)
			navIcons[i].style.color = "";
		for (let i=0; i<navHr.length; i++)
			navHr[i].style.color = "";
	}

	else if (backgroundTheme == "dark-wood") {
		body.style.backgroundImage = "url('img/backgrounds/dark-wood.png')"; 
		nav.style.backgroundImage = "url('img/backgrounds/dark-wood.png')";

		for (let i=0; i<footer.length; i++)
			footer[i].style.color = "#d9d9d9";
		for (let i=0; i<navA.length; i++)
			navA[i].style.color = "#d9d9d9";
		for (let i=0; i<navIcons.length; i++)
			navIcons[i].style.color = "#d9d9d9";
		for (let i=0; i<navHr.length; i++)
			navHr[i].style.color = "#d9d9d9";
	}

	else {
		if (backgroundTheme == "light-veneer") {
			body.style.backgroundImage = "url('img/backgrounds/light-veneer.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/light-veneer.png')";
		} else if (backgroundTheme == "purty-wood") {
			body.style.backgroundImage = "url('img/backgrounds/purty-wood.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/purty-wood.png')";
		} else if (backgroundTheme == "retina-wood") {
			body.style.backgroundImage = "url('img/backgrounds/retina-wood.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/retina-wood.png')";
		} else if (backgroundTheme == "wood-pattern") {
			body.style.backgroundImage = "url('img/backgrounds/wood-pattern.png')"; 
			nav.style.backgroundImage = "url('img/backgrounds/wood-pattern.png')";
		}

		for (let i=0; i<footer.length; i++)
			footer[i].style.color = "#000";
		for (let i=0; i<navA.length; i++)
			navA[i].style.color = "#000";
		for (let i=0; i<navIcons.length; i++)
			navIcons[i].style.color = "#000";
		for (let i=0; i<navHr.length; i++)
			navHr[i].style.color = "#000";
	}
}

function setBoxShadow(BoxShadow) {
	boxShadow = BoxShadow;

	let boxLink = document.getElementsByClassName("box-link");

	//document.getElementsByTagName("nav")[0].style.boxShadow = "0 0 " + boxShadow + "px #888";
	document.getElementById("paper-page").style.boxShadow = "0 0 " + boxShadow + "px #888";
	document.getElementById("big-calendar").style.boxShadow = "0 0 " + boxShadow + "px #888";
	document.getElementById("small-calendar").style.boxShadow = "0 0 " + boxShadow + "px #888";
	for (let i=0; i<boxLink.length; i++)
		boxLink[i].style.boxShadow = "0 0 " + boxShadow + "px #888";

	document.getElementById("outputBoxShadow").innerHTML = boxShadow + "px";
}

function setTextColor(TextColor) {
	textColor = TextColor;
	let elements = document.querySelectorAll("*");
	for (let i=0; i<elements.length; i++)
		elements[i].style.color = textColor;
}

function setIconColor(IconColor) {
	iconColor = IconColor;
	let elements = document.querySelectorAll("i");
	for (let i=0; i<elements.length; i++)
		elements[i].style.color = iconColor;
}

function setHyperlinkColor(HyperlinkColor) {
	hyperlinkColor = HyperlinkColor;
	let elements = document.querySelectorAll("a");
	for (let i=0; i<elements.length; i++)
		elements[i].style.color = hyperlinkColor;
}

function setFontFamily(FontFamily) {
	fontFamily = FontFamily;

	document.body.style.fontFamily = fontFamily;

	let buttons = document.getElementsByTagName("button");
	let inputs = document.getElementsByTagName("input");
	document.getElementsByTagName("textarea")[0].style.fontFamily = fontFamily;

	for (let i=0; i<buttons.length; i++)
		buttons[i].style.fontFamily = fontFamily;

	for (let i=0; i<inputs.length; i++)
		inputs[i].style.fontFamily = fontFamily;
}

function setFontSize(FontSize) {
	fontSize = FontSize;
	document.body.style.fontSize = fontSize + "px";
	document.getElementById("outputFontSize").innerHTML = "1em = " + fontSize + "px";
}

function setFontWeight(FontWeight) {
	fontWeight = FontWeight;

	let h1 = document.getElementsByTagName("h1");
	let h2 = document.getElementsByTagName("h2");
	let h3 = document.getElementsByTagName("h3");
	let h4 = document.getElementsByTagName("h4");
	let h5 = document.getElementsByTagName("h5");
	for (let i=0; i<h1.length; i++)
	 	h1[i].style.fontWeight = fontWeight;
	for (let i=0; i<h2.length; i++)
	 	h2[i].style.fontWeight = fontWeight;
	for (let i=0; i<h3.length; i++)
	 	h3[i].style.fontWeight = fontWeight;
	for (let i=0; i<h4.length; i++)
	 	h4[i].style.fontWeight = fontWeight;
	for (let i=0; i<h5.length; i++)
	 	h5[i].style.fontWeight = fontWeight;
	document.body.style.fontWeight = fontWeight;

	document.getElementById("rangeFontWeight").value = fontWeight;
	document.getElementById("outputFontWeight").innerHTML = fontWeight;

	if (fontWeight <= 400)
		document.getElementById("checkboxFontBold").checked = null;
	if (fontWeight >= 700)
		document.getElementById("checkboxFontBold").checked = "true";
}

function setFontWeightByCheckbox(bold) {
	if (bold.checked)
		setFontWeight(700);
	else
		setFontWeight(400);
}

function setFontStyle(italic) {
	if (italic.checked)
		fontStyle = "italic";
	else
		fontStyle = "normal";
	document.body.style.fontStyle = fontStyle;
}

function setFontVariant(smallCaps) {
	if (smallCaps.checked)
		fontVariant = "small-caps";
	else
		fontVariant = "normal";
	document.body.style.fontVariant = fontVariant;
}

function setFooterPosition(FooterPosition) {
	footerPosition = FooterPosition;
	document.getElementsByTagName("footer")[0].style.position = footerPosition;
}

function transform() {
	rotate = document.getElementById("inputRotate").value;
	skewX = document.getElementById("inputSkewX").value;
	skewY = document.getElementById("inputSkewY").value;
	document.getElementById("paper-page").style.transform = "rotate(" + rotate + "deg) skewX(" + skewX + "deg) skewY(" + skewY + "deg)";
}

function resetTransformations() {
	rotate = 0;
	skewX = 0;
	skewY = 0;
	document.getElementById("paper-page").style.transform = "";
}