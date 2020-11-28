function checkLeapYear(year)
{
  return (
    (year % 4 == 0) && (
      (year % 100 != 0) || (year % 400 == 0)
      )
    );
}

function displayCalendar(colorOfNormalDay, colorOfCurrentDay)
{
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dayOfMonth = date.getDate();
  var dayOfWeek = date.getDay();

  var nameOfWeek;

  var tempDate = new Date(year, month - 1, 1);
  var firstDayOfMonth = tempDate.getDay();

  if (dayOfWeek == 0)
    dayOfWeek = 7;
  if (firstDayOfMonth == 0)
    firstDayOfMonth = 7;

  if (document.getElementsByTagName('html')[0].getAttribute('lang') == "en") {
    nameOfWeek = [ "Mo","Tu","We","Th","Fr","Sa","Su" ];
    switch(month) {
      case 1 : nameOfMonth = "January";
               daysInMonth = 31;
               break;
      case 2 : nameOfMonth = "February";
               daysInMonth = checkLeapYear(year)?29:28;
               break;
      case 3 : nameOfMonth = "March";
               daysInMonth = 31;
               break;
      case 4 : nameOfMonth = "April";
               daysInMonth = 30;
               break;
      case 5 : nameOfMonth = "May";
               daysInMonth = 31;
               break;
      case 6 : nameOfMonth = "June";
               daysInMonth = 30;
               break;
      case 7 : nameOfMonth = "July";
               daysInMonth = 31;
               break;
      case 8 : nameOfMonth = "August";
               daysInMonth = 31;
               break;
      case 9 : nameOfMonth = "September";
               daysInMonth = 30;
               break;
      case 10 : nameOfMonth = "October";
               daysInMonth = 31;
               break;
      case 11 : nameOfMonth = "November";
               daysInMonth = 30;
               break;
      case 12 : nameOfMonth = "December";
               daysInMonth = 31;
               break;
    }
  } else {
    nameOfWeek = [ "Pn","Wt","Śr","Cz","Pt","So","Nd" ];
    switch(month) {
      case 1 : nameOfMonth = "Styczeń";
               daysInMonth = 31;
               break;
      case 2 : nameOfMonth = "Luty";
               daysInMonth = checkLeapYear(year)?29:28;
               break;
      case 3 : nameOfMonth = "Marzec";
               daysInMonth = 31;
               break;
      case 4 : nameOfMonth = "Kwiecień";
               daysInMonth = 30;
               break;
      case 5 : nameOfMonth = "Maj";
               daysInMonth = 31;
               break;
      case 6 : nameOfMonth = "Czerwiec";
               daysInMonth = 30;
               break;
      case 7 : nameOfMonth = "Lipiec";
               daysInMonth = 31;
               break;
      case 8 : nameOfMonth = "Sierpień";
               daysInMonth = 31;
               break;
      case 9 : nameOfMonth = "Wrzesien";
               daysInMonth = 30;
               break;
      case 10 : nameOfMonth = "Październik";
               daysInMonth = 31;
               break;
      case 11 : nameOfMonth = "Listopad";
               daysInMonth = 30;
               break;
      case 12 : nameOfMonth = "Grudzień";
               daysInMonth = 31;
               break;
    }
  }

  var abbrOfMonth = nameOfMonth.substr(0,3);

  var j = daysInMonth + firstDayOfMonth - 1;

  var row = 0;
  var col = 0;

  for (var i = 0; i < j; i++, col++) {
    if (i < firstDayOfMonth - 1)
      continue;

    if ((i % 7) == 0) {
      row++;
      col = 0;
    }

    document.getElementById(row+"x"+col).style.color = colorOfNormalDay;
    document.getElementById(row+"x"+col).innerHTML = i - firstDayOfMonth + 2;

    if ((i - firstDayOfMonth + 2) == dayOfMonth) {
      document.getElementById(row+"x"+col).style.backgroundColor = "#ddd";
      document.getElementById(row+"x"+col).style.color = colorOfCurrentDay;
      document.getElementById(row+"x"+col).style.borderRadius = "50%";
      document.getElementById(row+"x"+col).style.boxShadow = "0 0 3px #555";
    }

  }

  document.getElementById("Mon").innerHTML = nameOfWeek[0];
  document.getElementById("Tue").innerHTML = nameOfWeek[1];
  document.getElementById("Wed").innerHTML = nameOfWeek[2];
  document.getElementById("Thu").innerHTML = nameOfWeek[3];
  document.getElementById("Fri").innerHTML = nameOfWeek[4];
  document.getElementById("Sat").innerHTML = nameOfWeek[5];
  document.getElementById("Sun").innerHTML = nameOfWeek[6];

  document.getElementById("date").innerHTML = nameOfMonth + " " + year;
  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = abbrOfMonth;
  document.getElementById("day").innerHTML = dayOfMonth;
}