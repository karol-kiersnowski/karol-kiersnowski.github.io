function removeHrefAttributes() {
	document.getElementById("polish").removeAttribute("href");
	document.getElementById("english").removeAttribute("href");
}

function displayElementsForJSPageVersion() {
	var section = document.getElementsByTagName("section");
	for (var i=0; i<section.length; i++) {
		section[i].style.marginTop = "-100px";
		section[i].style.paddingTop = "120px";
	}
	document.getElementsByClassName("email")[0].innerHTML = "<a href='mailto:karol.kiersnowski&#64;outlook.com'>karol.kiersnowski&#64;outlook.com</a>";
	document.getElementsByClassName("email")[1].innerHTML = "<a href='mailto:karol.kiersnowski&#64;outlook.com'>karol.kiersnowski&#64;outlook.com</a>";
	document.getElementById("calendar-container").style.display = "block";
}

function playMusic() {
	document.getElementsByTagName("audio")[0].play();
}

function switchOfferSubpages(subpage) {
	var webAppsLink = document.getElementById("web-apps-link");
	var desktopAppsLink = document.getElementById("desktop-apps-link");
	var webAppsContent = document.getElementById("web-apps-content");
	var desktopAppsContent = document.getElementById("desktop-apps-content");
	var webAppsArrow = document.getElementById("web-apps-arrow");
	var desktopAppsArrow = document.getElementById("desktop-apps-arrow");

	webAppsArrow.style.transform = "rotate(180deg)";

	if (subpage == "web-apps") {
		desktopAppsContent.style.height = "0";
		webAppsContent.style.height = webAppsContent.scrollHeight + "px";
		webAppsArrow.style.transform = "rotate(180deg)";
		desktopAppsArrow.style.transform = "";
	}
	else if (subpage == "desktop-apps") {
		webAppsContent.style.height = "0";
		desktopAppsContent.style.height = desktopAppsContent.scrollHeight + "px";
		webAppsArrow.style.transform = "";
		desktopAppsArrow.style.transform = "rotate(180deg)";
	}
}

function selectOffer() {
	var webAppsContent = document.getElementById("web-apps-content");
	var desktopAppsContent = document.getElementById("desktop-apps-content");
	var webAppsArrow = document.getElementById("web-apps-arrow");
	//webAppsContent.style.height = "0";
	desktopAppsContent.style.height = "0";
	webAppsArrow.style.transform = "rotate(180deg)";
}

function sendEmail() {
	var subject = encodeURI(document.getElementById("messageSubject").value);
	var content = encodeURI(document.getElementById("messageContent").value);
	var email = document.getElementById("yourEmail").value;
	location.href="mailto:karol.kiersnowski@outlook.com?subject=" + subject + "&body=" + content + "%0A%0AFrom: " + email;
}



getUserLanguage();
removeHrefAttributes();
displayElementsForJSPageVersion();
displayCalendar();
fillInSmallCalendar();
showSection();
selectOffer();
sortTableByUpdate();