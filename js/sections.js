function showSection() {
	var sections = document.getElementsByTagName("section");
	for (var i=0; i<sections.length; i++)
		sections[i].style.display = "none";

	var hash = window.location.hash.substr(1);
	var translatedSection;

	if (hash == "") {
		document.getElementById("offer").style.display = "block";
		document.title = "Karol Kiersnowski | Portfolio";
	}
	else if (hash == "offer" ||
			hash == "projects" ||
			hash == "cv" ||
			hash == "contact" ||
			hash == "photography" ||
			hash == "settings" ||
			hash == "cookies") {
		document.getElementById(hash).style.display = "block";
		var hashUpperCase = hash.charAt(0).toUpperCase() + hash.substr(1);
		translatedSection = document.getElementsByClassName("txt" + hashUpperCase)[0].innerHTML;
	}
	else {
		document.getElementById("projects").style.display = "block";
		translatedSection = document.getElementsByClassName("txtProjects")[0].innerHTML;
	}


	if (hash != "") {
		document.title = "Karol Kiersnowski | Portfolio - " + translatedSection;
		window.location.hash = "#" + hash;
	}
}