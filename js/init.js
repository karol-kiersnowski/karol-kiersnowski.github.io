// function setCookies() {
// 	if (!getCookie("navLocation"))
// 		setCookie("navLocation", "left");
// 	if (!getCookie("menuState"))
// 		setCookie("navState", "wide");

// 	if (getCookie("navLocation") == "left")
// 		changeNavLocation("left");
// 	else if (getCookie("navLocation") == "right")
// 		changeNavLocation("right");
// 	if (getCookie("navState") == "wide")
// 		widenMenu();
// 	else if (getCookie("navLocation") == "narrow")
// 		narrowMenu();
// }

function checkUserLanguage() {
	if (navigator.browserLanguage)
		lang = navigator.browserLanguage;
	else
		lang = navigator.language;

	lang = lang.substr(0,2).toLowerCase();
	document.getElementsByTagName("html")[0].setAttribute('lang', lang);
	translateText(lang);
}

function overwriteLinkAttributes() {
	document.getElementById("btnPolish").setAttribute("href","javascript:void(0)");
	document.getElementById("btnEnglish").setAttribute("href","javascript:void(0)");
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

// function playMusic() {
// 	document.getElementsByTagName("audio")[0].play();
// }

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

function setOffer() {
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
	location.href="mailto:karol.kiersnowski.prv.pl?subject=" + subject + "&body=" + content + "%0A%0AFrom: " + email;
}

function setGridView() {
	document.getElementById("project-table").style.display = "none";
	document.getElementById("project-grid-list").style.display = "block";
	var list = document.getElementById("project-list");
	if (list != null)
		document.getElementById("project-list").id = "project-grid";
}

function setListView() {
	document.getElementById("project-table").style.display = "none";
	document.getElementById("project-grid-list").style.display = "block";
	var grid = document.getElementById("project-grid");
	if (grid != null)
		document.getElementById("project-grid").id = "project-list";
}

function setTableView() {
	document.getElementById("project-grid-list").style.display = "none";
	document.getElementById("project-table").style.display = "table";
}

function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("project-table");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc"; 
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/*check if the two rows should switch place,
			based on the direction, asc or desc:*/
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchcount ++;      
		} else {
			/*If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again.*/
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}

function sort(sortingBy) {
	var elements, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc"; 
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		elements = document.getElementsByClassName("item");
		/*Loop through all table elements (except the
		first, which contains table headers):*/
		for (i = 0; i < (elements.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			//alert(elements[i].children[1].innerHTML);
			if (sortingBy == "name") {
				x = elements[i].children[1];
				y = elements[i + 1].children[1];
			} else if (sortingBy == "last-modified") {
				x = elements[i].children[2].children[1];
				y = elements[i + 1].children[2].children[1];
			} else if (sortingBy == "initiate-date") {
				x = elements[i].children[3].children[1];
				y = elements[i + 1].children[3].children[1];
			} else if (sortingBy == "progress") {
				alert(elements[i].children[6].value);
				x = elements[i].children[6].value;
				y = elements[i + 1].children[5].value;
			} else if (sortingBy == "language") {
				x = elements[i].children[8].children[1];
				y = elements[i + 1].children[8].children[1];
			}
			/*check if the two elements should switch place,
			based on the direction, asc or desc:*/
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			elements[i].parentNode.insertBefore(elements[i + 1], elements[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchcount ++;      
		} else {
			/*If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again.*/
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}


//setCookies();
checkUserLanguage();
overwriteLinkAttributes();
displayElementsForJSPageVersion();
displayCalendar();
fillInSmallCalendar();
showSection();
setOffer();