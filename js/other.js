function updateDocumentTitle() {
	var hash = window.location.hash.substr(1);
	var translatedSection;

	if (hash == "")
		document.title = "Karol Kiersnowski | Portfolio";
	else {
		var hashToUpperCase = hash.charAt(0).toUpperCase() + hash.substr(1);

		if (document.getElementsByClassName("txt" + hashToUpperCase)[0] != undefined)
			translatedSection = document.getElementsByClassName("txt" + hashToUpperCase)[0].innerHTML;
		else
			translatedSection = document.getElementsByClassName("txtProjects")[0].innerHTML;

		document.title = "Karol Kiersnowski | Portfolio - " + translatedSection;
		window.location.hash = "#" + hash;
	}
}

function removeHrefAttributesFromLanguageButtons() {
	document.getElementById("polish").removeAttribute("href");
	document.getElementById("english").removeAttribute("href");
}

function displayElementsForJSPageVersion() {
	document.getElementsByClassName("email")[0].innerHTML = "<a href='mailto:karol.kiersnowski&#64;outlook.com'>karol.kiersnowski&#64;outlook.com</a>";
	document.getElementsByClassName("email")[1].innerHTML = "<a href='mailto:karol.kiersnowski&#64;outlook.com'>karol.kiersnowski&#64;outlook.com</a>";
	document.getElementById("calendar-container").style.display = "block";
}

// function playMusic() {
// 	document.getElementsByTagName("audio")[0].play();
// }

function sendEmail() {
	var subject = encodeURI(document.getElementById("messageSubject").value);
	var content = encodeURI(document.getElementById("messageContent").value);
	var email = document.getElementById("yourEmail").value;
	location.href="mailto:karol.kiersnowski@outlook.com?subject=" + subject + "&body=" + content + "%0A%0AFrom: " + email;
}