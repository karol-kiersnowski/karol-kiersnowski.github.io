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

function changeSort(select) {
	if (select.value == "name")
		sort(1);
	else if (select.value == "initiate")
		sort(2);
	else if (select.value == "update")
		sort(3);
	else if (select.value == "status")
		sort(4);
	else if (select.value == "progress")
		sort(5);
	else if (select.value == "language")
		sort(6);
	else if (select.value == "technologies")
		sort(7);
}

function sort(n, thisElement) {
	var projectContainer = document.getElementsByClassName("project-container")[0];
	var rows = document.getElementsByClassName("tr");
	var switching = true;
	var i;
	var x;
	var y;
	var shouldSwitch;
	var direction = "asc"; 
	var switchCount = 0; 
	
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			//alert(rows[i].getElementsByTagName("div")[1].innerHTML);
			x = rows[i].getElementsByTagName("div")[n];
			y = rows[i + 1].getElementsByTagName("div")[n];
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
			switchCount++;      
		} else {
			/*If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again.*/
			if (switchCount == 0 && direction == "asc") {
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

function sortByUpdate() {
	sort(3, document.querySelector("div.txtUpdate"));
	sort(3, document.querySelector("div.txtUpdate"));
}