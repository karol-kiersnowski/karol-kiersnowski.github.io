function setTableView() {
	document.getElementById("project-select").style.display = "none";
	document.getElementById("project-grid-list").style.display = "none";
	document.getElementById("project-table").style.display = "table";
}

function setGridView() {
	document.getElementById("project-table").style.display = "none";
	document.getElementById("project-select").style.display = "inline-block";
	document.getElementById("project-grid-list").style.display = "block";
	var list = document.getElementById("project-list");
	if (list != null)
		document.getElementById("project-list").id = "project-grid";
}

function setListView() {
	document.getElementById("project-table").style.display = "none";
	document.getElementById("project-select").style.display = "inline-block";
	document.getElementById("project-grid-list").style.display = "block";
	var grid = document.getElementById("project-grid");
	if (grid != null)
		document.getElementById("project-grid").id = "project-list";
}

function toggleTableColumn(checkbox, column) {
	var th = document.querySelector("table#project-table th:nth-child(" + column + ")");
	var td = document.querySelectorAll("table#project-table td:nth-child(" + column + ")");
	if (checkbox.checked) {
		th.style.display = "table-cell";
		for (var i=0; i<td.length; i++)
			td[i].style.display = "table-cell";
	} else {
		th.style.display = "none";
		for (var i=0; i<td.length; i++)
			td[i].style.display = "none";
	}
}

function sortTable(n, thisElement) {
	var table, rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
	table = document.getElementById("project-table");
	switching = true;
	direction = "asc"; 
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
			x = rows[i].getElementsByTagName("td")[n];
			y = rows[i + 1].getElementsByTagName("td")[n];
			/*check if the two rows should switch place,
			based on the direction, asc or desc:*/
			if (direction == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else if (direction == "desc") {
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
			if (switchcount == 0 && direction == "asc") {
				direction = "desc";
				switching = true;
			}
		}
	}

	translateText(document.documentElement.lang);
	if (direction == "asc") thisElement.innerHTML += ' <i class="fa fa-sort-down"></i>';
	else if (direction == "desc") thisElement.innerHTML += ' <i class="fa fa-sort-up"></i>';
}

function sort(sortingBy) {
	var elements, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
	switching = true;
	//Set the sorting direction to ascending:
	direction = "asc"; 
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
				console.log(elements[i].children[1]);
				x = elements[i].children[1];
				y = elements[i + 1].children[1];
			} else if (sortingBy == "update") {
				x = elements[i].children[2].children[1];
				y = elements[i + 1].children[2].children[1];
			} else if (sortingBy == "initiate") {
				x = elements[i].children[3].children[1];
				y = elements[i + 1].children[3].children[1];
			} else if (sortingBy == "progress") {
				console.log(elements[i].children[6]);
				x = elements[i].children[6];
				y = elements[i + 1].children[6];
			} else if (sortingBy == "language") {
				x = elements[i].children[8].children[1];
				y = elements[i + 1].children[8].children[1];
			}
			/*check if the two elements should switch place,
			based on the direction, asc or desc:*/
			if (direction == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else if (direction == "desc") {
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
			if (switchcount == 0 && direction == "asc") {
				direction = "desc";
				switching = true;
			}
		}
	}
}

function sortTableByUpdate() {
	sortTable(4, document.querySelector("th.txtUpdate"));
	sortTable(4, document.querySelector("th.txtUpdate"));
}