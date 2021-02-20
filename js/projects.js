var projectSelect = document.getElementById("project-select");
var projectContainer = document.getElementsByClassName("project-container")[0];

function setTableView() {
	projectSelect.style.display = "none";
	projectContainer.id = "project-table";
}

function setListView() {
	projectSelect.style.display = "inline-block";
	projectContainer.id = "project-list";
}

function setGridView() {
	projectSelect.style.display = "inline-block";
	projectContainer.id = "project-grid";
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
	table = document.getElementsByClassName("project-container")[0];
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

	if (thisElement != null) {
		translateText(document.documentElement.lang);
		if (direction == "asc") thisElement.innerHTML += ' <i class="fa fa-sort-down"></i>';
		else if (direction == "desc") thisElement.innerHTML += ' <i class="fa fa-sort-up"></i>';
	}
}

function sortTableByUpdate() {
	sortTable(4, document.querySelector("th.txtUpdate"));
	sortTable(4, document.querySelector("th.txtUpdate"));
}