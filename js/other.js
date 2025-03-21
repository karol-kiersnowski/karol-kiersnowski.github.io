function setMenuWidthByScreenWidth() {
	if (document.body.clientWidth <= "1000")
		menuWidth = "narrow";
	else
		menuWidth = "wide";
}

function updateDocumentTitle() {
	let hash = window.location.hash.substr(1);
	let translatedSection;

	if (hash == "")
		document.title = "Karol Kiersnowski | Portfolio";
	else {
		let hashToUpperCase = hash.charAt(0).toUpperCase() + hash.substr(1);

		if (document.getElementsByClassName("txt" + hashToUpperCase)[0] != undefined)
			translatedSection = document.getElementsByClassName("txt" + hashToUpperCase)[0].innerHTML;
		else
			translatedSection = document.getElementsByClassName("txtProjects")[0].innerHTML;

		document.title = "Karol Kiersnowski | Portfolio - " + translatedSection;
		window.location.hash = "#" + hash;
	}
}

function markCurrentPageLink() {
	let hash = window.location.hash.substr(1);
	let navLinkContainer = document.getElementById("nav-link-container");
	let links = new Array(6);
	let href;

	for (let i=0; i<navLinkContainer.children.length; i++) {
		links[i] = navLinkContainer.children[i];
		links[i].style.backgroundColor = "";
		links[i].style.boxShadow = "";
		href = links[i].href.split(/[# ]+/).pop();
		if (href == hash) {
			links[i].style.backgroundColor = "rgba(128,128,128,0.1)";
			links[i].style.boxShadow = "0px 0px 2px #777";
		}
	}
}

function removeHrefAttributesFromLanguageButtons() {
	document.getElementById("polish").removeAttribute("href");
	document.getElementById("english").removeAttribute("href");
}

function displayElementsForJSPageVersion() {
	//document.getElementsByClassName("email")[0].innerHTML = "<a href='mailto:karol.kiersnowski&#64;outlook.com'>karol.kiersnowski&#64;outlook.com</a>";
	//document.getElementsByClassName("email")[1].innerHTML = "<a href='mailto:karol.kiersnowski&#64;outlook.com'>karol.kiersnowski&#64;outlook.com</a>";
	document.getElementById("calendar-container").style.display = "block";
}

// function playMusic() {
// 	document.getElementsByTagName("audio")[0].play();
// }

function sendEmail() {
	let subject = encodeURI(document.getElementById("messageSubject").value);
	let content = encodeURI(document.getElementById("messageContent").value);
	let email = document.getElementById("yourEmail").value;
	location.href="mailto:karol.kiersnowski@outlook.com?subject=" + subject + "&body=" + content + "%0A%0AFrom: " + email;
}