var year = new Date().getFullYear();
var month = new Date().getMonth();

function goToPreviousMonth() {
	month--;
	if (month < 0)
		month = 11;
	refreshCalendar();
}

function goToNextMonth() {
	month++;
	if (month > 11)
		month = 0;
	refreshCalendar();
}

function goToPreviousYear() {
	year--;
	refreshCalendar();
}

function goToNextYear() {
	year++;
	refreshCalendar();
}

function displayCalendar()
{
	fillInSmallCalendar();
	fillInBigCalendar();
}

function refreshCalendar() {
	clearCalendar();
	displayCalendar();
}

function clearCalendar() {
	for (var y=0; y<6; y++) {
		for (var x=0; x<7; x++) {
			document.getElementById(y+"x"+x).innerHTML = "";
			document.getElementById(y+"x"+x).style.color = "";
			document.getElementById(y+"x"+x).style.backgroundColor = "";
			document.getElementById(y+"x"+x).style.borderRadius = "";
			document.getElementById(y+"x"+x).style.boxShadow = "";
		}
	}
}

function fillInSmallCalendar() {
	var date = new Date();
	document.getElementById("small-month").innerHTML = monthAbbreviation[date.getMonth()];
	document.getElementById("small-year").innerHTML = date.getFullYear();
	document.getElementById("day").innerHTML = date.getDate();
}

function fillInBigCalendar() {
	var date = new Date();
	var dayOfMonth = date.getDate();
	var dayOfWeek = date.getDay();

	var firstDayOfMonth = new Date(year, month, 1).getDay();

	if (dayOfWeek == 0)
		dayOfWeek = 7;
	if (firstDayOfMonth == 0)
		firstDayOfMonth = 7;

	var daysInMonth = new Array(12);
	daysInMonth[0] = 31;
	daysInMonth[1] = checkLeapYear(year)?29:28;
	daysInMonth[2] = 31;
	daysInMonth[3] = 30;
	daysInMonth[4] = 31;
	daysInMonth[5] = 30;
	daysInMonth[6] = 31;
	daysInMonth[7] = 31;
	daysInMonth[8] = 30;
	daysInMonth[9] = 31;
	daysInMonth[10] = 30;
	daysInMonth[11] = 31;

	var j = daysInMonth[month] + firstDayOfMonth;

	var row = 0;
	var col = 0;

	for (var i = 0; i < j - 1; i++, col++) {
		if (i < firstDayOfMonth - 1)
			continue;

		if ((i % 7) == 0) {
			row++;
			col = 0;
		}

		document.getElementById(row+"x"+col).style.color = "#777";
		document.getElementById(row+"x"+col).innerHTML = i - firstDayOfMonth + 2;

		if ((i - firstDayOfMonth + 2) == dayOfMonth) {
			// console.log(year);
			// console.log(presentYear);
			if (year == new Date().getFullYear() && month == new Date().getMonth())
				markPresentDay(row, col);
		}

	}

	for (var i=0; i<7; i++)
		document.getElementsByClassName("daysOfWeek")[i].innerHTML = daysOfWeek[i];

	document.getElementById("big-month").innerHTML = monthNames[month];
	document.getElementById("big-year").innerHTML = year;
}

function checkLeapYear(year)
{
	return (
		(year % 4 == 0) && (
			(year % 100 != 0) || (year % 400 == 0)
			)
		);
}

function markPresentDay(row, col) {
	document.getElementById(row+"x"+col).style.backgroundColor = "#ddd";
	document.getElementById(row+"x"+col).style.color = "#000";
	document.getElementById(row+"x"+col).style.borderRadius = "50%";
	document.getElementById(row+"x"+col).style.boxShadow = "0 0 3px #555";
}