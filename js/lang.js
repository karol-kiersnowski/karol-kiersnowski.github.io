var daysOfWeek = new Array(7);
var monthNames = new Array(12);
var monthAbbreviation = new Array(12);

function checkCurrentLanguage() {
	return document.getElementsByTagName('html')[0].getAttribute('lang');
}

function setLanguage(lang) {
	document.getElementsByTagName("html")[0].setAttribute('lang', lang);
}

function translateText(lang) {
	setLanguage(lang);

	// MENU AND HEADERS
	///////////////////
	var btnEnglish = document.getElementById("btnEnglish");
	var btnPolish = document.getElementById("btnPolish");
	var txtOffer = document.getElementsByClassName("txtOffer");
		var txtExamples = document.getElementsByClassName("txtExamples");
	var txtProjects = document.getElementsByClassName("txtProjects");
	var txtCv = document.getElementsByClassName("txtCv");
	var txtContact = document.getElementsByClassName("txtContact");
	var txtPhotography = document.getElementsByClassName("txtPhotography");
	var txtSettings = document.getElementsByClassName("txtSettings");
	var txtCookies = document.getElementsByClassName("txtCookies");

	// PROJECTS PAGE
	////////////////
	var txtName = document.getElementsByClassName("txtName");
		var txtTicTacToe = document.getElementsByClassName("txtTicTacToe");
	var txtTechnologies = document.getElementsByClassName("txtTechnologies");
	var txtRequirements = document.getElementsByClassName("txtRequirements");
		var txtWebBrowser = document.getElementsByClassName("txtWebBrowser");
		var txtPdfReader = document.getElementsByClassName("txtPdfReader");
	var txtLanguage = document.getElementsByClassName("txtLanguage");
		var txtEnglish = document.getElementsByClassName("txtEnglish");
		var txtPolish = document.getElementsByClassName("txtPolish");
		var txtEnglishPolish = document.getElementsByClassName("txtEnglishPolish");
	var txtCreationPeriod = document.getElementsByClassName("txtCreationPeriod");
	var txtInitiate = document.getElementsByClassName("txtInitiate");
	var txtUpdate = document.getElementsByClassName("txtUpdate");
	var txtProgress = document.getElementsByClassName("txtProgress");
	var txtStatus = document.getElementsByClassName("txtStatus");
		var txtFinished = document.getElementsByClassName("txtFinished");
		var txtDeveloped = document.getElementsByClassName("txtDeveloped");
		var txtAbandoned = document.getElementsByClassName("txtAbandoned");
	var iconDownload = document.getElementsByClassName("iconDownload");
	var txtFeatures = document.getElementsByClassName("txtFeatures");
		var txtConnectionToTheDatabase = document.getElementsByClassName("txtConnectionToTheDatabase");
		var txtCSV = document.getElementsByClassName("txtCSV");
		var txtRWDViewportUnit = document.getElementsByClassName("txtRWDViewportUnit");
		var txtCookiesSupport = document.getElementsByClassName("txtCookiesSupport");
		var txtSessionSupport = document.getElementsByClassName("txtSessionSupport");
		var txtMultilingualInterface = document.getElementsByClassName("txtMultilingualInterface");

	if (lang == "en") {

		// MENU AND HEADERS
		///////////////////
		btnEnglish.style.display = "none";
		btnPolish.style.display = "block";
		for (var i=0; i<txtOffer.length; i++)
			txtOffer[i].innerHTML = 'Offer';
		for (var i=0; i<txtProjects.length; i++)
			txtProjects[i].innerHTML = 'Projects';
		txtCv[0].innerHTML = "CV";
		for (var i=0; i<txtContact.length; i++)
			txtContact[i].innerHTML = 'Contact';
		for (var i=0; i<txtPhotography.length; i++)
			txtPhotography[i].innerHTML = 'Photography';
		for (var i=0; i<txtSettings.length; i++)
			txtSettings[i].innerHTML = 'Settings';
		for (var i=0; i<txtCookies.length; i++)
			txtCookies[i].innerHTML = 'Cookies';

		// CALENDAR
		///////////
		daysOfWeek = [ "Mo","Tu","We","Th","Fr","Sa","Su" ];
		monthNames[0] = "January";
		monthNames[1] = "February";
		monthNames[2] = "March";
		monthNames[3] = "April";
		monthNames[4] = "May";
		monthNames[5] = "June";
		monthNames[6] = "July";
		monthNames[7] = "August";
		monthNames[8] = "September";
		monthNames[9] = "October";
		monthNames[10] = "November";
		monthNames[11] = "December";
		for (var i=0; i<12; i++)
			monthAbbreviation[i] = monthNames[i].substr(0,3);

		// OFFER PAGE
		/////////////

		for (var i=0; i<txtExamples.length; i++)
			txtExamples[i].innerHTML = 'examples';

		document.getElementsByClassName("hWebSitesApps")[0].innerHTML = 'web sites / apps';
		document.getElementsByClassName("pWebSitesApps")[0].innerHTML = 'cross-platform<br>on web browsers';
			document.getElementsByClassName("hRWD")[0].innerHTML = 'responsive web design';
			document.getElementsByClassName("pRWD")[0].innerHTML = 'looks good on smartphones and computers';
			document.getElementsByClassName("hOnePage")[0].innerHTML = 'one-page websites';
			document.getElementsByClassName("pOnePage")[0].innerHTML = 'simple websites - bussiness cards';
			document.getElementsByClassName("hSPA")[0].innerHTML = 'single-page applications';
			document.getElementsByClassName("pSPA")[0].innerHTML = 'immediate transition between subpages without refreshing all page';
			//document.getElementsByClassName("hWebApps")[0].innerHTML = 'web applications';
			//document.getElementsByClassName("pWebApps")[0].innerHTML = 'using JavaScript (ECMAScript 6)';
			document.getElementsByClassName("hPWA")[0].innerHTML = 'progressive web applications';
			document.getElementsByClassName("pPWA")[0].innerHTML = '... in progress';
			document.getElementsByClassName("hWebServices")[0].innerHTML = 'expanded web services';
			document.getElementsByClassName("pWebServices")[0].innerHTML = 'using PHP 7 and MySQL / MariaDB';
		document.getElementsByClassName("hDesktopApps")[0].innerHTML = 'desktop apps';
		document.getElementsByClassName("pDesktopApps")[0].innerHTML = 'on Windows and GNU Linux';
			document.getElementsByClassName("hCLI")[0].innerHTML = 'console apps';
			document.getElementsByClassName("pCLI")[0].innerHTML = 'running in the Command-Line Interface';
			document.getElementsByClassName("hGUI")[0].innerHTML = 'window apps';
			document.getElementsByClassName("pGUI")[0].innerHTML = 'running in the Graphical User Interface';
			document.getElementsByClassName("hDB")[0].innerHTML = 'database apps';
			document.getElementsByClassName("pDB")[0].innerHTML = 'using the SQL database (SQlite, MS Access)';
		document.getElementsByClassName("hMobileApps")[0].innerHTML = 'mobile apps';
		document.getElementsByClassName("pMobileApps")[0].innerHTML = 'on Android';

		// PROJECTS PAGE
		////////////////
		document.getElementById("txtProjectsInfo").innerHTML = 'Most of the projects are unfinished. Some of them may not work properly. However, some applications / websites may be interesting. My projects can be found on <a target="_blank" href="https://github.com/karol-kiersnowski">GitHub</a>.';
		for (var i=0; i<txtName.length; i++)
			txtName[i].innerHTML = "Name";
			for (var i=0; i<txtTicTacToe.length; i++)
				txtTicTacToe[i].innerHTML = "Tic Tac Toe";
		for (var i=0; i<txtTechnologies.length; i++)
			txtTechnologies[i].innerHTML = "Technologies";
		for (var i=0; i<txtRequirements.length; i++)
			txtRequirements[i].innerHTML = "Requirements";
			for (var i=0; i<txtWebBrowser.length; i++)
				txtWebBrowser[i].innerHTML = "Web browser";
			for (var i=0; i<txtPdfReader.length; i++)
				txtPdfReader[i].innerHTML = "PDF reader";
		for (var i=0; i<txtLanguage.length; i++)
			txtLanguage[i].innerHTML = "Language";
			for (var i=0; i<txtEnglish.length; i++)
				txtEnglish[i].innerHTML = "English";
			for (var i=0; i<txtPolish.length; i++)
				txtPolish[i].innerHTML = "Polish";
			for (var i=0; i<txtEnglishPolish.length; i++)
				txtEnglishPolish[i].innerHTML = "English / Polish";
		for (var i=0; i<txtCreationPeriod.length; i++)
			txtCreationPeriod[i].innerHTML = "Creation period";
		for (var i=0; i<txtInitiateDate.length; i++)
			txtInitiate[i].innerHTML = "Initiate";
		for (var i=0; i<txtLastModified.length; i++)
			txtUpdate[i].innerHTML = "Update";
		for (var i=0; i<txtProgress.length; i++)
			txtProgress[i].innerHTML = "Progress";
		for (var i=0; i<txtStatus.length; i++)
			txtStatus[i].innerHTML = "Status";
			for (var i=0; i<txtFinished.length; i++)
				txtFinished[i].innerHTML = "finished";
			for (var i=0; i<txtDeveloped.length; i++)
				txtDeveloped[i].innerHTML = "developed";
			for (var i=0; i<txtAbandoned.length; i++)
				txtAbandoned[i].innerHTML = "abandoned";
		for (var i=0; i<iconDownload.length; i++)
			iconDownload[i].innerHTML = '<i class="fa fa-download"></i> Download';
		for (var i=0; i<txtFeatures.length; i++)
			txtFeatures[i].innerHTML = "Features";
			for (var i=0; i<txtConnectionToTheDatabase.length; i++)
				txtConnectionToTheDatabase[i].innerHTML = "connection to the database";
			txtCSV[0].innerHTML = "data is stored in CSV files";
			for (var i=0; i<txtRWDViewportUnit.length; i++)
				txtRWDViewportUnit[i].innerHTML = "RWD: relative length - viewport unit";
			for (var i=0; i<txtSessionSupport.length; i++)
				txtSessionSupport[i].innerHTML = "session support";
			for (var i=0; i<txtCookiesSupport.length; i++)
				txtCookiesSupport[i].innerHTML = "cookies support";
			for (var i=0; i<txtMultilingualInterface.length; i++)
				txtMultilingualInterface[i].innerHTML = "multilingual interface";

		// CV PAGE
		//////////
		document.getElementsByClassName("iconEducation")[0].innerHTML = '<i class="fa fa-graduation-cap"></i> Education';
			document.getElementsByClassName("txtITTechnician")[0].innerHTML = 'IT Technician';
			document.getElementsByClassName("txtITTechnician")[1].innerHTML = 'IT Technician';
			document.getElementsByClassName("txtUniversityOfBialystok")[0].innerHTML = 'University Of Białystok';
			document.getElementsByClassName("txtIT")[0].innerHTML = 'IT';
			document.getElementsByClassName("txtBachelor")[0].innerHTML = 'Bachelor';
			document.getElementsByClassName("txtBachelor")[1].innerHTML = 'Bachelor';
			document.getElementsByClassName("txtComprehensiveSchool")[0].innerHTML = 'Comprehensive School';
			document.getElementsByClassName("txtEconomicProfile")[0].innerHTML = 'Economic Profile';
		document.getElementsByClassName("iconExams")[0].innerHTML = '<i class="far fa-file-alt"></i> Exams, courses, certificates';
			document.getElementsByClassName("txtE14")[0].innerHTML = 'Creation of web applications and databases and database administration';
			document.getElementsByClassName("txtE13")[0].innerHTML = 'Designing of local computer networks and network administraton';
			document.getElementsByClassName("txtE12")[0].innerHTML = 'Assembly and operation of personal computers and external devices';
			document.getElementsByClassName("txtBachelorWork")[0].innerHTML = 'The football manager - a strategy game with elements of artificial intelligence';
			document.getElementsByClassName("txtBachelorWork")[1].innerHTML = 'The football manager - a strategy game with elements of artificial intelligence';
			//document.getElementsByClassName("txtBachelorWork")[2].innerHTML = 'The football manager - a strategy game with elements of artificial intelligence';
			document.getElementsByClassName("txtDrivingLicense")[0].innerHTML = 'Driving license';
			document.getElementsByClassName("txtBCategory")[0].innerHTML = 'B category';
			document.getElementsByClassName("txtBasicLevel")[0].innerHTML = 'basic level';
			document.getElementsByClassName("txtBasicLevel")[1].innerHTML = 'basic level';
			document.getElementsByClassName("txtBasicLevel")[2].innerHTML = 'basic level';
			document.getElementsByClassName("txtBasicLevel")[3].innerHTML = 'basic level';
			document.getElementsByClassName("txtBasicLevel")[4].innerHTML = 'basic level';
			document.getElementsByClassName("txtAdvancedLevel")[0].innerHTML = 'advanced level';
			document.getElementsByClassName("txtAdvancedLevel")[1].innerHTML = 'advanced level';
			document.getElementsByClassName("txtPolishLanguage")[0].innerHTML = 'Polish';
			document.getElementsByClassName("txtEnglishLanguage")[0].innerHTML = 'English';
			document.getElementsByClassName("txtEnglishLanguage")[1].innerHTML = 'English';
			document.getElementsByClassName("txtMaths")[0].innerHTML = 'Maths';
			document.getElementsByClassName("txtMaths")[1].innerHTML = 'Maths';
			document.getElementsByClassName("txtPhysicsAndAstronomy")[0].innerHTML = 'Physics and astronomy';
			document.getElementsByClassName("txtCivics")[0].innerHTML = 'Civics';
			document.getElementsByClassName("txtPractice")[0].innerHTML = 'Practice';
			document.getElementsByClassName("txtPractice")[1].innerHTML = 'Practice';
		document.getElementsByClassName("iconExperience")[0].innerHTML = '<i class="fa fa-briefcase"></i> IT Experience';
		document.getElementsByClassName("iconSkills")[0].innerHTML = '<i class="fa fa-chart-bar"></i> Skills';
			document.getElementsByClassName("ul-skills")[0].innerHTML =
		'<li><i class="fa fa-check fa-li"></i>assembly and upgrading of personal computers</li>			<li><i class="fa fa-check fa-li"></i>support for operating systems: GNU Linux, Windows</li>			<li><i class="fa fa-check fa-li"></i>programming in C, C++, Java, C#</li>			<li><i class="fa fa-check fa-li"></i>creation of web sites / apllications using HTML5, CSS3, JavaScipt and PHP</li>			<li><i class="fa fa-check fa-li"></i>Microsoft Access support, knowledge of SQL, MySQL (MariaDB) administration</li>			<li><i class="fa fa-check fa-li"></i>support for the GIT version control system</li>			<li><i class="fa fa-check fa-li"></i>knowlegde of the LaTeX publishing system</li>			<li><i class="fa fa-check fa-li"></i>configuration of local computer networks</li>			<li><i class="fa fa-check fa-li"></i>English language at B2 level (higher - intermediate)</li>			<li><i class="fa fa-check fa-li"></i>category B driving licence</li>			<li><i class="fa fa-check fa-li"></i>electric pallet jacks</li>';

		document.getElementsByClassName("iconInterests")[0].innerHTML = '<i class="far fa-star"></i> Interests';
			document.getElementsByClassName("txtFootball")[0].innerHTML = 'Football';
			document.getElementsByClassName("txtBasketball")[0].innerHTML = 'Basketball';
			document.getElementsByClassName("txtOperatingSystems")[0].innerHTML = 'Operating systems';
			document.getElementsByClassName("txtCLI")[0].innerHTML = 'Command-line interface';
			document.getElementsByClassName("txtProgramming")[0].innerHTML = 'Programming';
			document.getElementsByClassName("txtWebdev")[0].innerHTML = 'Webdev';
			document.getElementsByClassName("txtComputerGames")[0].innerHTML = 'Computer games';
			document.getElementsByClassName("txtUrbanism")[0].innerHTML = 'Urbanism';
			document.getElementsByClassName("txtPsychology")[0].innerHTML = 'Psychology';

		// CONTACT PAGE
		///////////////
		document.getElementById("txtContactMe").innerHTML = 'If you want to contact me, you can send an e-mail or fill out the form.';
		document.getElementsByClassName("txtForm")[0].innerHTML = 'Form';
			document.getElementById("labelMessageSubject").innerHTML = 'Message subject';
			document.getElementById("labelMessageContent").innerHTML = 'Message content';
			document.getElementById("labelYourEmail").innerHTML = 'Your e-mail';
			document.getElementById("buttonSendEmail").innerHTML = 'Send';

		// SEND MESSAGE PAGE
		////////////////////
		document.getElementById("txtMessageError").innerHTML = "Error - the message has not sent";

		// SETTINGS PAGE
		////////////////
		document.getElementsByClassName("txtMenuLocation")[0].innerHTML = 'Menu location';
			document.getElementsByClassName("txtOnTheLeft")[0].innerHTML = 'On the left';
			document.getElementsByClassName("txtOnTheRight")[0].innerHTML = 'On the right';
		document.getElementsByClassName("txtForegroundTheme")[0].innerHTML = 'Foreground theme';
		document.getElementsByClassName("txtBackgroundTheme")[0].innerHTML = 'Background theme';
		document.getElementsByClassName("txtColors")[0].innerHTML = 'Colors';
			document.getElementsByClassName("txtText")[0].innerHTML = 'Text';
			document.getElementsByClassName("txtIcons")[0].innerHTML = 'Icons';
			document.getElementsByClassName("txtHyperlinks")[0].innerHTML = 'Hyperlinks';
		document.getElementsByClassName("txtFontFamily")[0].innerHTML = 'Font family';
		document.getElementsByClassName("txtFontSize")[0].innerHTML = 'Font size';
		document.getElementsByClassName("txtFontWeight")[0].innerHTML = 'Font weight';
		document.getElementsByClassName("txtFontProperties")[0].innerHTML = 'Font properties';
			document.getElementsByClassName("txtItalic")[0].innerHTML = 'italic';
			document.getElementsByClassName("txtSmallCaps")[0].innerHTML = 'small caps';
		document.getElementsByClassName("txtFooterPosition")[0].innerHTML = 'Footer position';
			document.getElementsByClassName("txtFixedFooter")[0].innerHTML = 'fixed - one level below the main page';
			document.getElementsByClassName("txtStaticFooter")[0].innerHTML = 'static - the same level as the main page';
		document.getElementsByClassName("txtTransformations")[0].innerHTML = 'Transformations';
			document.getElementsByClassName("txtRotate")[0].innerHTML = 'rotate';
			document.getElementsByClassName("txtSkewX")[0].innerHTML = 'skew to the X axis';
			document.getElementsByClassName("txtSkewY")[0].innerHTML = 'skew to the Y axis';
		document.getElementsByClassName("txtHoveringOverImage")[0].innerHTML = 'Hovering over the image';
		document.getElementsByClassName("txtSources")[0].innerHTML = 'Sources';
			document.getElementsByClassName("txtIcons")[1].innerHTML = 'Icons';
			document.getElementsByClassName("txtFonts")[0].innerHTML = 'Fonts';
			document.getElementsByClassName("txtBackgrounds")[0].innerHTML = 'Backgrounds';

		// COOKIES PAGE
		///////////////
		//document.getElementById("cookiesPage").innerHTML =
		//'<h3>What is <em> cookies </em>? </h3>		<blockquote>		<p>			An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user`s computer by the user`s web browser while the user is browsing. (...)		</p>		<footer class="right">			<a target="_blank" href="https://en.wikipedia.org/wiki/HTTP_cookie">en.wikipedia.org/wiki/HTTP_cookie</a>		</footer>		<div class="clear"></div>		</blockquote>		<h3>Why do we use cookies?</h3>		<p>To remember page settings.</p>		<h3>What information do we collect?</h3>		<p>			Nothing special. No private information about you. Cookies are used to remember several page settings, i.e. menu status and location.</p><h3>List of cookies used on the site</h3><ul><li>navState: wide / narrow</li><li>navLocation: left / right</li></ul>';

		// FOOTER
		/////////
		//document.getElementsByClassName("txtCookiesFooterInfo")[0].innerHTML = "Cookies are on this page<br>More information ";
		//document.getElementsByClassName("txtHere")[0].innerHTML = "here";
		document.getElementById("txtToCreateWebsiteThereWereUsed").innerHTML = 'To create website there were used<br><a target="_blank" href="https://fontawesome.com">Fonts Awesome</a> icons and<br><a target="_blank" href="https://fonts.google.com/specimen/Quicksand">Quicksand</a> font';
		//document.getElementById("txtAlternatives").innerHTML = 'Go to the bright side of the force';



	} else if (lang == "pl") {

		// MENU AND HEADERS
		///////////////////
		btnEnglish.style.display = "block";
		btnPolish.style.display = "none";
		for (var i=0; i<txtOffer.length; i++)
			txtOffer[i].innerHTML = 'Oferta';
		for (var i=0; i<txtProjects.length; i++)
			txtProjects[i].innerHTML = 'Projekty';
		txtCv[0].innerHTML = "CV";
		for (var i=0; i<txtContact.length; i++)
			txtContact[i].innerHTML = 'Kontakt';
		for (var i=0; i<txtPhotography.length; i++)
			txtPhotography[i].innerHTML = 'Fotografia';
		for (var i=0; i<txtSettings.length; i++)
			txtSettings[i].innerHTML = 'Ustawienia';
		for (var i=0; i<txtCookies.length; i++)
			txtCookies[i].innerHTML = 'Ciasteczka (HTTP Cookies)';

		// CALENDAR
		///////////
		daysOfWeek = [ "Pn","Wt","Śr","Cz","Pt","So","Nd" ];
		monthNames[0] = "Styczeń";
		monthNames[1] = "Luty";
		monthNames[2] = "Marzec";
		monthNames[3] = "Kwiecień";
		monthNames[4] = "Maj";
		monthNames[5] = "Czerwiec";
		monthNames[6] = "Lipiec";
		monthNames[7] = "Sierpień";
		monthNames[8] = "Wrzesień";
		monthNames[9] = "Październik";
		monthNames[10] = "Listopad";
		monthNames[11] = "Grudzień";
		for (var i=0; i<12; i++)
			monthAbbreviation[i] = monthNames[i].substr(0,3);

		// OFFER PAGE
		/////////////

		for (var i=0; i<txtExamples.length; i++)
			txtExamples[i].innerHTML = 'przykłady';

		document.getElementsByClassName("hWebSitesApps")[0].innerHTML = 'strony / aplikacje internetowe';
		document.getElementsByClassName("pWebSitesApps")[0].innerHTML = 'wieloplatformowe';
			document.getElementsByClassName("hRWD")[0].innerHTML = 'responsywny układ stron';
			document.getElementsByClassName("pRWD")[0].innerHTML = 'dobrze się prezentuje na smartfonach i komputerach';
			document.getElementsByClassName("hOnePage")[0].innerHTML = 'strony typu one-page';
			document.getElementsByClassName("pOnePage")[0].innerHTML = 'proste strony internetowe - wizytówki';
			document.getElementsByClassName("hSPA")[0].innerHTML = 'aplikacje typu single-page (SPA)';
			document.getElementsByClassName("pSPA")[0].innerHTML = 'natychmiastowe przejścia pomiędzy podstronami bez odświeżania całej strony';
			//document.getElementsByClassName("hWebApps")[0].innerHTML = 'aplikacje internetowe';
			//document.getElementsByClassName("pWebApps")[0].innerHTML = 'z wykorzystaniem JavaScript (ECMAScript 6)';
			document.getElementsByClassName("hPWA")[0].innerHTML = 'progresywne aplikacje internetowe (PWA)';
			document.getElementsByClassName("pPWA")[0].innerHTML = '... in progress';
			document.getElementsByClassName("hWebServices")[0].innerHTML = 'rozbudowane serwisy internetowe';
			document.getElementsByClassName("pWebServices")[0].innerHTML = 'z wykorzystaniem PHP 7 i MySQL / MariaDB';
		document.getElementsByClassName("hDesktopApps")[0].innerHTML = 'aplikacje desktopowe';
		document.getElementsByClassName("pDesktopApps")[0].innerHTML = 'na systemy Windows i GNU Linux';
			document.getElementsByClassName("hCLI")[0].innerHTML = 'aplikacje konsolowe (CLI)';
			document.getElementsByClassName("pCLI")[0].innerHTML = 'uruchamiane w wierszu poleceń';
			document.getElementsByClassName("hGUI")[0].innerHTML = 'aplikacje okienkowe (GUI)';
			document.getElementsByClassName("pGUI")[0].innerHTML = 'uruchamiane w interfejsie graficznym';
			document.getElementsByClassName("hDB")[0].innerHTML = 'aplikacje bazodanowe';
			document.getElementsByClassName("pDB")[0].innerHTML = 'korzystają z bazy danych SQL (SQlite, MS Access)';
		document.getElementsByClassName("hMobileApps")[0].innerHTML = 'aplikacje mobilne';
		document.getElementsByClassName("pMobileApps")[0].innerHTML = 'na system Android';

		// PROJECTS PAGE
		////////////////s
		document.getElementById("txtProjectsInfo").innerHTML = 'Większość projektów jest nieukończonych. Niektóre z nich mogą działać niepoprawnie. Mimo to, niektóre aplikacje / strony internetowe mogą być interesujące. Moje projekty można znaleźć w serwisie <a target="_blank" href="https://github.com/karol-kiersnowski">GitHub</a>.';
		for (var i=0; i<txtName.length; i++)
			txtName[i].innerHTML = "Nazwa";
			for (var i=0; i<txtTicTacToe.length; i++)
				txtTicTacToe[i].innerHTML = "Tic Tac Toe (Kółko i krzyżyk)";
		for (var i=0; i<txtTechnologies.length; i++)
			txtTechnologies[i].innerHTML = "Technologie";
		for (var i=0; i<txtRequirements.length; i++)
			txtRequirements[i].innerHTML = "Wymagania";
			for (var i=0; i<txtWebBrowser.length; i++)
				txtWebBrowser[i].innerHTML = "Przeglądarka internetowa";
			for (var i=0; i<txtPdfReader.length; i++)
				txtPdfReader[i].innerHTML = "czytnik PDF";
		for (var i=0; i<txtLanguage.length; i++)
			txtLanguage[i].innerHTML = "Język";
			for (var i=0; i<txtEnglish.length; i++)
				txtEnglish[i].innerHTML = "angielski";
			for (var i=0; i<txtPolish.length; i++)
				txtPolish[i].innerHTML = "polski";
			for (var i=0; i<txtEnglishPolish.length; i++)
				txtEnglishPolish[i].innerHTML = "angielski / polski";
		for (var i=0; i<txtCreationPeriod.length; i++)
			txtCreationPeriod[i].innerHTML = "Okres tworzenia";
		for (var i=0; i<txtInitiate.length; i++)
			txtInitiate[i].innerHTML = "Początek";
		for (var i=0; i<txtUpdate.length; i++)
			txtUpdate[i].innerHTML = "Aktualizacja";
		for (var i=0; i<txtProgress.length; i++)
			txtProgress[i].innerHTML = "Postęp";
		for (var i=0; i<txtStatus.length; i++)
			txtStatus[i].innerHTML = "Stan";
			for (var i=0; i<txtFinished.length; i++)
				txtFinished[i].innerHTML = "ukończony";
			for (var i=0; i<txtDeveloped.length; i++)
				txtDeveloped[i].innerHTML = "rozwijany";
			for (var i=0; i<txtAbandoned.length; i++)
				txtAbandoned[i].innerHTML = "porzucony";
			// for (var i=0; i<txtFinished.length; i++)
			// 	txtFinished[i].innerHTML = '<i class="fa fa-check fa-fw"></i> ukończony';
			// for (var i=0; i<txtDeveloped.length; i++)
			// 	txtDeveloped[i].innerHTML = '<i class="fa fa-code fa-fw"></i> rozwijany';
			// for (var i=0; i<txtAbandoned.length; i++)
			// 	txtAbandoned[i].innerHTML = '<i class="fa fa-times fa-fw"></i> porzucony';
		for (var i=0; i<iconDownload.length; i++)
			iconDownload[i].innerHTML = '<i class="fa fa-download"></i> Pobierz';
		for (var i=0; i<txtFeatures.length; i++)
			txtFeatures[i].innerHTML = "Cechy";
			for (var i=0; i<txtConnectionToTheDatabase.length; i++)
				txtConnectionToTheDatabase[i].innerHTML = "łączenie się z bazą danych";
			txtCSV[0].innerHTML = "dane przechowywane są w plikach CSV";
			for (var i=0; i<txtRWDViewportUnit.length; i++)
				txtRWDViewportUnit[i].innerHTML = "responsywna strona: względna długość - jednostka zależna od rozmiarów okna przeglądarki";
			for (var i=0; i<txtCookiesSupport.length; i++)
				txtCookiesSupport[i].innerHTML = "obsługa ciasteczek (cookies)";
			for (var i=0; i<txtSessionSupport.length; i++)
				txtSessionSupport[i].innerHTML = "obsługa sesji";
			for (var i=0; i<txtMultilingualInterface.length; i++)
				txtMultilingualInterface[i].innerHTML = "wielojęzyczny interfejs";

		// CV PAGE
		//////////
		document.getElementsByClassName("iconEducation")[0].innerHTML = '<i class="fa fa-graduation-cap"></i> Edukacja';
			document.getElementsByClassName("txtITTechnician")[0].innerHTML = 'Technik Informatyk';
			document.getElementsByClassName("txtITTechnician")[1].innerHTML = 'Technik Informatyk';
			document.getElementsByClassName("txtUniversityOfBialystok")[0].innerHTML = 'Uniwersytet w Białymstoku';
			document.getElementsByClassName("txtIT")[0].innerHTML = 'Informatyka';
			document.getElementsByClassName("txtBachelor")[0].innerHTML = 'Licencjat';
			document.getElementsByClassName("txtBachelor")[1].innerHTML = 'Licencjat';
			document.getElementsByClassName("txtComprehensiveSchool")[0].innerHTML = 'Liceum Ogólnokształcące';
			document.getElementsByClassName("txtEconomicProfile")[0].innerHTML = 'Profil ekonomiczny';
		document.getElementsByClassName("iconExams")[0].innerHTML = '<i class="far fa-file-alt"></i> Egzaminy, kursy, certyfikaty';
			document.getElementsByClassName("txtE14")[0].innerHTML = 'Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami';
			document.getElementsByClassName("txtE13")[0].innerHTML = 'Projektowanie lokalnych sieci komputerowych i administrowanie sieciami';
			document.getElementsByClassName("txtE12")[0].innerHTML = 'Montaż i eksploatacja komputerów osobistych oraz urządzeń peryferyjnych';
			document.getElementsByClassName("txtBachelorWork")[0].innerHTML = 'Menedżer piłkarski - gra strategiczna z elementami sztucznej inteligencji';
			document.getElementsByClassName("txtBachelorWork")[1].innerHTML = 'Menedżer piłkarski - gra strategiczna z elementami sztucznej inteligencji';
			//document.getElementsByClassName("txtBachelorWork")[2].innerHTML = 'Menedżer piłkarski - gra strategiczna z elementami sztucznej inteligencji';
			document.getElementsByClassName("txtDrivingLicense")[0].innerHTML = 'Prawo jazdy';
			document.getElementsByClassName("txtBCategory")[0].innerHTML = 'kategoria B';
			document.getElementsByClassName("txtBasicLevel")[0].innerHTML = 'poziom podstawowy';
			document.getElementsByClassName("txtBasicLevel")[1].innerHTML = 'poziom podstawowy';
			document.getElementsByClassName("txtBasicLevel")[2].innerHTML = 'poziom podstawowy';
			document.getElementsByClassName("txtBasicLevel")[3].innerHTML = 'poziom podstawowy';
			document.getElementsByClassName("txtBasicLevel")[4].innerHTML = 'poziom podstawowy';
			document.getElementsByClassName("txtAdvancedLevel")[0].innerHTML = 'poziom rozszerzony';
			document.getElementsByClassName("txtAdvancedLevel")[1].innerHTML = 'poziom rozszerzony';
			document.getElementsByClassName("txtPolishLanguage")[0].innerHTML = 'Język polski';
			document.getElementsByClassName("txtEnglishLanguage")[0].innerHTML = 'Język angielski';
			document.getElementsByClassName("txtEnglishLanguage")[1].innerHTML = 'Język angielski';
			document.getElementsByClassName("txtMaths")[0].innerHTML = 'Matematyka';
			document.getElementsByClassName("txtMaths")[1].innerHTML = 'Matematyka';
			document.getElementsByClassName("txtPhysicsAndAstronomy")[0].innerHTML = 'Fizyka i astronomia';
			document.getElementsByClassName("txtCivics")[0].innerHTML = 'Wiedza o społeczeństwie';
			document.getElementsByClassName("txtPractice")[0].innerHTML = 'Praktyki';
			document.getElementsByClassName("txtPractice")[1].innerHTML = 'Praktyki';
		document.getElementsByClassName("iconExperience")[0].innerHTML = '<i class="fa fa-briefcase"></i> Doświadczenie IT';
		document.getElementsByClassName("iconSkills")[0].innerHTML = '<i class="fa fa-chart-bar"></i> Umiejętności';
			document.getElementsByClassName("ul-skills")[0].innerHTML =
			'<li><i class="fa fa-check fa-li"></i>montaż i modernizacja komputerów osobistych</li>			<li><i class="fa fa-check fa-li"></i>obsługa systemów operacyjnych GNU Linux, Windows</li>			<li><i class="fa fa-check fa-li"></i>programowanie w językach C, C++, Java, C#</li>			<li><i class="fa fa-check fa-li"></i>tworzenie stron / aplikacji internetowych z wykorzystaniem HTML5, CSS3, JavaScript i PHP</li>			<li><i class="fa fa-check fa-li"></i>obsługa Microsoft Access, znajomość języka SQL, administrowanie MySQL (MariaDB)</li>			<li><i class="fa fa-check fa-li"></i>obsługa systemu kontroli wersji GIT</li>			<li><i class="fa fa-check fa-li"></i>znajomość systemu składu publikacji LaTeX</li>			<li><i class="fa fa-check fa-li"></i>konfiguracja lokalnych sieci komputerowych</li>			<li><i class="fa fa-check fa-li"></i>język angielski na poziomie B2 (wyższy średnio – zaawansowany)</li>			<li><i class="fa fa-check fa-li"></i>prawo jazdy kategorii B</li>			<li><i class="fa fa-check fa-li"></i>wózki jezdniowe unoszące o napędzie elektrycznym</li>';
		document.getElementsByClassName("iconInterests")[0].innerHTML = '<i class="far fa-star"></i> Zainteresowania';
			document.getElementsByClassName("txtFootball")[0].innerHTML = 'Piłka nożna';
			document.getElementsByClassName("txtBasketball")[0].innerHTML = 'Koszykówka';
			document.getElementsByClassName("txtOperatingSystems")[0].innerHTML = 'Systemy operacyjne';
			document.getElementsByClassName("txtCLI")[0].innerHTML = 'Wiersz poleceń';
			document.getElementsByClassName("txtProgramming")[0].innerHTML = 'Programowanie';
			document.getElementsByClassName("txtWebdev")[0].innerHTML = 'Tworzenie stron internetowych';
			document.getElementsByClassName("txtComputerGames")[0].innerHTML = 'Gry komputerowe';
			document.getElementsByClassName("txtUrbanism")[0].innerHTML = 'Urbanistyka';
			document.getElementsByClassName("txtPsychology")[0].innerHTML = 'Psychologia';

		// CONTACT PAGE
		///////////////
		document.getElementById("txtContactMe").innerHTML = 'Jeśli chcesz się ze mną skontaktować, możesz wysłać e-mail lub wypełnić formularz.';
		document.getElementsByClassName("txtForm")[0].innerHTML = 'Formularz';
			document.getElementById("labelMessageSubject").innerHTML = 'Temat wiadomości';
			document.getElementById("labelMessageContent").innerHTML = 'Treść wiadomości';
			document.getElementById("labelYourEmail").innerHTML = 'Twój e-mail';
			document.getElementById("buttonSendEmail").innerHTML = 'Wyślij';

		// SEND MESSAGE PAGE
		////////////////////
		document.getElementById("txtMessageError").innerHTML = "Błąd - wiadomość nie została wysłana";

		// SETTINGS PAGE
		////////////////
		document.getElementsByClassName("txtMenuLocation")[0].innerHTML = 'Położenie menu';
			document.getElementsByClassName("txtOnTheLeft")[0].innerHTML = 'Po lewej';
			document.getElementsByClassName("txtOnTheRight")[0].innerHTML = 'Po prawej';
		document.getElementsByClassName("txtForegroundTheme")[0].innerHTML = 'Motyw pierwszoplanowy';
		document.getElementsByClassName("txtBackgroundTheme")[0].innerHTML = 'Motyw drugoplanowy';
		document.getElementsByClassName("txtColors")[0].innerHTML = 'Kolory';
			document.getElementsByClassName("txtText")[0].innerHTML = 'Tekst';
			document.getElementsByClassName("txtIcons")[0].innerHTML = 'Ikony';
			document.getElementsByClassName("txtHyperlinks")[0].innerHTML = 'Odnośniki';
		document.getElementsByClassName("txtFontFamily")[0].innerHTML = 'Krój czcionki';
		document.getElementsByClassName("txtFontSize")[0].innerHTML = 'Wielkość czcionki';
		document.getElementsByClassName("txtFontWeight")[0].innerHTML = 'Grubość czcionki';
		document.getElementsByClassName("txtFontProperties")[0].innerHTML = 'Właściwości czcionki';
			document.getElementsByClassName("txtItalic")[0].innerHTML = 'kursywa';
			document.getElementsByClassName("txtSmallCaps")[0].innerHTML = 'drukowane litery';
		document.getElementsByClassName("txtFooterPosition")[0].innerHTML = 'Położenie stopki';
			document.getElementsByClassName("txtFixedFooter")[0].innerHTML = 'nieruchomy - jeden poziom poniżej strony głównej';
			document.getElementsByClassName("txtStaticFooter")[0].innerHTML = 'statyczny - ten sam poziom co strona główna';
		document.getElementsByClassName("txtTransformations")[0].innerHTML = 'Przekształcenia';
			document.getElementsByClassName("txtRotate")[0].innerHTML = 'obrócony';
			document.getElementsByClassName("txtSkewX")[0].innerHTML = 'ukosny względem osi X';
			document.getElementsByClassName("txtSkewY")[0].innerHTML = 'ukośny względem osi Y';
		document.getElementsByClassName("txtHoveringOverImage")[0].innerHTML = 'Najechanie kursorem na obraz';
		document.getElementsByClassName("txtSources")[0].innerHTML = 'Źródła';
			document.getElementsByClassName("txtIcons")[1].innerHTML = 'Ikony';
			document.getElementsByClassName("txtFonts")[0].innerHTML = 'Czcionki';
			document.getElementsByClassName("txtBackgrounds")[0].innerHTML = 'Tła';

		// COOKIES PAGE
		///////////////
		//document.getElementById("cookiesPage").innerHTML =
		//'<h3>Czym jest <em>cookies</em>?</h3><blockquote><p>HTTP Cookie (tłumaczone czasem jako plik cookie, w skrócie cookie, również ciasteczko) – mały fragment tekstu, który serwis internetowy wysyła do przeglądarki i który przeglądarka wysyła z powrotem przy następnych wejściach na witrynę. (...)</p><footer class="right"><a target="_blank" href="https://pl.wikipedia.org/wiki/HTTP_cookie">pl.wikipedia.org/wiki/HTTP_cookie</a>			</footer><div class="clear"></div></blockquote><h3>Dlaczego wykorzystujemy ciasteczka?</h3><p>Aby zapamiętać ustawienia strony.</p><h3>Jakie informacje zbieramy?</h3><p>Nic szczególnego. Żadnych prywatnych informacji o Tobie. Ciasteczka służą do zapamiętania kilku ustawień strony, tj. stan i położenie menu.</p><h3>Spis ciasteczek używanych na stronie</h3><ul><li>navState: wide / narrow</li><li>navLocation: left / right</li></ul>';

		// FOOTER
		/////////
		//document.getElementsByClassName("txtCookiesFooterInfo")[0].innerHTML = "Na tej stronie grasują ciasteczka (cookies)<br>Więcej informacji ";
		//document.getElementsByClassName("txtHere")[0].innerHTML = "tutaj";
		document.getElementById("txtToCreateWebsiteThereWereUsed").innerHTML = 'Do stworzenia strony wykorzystano<br>ikony <a target="_blank" href="https://fontawesome.com">Font Awesome</a> oraz<br>czcionkę <a target="_blank" href="https://fonts.google.com/specimen/Quicksand">Quicksand</a>';
		//document.getElementById("txtAlternatives").innerHTML = 'Przejdź na jasną stronę mocy.';
	}
}