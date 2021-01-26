function showSection() {
	var sections = document.getElementsByTagName("section");
	for (var i=0; i<sections.length; i++)
		sections[i].style.display = "none";

	var hash = window.location.hash.substr(1);
	var translatedSection;

	if (hash == "") {
		document.getElementById("offer").style.display = "block";
		document.title = "Karol Kiersnowski | Portfolio";
	} else {
		document.getElementById(hash).style.display = "block";
		var hashUpperCase = hash.charAt(0).toUpperCase() + hash.substr(1);

		if (document.getElementsByClassName("txt" + hashUpperCase)[0] != undefined)
			translatedSection = document.getElementsByClassName("txt" + hashUpperCase)[0].innerHTML;
		else
			translatedSection = document.getElementsByClassName("txtProjects")[0].innerHTML;

		document.title = "Karol Kiersnowski | Portfolio - " + translatedSection;
		window.location.hash = "#" + hash;
	}
}