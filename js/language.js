function getLanguageFromBrowser() {
	let language = navigator.language.substr(0,2);
	if (language != "en" && language != "pl")
		return "en";
}

function setLanguageFromWebBrowser() {
	let language = navigator.language.substr(0,2);
	if (language != "en" && language != "pl")
		language = "en";

	document.documentElement.lang = language;
	translateText(language);
}

function setLanguage(Language) {
	language = Language;
	document.documentElement.lang = language;
	translateText(language);
	refreshCalendar();
}

function translateText(language) {
	// MENU AND HEADERS
	///////////////////
	let english = document.getElementById("english");
	let polish = document.getElementById("polish");
	let txtHome = document.getElementsByClassName("txtHome");
		let txtExamples = document.getElementsByClassName("txtExamples");
	let txtProjects = document.getElementsByClassName("txtProjects");
	let txtCv = document.getElementsByClassName("txtCv");
	let txtContact = document.getElementsByClassName("txtContact");
	let txtPhotography = document.getElementsByClassName("txtPhotography");
	let txtSettings = document.getElementsByClassName("txtSettings");
	let txtCookies = document.getElementsByClassName("txtCookies");

	// PROJECTS PAGE
	////////////////
	let txtIcon = document.getElementsByClassName("txtIcon");
	let txtName = document.getElementsByClassName("txtName");
		let txtTicTacToe = document.getElementsByClassName("txtTicTacToe");
	let txtTechnologies = document.getElementsByClassName("txtTechnologies");
	let txtProjectWebsite = document.getElementsByClassName("txtProjectWebsite");
	let txtDocumentationSourceCode = document.getElementsByClassName("txtDocumentationSourceCode");
	let txtRequirements = document.getElementsByClassName("txtRequirements");
		let txtWebBrowser = document.getElementsByClassName("txtWebBrowser");
		let txtPdfReader = document.getElementsByClassName("txtPdfReader");
	let txtLanguage = document.getElementsByClassName("txtLanguage");
		let txtEnglish = document.getElementsByClassName("txtEnglish");
		let txtPolish = document.getElementsByClassName("txtPolish");
		let txtEnglishPolish = document.getElementsByClassName("txtEnglishPolish");
	let txtCreationPeriod = document.getElementsByClassName("txtCreationPeriod");
	let txtInitiate = document.getElementsByClassName("txtInitiate");
	let txtUpdate = document.getElementsByClassName("txtUpdate");
	let txtProgress = document.getElementsByClassName("txtProgress");
	let txtStatus = document.getElementsByClassName("txtStatus");
		let txtFinished = document.getElementsByClassName("txtFinished");
		let txtDeveloped = document.getElementsByClassName("txtDeveloped");
		let txtAbandoned = document.getElementsByClassName("txtAbandoned");
	let iconDownload = document.getElementsByClassName("iconDownload");
	let txtFeatures = document.getElementsByClassName("txtFeatures");
		let txtCSSWebfonts = document.getElementsByClassName("txtCSSWebfonts");
		let txtConnectionToTheDatabase = document.getElementsByClassName("txtConnectionToTheDatabase");
		let txtCSV = document.getElementsByClassName("txtCSV");
		let txtRWDViewportUnit = document.getElementsByClassName("txtRWDViewportUnit");
		let txtCookiesSupport = document.getElementsByClassName("txtCookiesSupport");
		let txtSessionSupport = document.getElementsByClassName("txtSessionSupport");
		let txtMultilingualInterface = document.getElementsByClassName("txtMultilingualInterface");
	let txtUserInterface = document.getElementsByClassName("txtUserInterface");
	let txtSourceCode = document.getElementsByClassName("txtSourceCode");
	let txtScreenshots = document.getElementsByClassName("txtScreenshots");
	let txtAuthor = document.getElementsByClassName("txtAuthor");
	let txtLicense = document.getElementsByClassName("txtLicense");
	let txtAllRightsReserved = document.getElementsByClassName("txtAllRightsReserved");

	if (language == "en") {

		// MENU AND HEADERS
		///////////////////
		english.style.display = "none";
		polish.style.display = "block";
		for (let i=0; i<txtHome.length; i++)
			txtHome[i].innerHTML = 'Home page';
		for (let i=0; i<txtProjects.length; i++)
			txtProjects[i].innerHTML = 'Projects';
		txtCv[0].innerHTML = "CV";
		for (let i=0; i<txtContact.length; i++)
			txtContact[i].innerHTML = 'Contact';
		for (let i=0; i<txtPhotography.length; i++)
			txtPhotography[i].innerHTML = 'Photography';
		for (let i=0; i<txtSettings.length; i++)
			txtSettings[i].innerHTML = 'Settings';
		for (let i=0; i<txtCookies.length; i++)
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
		for (let i=0; i<12; i++)
			monthAbbreviation[i] = monthNames[i].substr(0,3);

		// HOME PAGE
		/////////////

		for (let i=0; i<txtExamples.length; i++)
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
		document.getElementsByClassName("txtView")[0].innerHTML = "View";
			document.getElementsByClassName("txtTable")[0].innerHTML = "Table";
			document.getElementsByClassName("txtList")[0].innerHTML = "List";
			document.getElementsByClassName("txtGrid")[0].innerHTML = "Grid";
		document.getElementsByClassName("txtSortBy")[0].innerHTML = "Sort by";
		for (let i=0; i<txtIcon.length; i++)
			txtIcon[i].innerHTML = "Icon";
		for (let i=0; i<txtName.length; i++)
			txtName[i].innerHTML = "Name";
			for (let i=0; i<txtTicTacToe.length; i++)
				txtTicTacToe[i].innerHTML = "Tic Tac Toe";
		for (let i=0; i<txtTechnologies.length; i++)
			txtTechnologies[i].innerHTML = "Technologies";
		for (let i=0; i<txtProjectWebsite.length; i++)
			txtProjectWebsite[i].innerHTML = "Project website";
		for (let i=0; i<txtDocumentationSourceCode.length; i++)
			txtDocumentationSourceCode[i].innerHTML = "Documentation & source code";
		for (let i=0; i<txtRequirements.length; i++)
			txtRequirements[i].innerHTML = "Requirements";
			for (let i=0; i<txtWebBrowser.length; i++)
				txtWebBrowser[i].innerHTML = "Web browser";
			for (let i=0; i<txtPdfReader.length; i++)
				txtPdfReader[i].innerHTML = "PDF reader";
		for (let i=0; i<txtLanguage.length; i++)
			txtLanguage[i].innerHTML = "Language";
			for (let i=0; i<txtEnglish.length; i++)
				txtEnglish[i].innerHTML = "English";
			for (let i=0; i<txtPolish.length; i++)
				txtPolish[i].innerHTML = "Polish";
			for (let i=0; i<txtEnglishPolish.length; i++)
				txtEnglishPolish[i].innerHTML = "English / Polish";
		for (let i=0; i<txtCreationPeriod.length; i++)
			txtCreationPeriod[i].innerHTML = "Creation period";
		for (let i=0; i<txtInitiate.length; i++)
			txtInitiate[i].innerHTML = "Initiate";
		for (let i=0; i<txtUpdate.length; i++)
			txtUpdate[i].innerHTML = "Update";
		for (let i=0; i<txtProgress.length; i++)
			txtProgress[i].innerHTML = "Progress";
		for (let i=0; i<txtStatus.length; i++)
			txtStatus[i].innerHTML = "Status";
			for (let i=0; i<txtFinished.length; i++)
				txtFinished[i].innerHTML = "finished";
			for (let i=0; i<txtDeveloped.length; i++)
				txtDeveloped[i].innerHTML = "developed";
			for (let i=0; i<txtAbandoned.length; i++)
				txtAbandoned[i].innerHTML = "abandoned";
		for (let i=0; i<iconDownload.length; i++)
			iconDownload[i].innerHTML = '<i class="fa fa-download"></i> Download';
		for (let i=0; i<txtFeatures.length; i++)
			txtFeatures[i].innerHTML = "Features";
			for (let i=0; i<txtCSSWebfonts.length; i++)
				txtCSSWebfonts[i].innerHTML = "CSS webfonts";
			for (let i=0; i<txtConnectionToTheDatabase.length; i++)
				txtConnectionToTheDatabase[i].innerHTML = "connection to the database";
			txtCSV[0].innerHTML = "data is stored in CSV files";
			for (let i=0; i<txtRWDViewportUnit.length; i++)
				txtRWDViewportUnit[i].innerHTML = "Responsive Web Design: relative length - viewport unit";
			for (let i=0; i<txtSessionSupport.length; i++)
				txtSessionSupport[i].innerHTML = "session support";
			for (let i=0; i<txtCookiesSupport.length; i++)
				txtCookiesSupport[i].innerHTML = "cookies support";
			for (let i=0; i<txtMultilingualInterface.length; i++)
				txtMultilingualInterface[i].innerHTML = "multilingual user interface";
		for (let i=0; i<txtUserInterface.length; i++)
			txtUserInterface[i].innerHTML = "User interface";
		for (let i=0; i<txtSourceCode.length; i++)
			txtSourceCode[i].innerHTML = "Source code";
		for (let i=0; i<txtScreenshots.length; i++)
			txtScreenshots[i].innerHTML = "Screenshots";
		for (let i=0; i<txtAuthor.length; i++)
			txtAuthor[i].innerHTML = "Author";
		for (let i=0; i<txtLicense.length; i++)
			txtLicense[i].innerHTML = "License";
		for (let i=0; i<txtAllRightsReserved.length; i++)
			txtAllRightsReserved[i].innerHTML = "All rights reserved";

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
		'<li><i class="fa fa-check fa-li"></i>assembly and upgrading of personal computers</li>			<li><i class="fa fa-check fa-li"></i>support for operating systems: GNU Linux, Windows</li>			<li><i class="fa fa-check fa-li"></i>programming in C, C++, Java, C#</li>			<li><i class="fa fa-check fa-li"></i>creation of web sites / apllications using HTML5, CSS3, JavaScipt and PHP</li>			<li><i class="fa fa-check fa-li"></i>Microsoft Access support, knowledge of SQL, MySQL (MariaDB) administration</li>			<li><i class="fa fa-check fa-li"></i>support for the GIT version control system</li>			<li><i class="fa fa-check fa-li"></i>knowlegde of the LaTeX publishing system</li>			<li><i class="fa fa-check fa-li"></i>configuration of local computer networks</li>			<li><i class="fa fa-check fa-li"></i>English language at B2 level (upper - intermediate)</li>			<li><i class="fa fa-check fa-li"></i>category B driving licence</li>			<li><i class="fa fa-check fa-li"></i>electric pallet jacks</li>';

		document.getElementsByClassName("iconInterests")[0].innerHTML = '<i class="far fa-star"></i> Interests';
			document.getElementsByClassName("txtFootball")[0].innerHTML = 'Football';
			document.getElementsByClassName("txtBasketball")[0].innerHTML = 'Basketball';
			document.getElementsByClassName("txtBike")[0].innerHTML = 'Bike';
			document.getElementsByClassName("txtBoxing")[0].innerHTML = 'Boxing';
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
		document.getElementsByClassName("txtBorderShadows")[0].innerHTML = 'Border shadows';
		document.getElementsByClassName("txtColors")[0].innerHTML = 'Colors';
			document.getElementsByClassName("txtText")[0].innerHTML = 'Text';
			document.getElementsByClassName("txtIcons")[0].innerHTML = 'Icons';
			document.getElementsByClassName("txtHyperlinks")[0].innerHTML = 'Hyperlinks';
		document.getElementsByClassName("txtFontFamily")[0].innerHTML = 'Font family';
			document.getElementById("txtSansSerif").innerHTML = 'sans-serif';
			document.getElementById("txtSerif").innerHTML = 'serif';
			document.getElementById("txtMonospace").innerHTML = 'monospace';
			document.getElementById("txtCursive").innerHTML = 'cursive / handwriting';
		document.getElementsByClassName("txtFontSize")[0].innerHTML = 'Font size';
		document.getElementsByClassName("txtFontWeight")[0].innerHTML = 'Font weight';
		document.getElementsByClassName("txtFontProperties")[0].innerHTML = 'Font properties';
			document.getElementsByClassName("txtBold")[0].innerHTML = 'bold';
			document.getElementsByClassName("txtItalic")[0].innerHTML = 'italic';
			document.getElementsByClassName("txtSmallCaps")[0].innerHTML = 'small caps';
		document.getElementsByClassName("txtFooterPosition")[0].innerHTML = 'Footer position';
			document.getElementsByClassName("txtFixedFooter")[0].innerHTML = 'fixed - one level below the main page';
			document.getElementsByClassName("txtStaticFooter")[0].innerHTML = 'static - the same level as the main page';
		document.getElementsByClassName("txtTransformations")[0].innerHTML = 'Transformations';
			document.getElementsByClassName("txtRotate")[0].innerHTML = 'rotate';
			document.getElementsByClassName("txtSkewX")[0].innerHTML = 'skew to the X axis';
			document.getElementsByClassName("txtSkewY")[0].innerHTML = 'skew to the Y axis';
		document.getElementsByClassName("txtSources")[0].innerHTML = 'Sources';
			document.getElementsByClassName("txtIcons")[1].innerHTML = 'Icons';
			document.getElementsByClassName("txtFonts")[0].innerHTML = 'Fonts';
			document.getElementsByClassName("txtBackgrounds")[0].innerHTML = 'Backgrounds';

		// COOKIES PAGE
		///////////////
		document.getElementById("txtWhatAreCookies").innerHTML = "What are <em>cookies (HTTP cookies)</em>?";
		document.getElementById("txtWikipediaCookie").innerHTML = "An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. (...)";
		document.getElementById("linkWikipediaCookie").innerHTML = "en.wikipedia.org/wiki/HTTP_cookie";
		document.getElementById("linkWikipediaCookie").href = "https://en.wikipedia.org/wiki/HTTP_cookie";
		document.getElementById("hWhyDoWeUseCookies").innerHTML = "Why do we use cookies?";
		document.getElementById("pWhyDoWeUseCookies").innerHTML = "To remember your settings for this website.";
		document.getElementById("hWhatInformationDoWeCollect").innerHTML = "What information do we collect?";
		document.getElementById("pWhatInformationDoWeCollect").innerHTML = "Nothing special. No private information about you. Cookies are used to remember website settings, i.e. language and page layout.";
		document.getElementById("hWhenAreCookiesSaved").innerHTML = "When are cookies saved?";
		document.getElementById("pWhenAreCookiesSaved").innerHTML = 'Cookies on this website are saved when you press the "Save settings" button. You can delete all cookies from this website at any time with the "Delete all cookies" or in your browser settings.';
		document.getElementById("txtCookiesUsedOnThisWebsite").innerHTML = "Cookies used on this website";
		document.getElementById("txtSavedCookies").innerHTML = "Saved cookies";

		// FOOTER
		/////////
		document.getElementsByClassName("txtCookiesFooterInfo")[0].innerHTML = "Cookies are on this page<br>More information ";
		document.getElementsByClassName("txtHere")[0].innerHTML = "here";
		document.getElementById("txtToCreateWebsiteThereWereUsed").innerHTML = 'To create website there were used<br><a target="_blank" href="https://fontawesome.com">Fonts Awesome</a> icons and<br><a target="_blank" href="https://fonts.google.com/specimen/Quicksand">Quicksand</a> font';
		//document.getElementById("txtAlternatives").innerHTML = 'Go to the bright side of the force';



	} else if (language == "pl") {

		// MENU AND HEADERS
		///////////////////
		english.style.display = "block";
		polish.style.display = "none";
		for (let i=0; i<txtHome.length; i++)
			txtHome[i].innerHTML = 'Strona główna';
		for (let i=0; i<txtProjects.length; i++)
			txtProjects[i].innerHTML = 'Projekty';
		txtCv[0].innerHTML = "CV";
		for (let i=0; i<txtContact.length; i++)
			txtContact[i].innerHTML = 'Kontakt';
		for (let i=0; i<txtPhotography.length; i++)
			txtPhotography[i].innerHTML = 'Fotografia';
		for (let i=0; i<txtSettings.length; i++)
			txtSettings[i].innerHTML = 'Ustawienia';
		for (let i=0; i<txtCookies.length; i++)
			txtCookies[i].innerHTML = 'Ciasteczka';

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
		for (let i=0; i<12; i++)
			monthAbbreviation[i] = monthNames[i].substr(0,3);

		// HOME PAGE
		/////////////

		for (let i=0; i<txtExamples.length; i++)
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
		document.getElementsByClassName("txtView")[0].innerHTML = "Widok";
			document.getElementsByClassName("txtTable")[0].innerHTML = "Tabela";
			document.getElementsByClassName("txtList")[0].innerHTML = "Lista";
			document.getElementsByClassName("txtGrid")[0].innerHTML = "Siatka";
		document.getElementsByClassName("txtSortBy")[0].innerHTML = "Sortuj wg";
		for (let i=0; i<txtIcon.length; i++)
			txtIcon[i].innerHTML = "Ikona";
		for (let i=0; i<txtName.length; i++)
			txtName[i].innerHTML = "Nazwa";
			for (let i=0; i<txtTicTacToe.length; i++)
				txtTicTacToe[i].innerHTML = "Kółko i krzyżyk";
		for (let i=0; i<txtTechnologies.length; i++)
			txtTechnologies[i].innerHTML = "Technologie";
		for (let i=0; i<txtProjectWebsite.length; i++)
			txtProjectWebsite[i].innerHTML = "Strona internetowa projektu";
		for (let i=0; i<txtDocumentationSourceCode.length; i++)
			txtDocumentationSourceCode[i].innerHTML = "Dokumentacja & kod źródłowy";
		for (let i=0; i<txtRequirements.length; i++)
			txtRequirements[i].innerHTML = "Wymagania";
			for (let i=0; i<txtWebBrowser.length; i++)
				txtWebBrowser[i].innerHTML = "Przeglądarka internetowa";
			for (let i=0; i<txtPdfReader.length; i++)
				txtPdfReader[i].innerHTML = "czytnik PDF";
		for (let i=0; i<txtLanguage.length; i++)
			txtLanguage[i].innerHTML = "Język";
			for (let i=0; i<txtEnglish.length; i++)
				txtEnglish[i].innerHTML = "angielski";
			for (let i=0; i<txtPolish.length; i++)
				txtPolish[i].innerHTML = "polski";
			for (let i=0; i<txtEnglishPolish.length; i++)
				txtEnglishPolish[i].innerHTML = "angielski / polski";
		for (let i=0; i<txtCreationPeriod.length; i++)
			txtCreationPeriod[i].innerHTML = "Okres tworzenia";
		for (let i=0; i<txtInitiate.length; i++)
			txtInitiate[i].innerHTML = "Początek";
		for (let i=0; i<txtUpdate.length; i++)
			txtUpdate[i].innerHTML = "Aktualizacja";
		for (let i=0; i<txtProgress.length; i++)
			txtProgress[i].innerHTML = "Postęp";
		for (let i=0; i<txtStatus.length; i++)
			txtStatus[i].innerHTML = "Stan";
			for (let i=0; i<txtFinished.length; i++)
				txtFinished[i].innerHTML = "ukończony";
			for (let i=0; i<txtDeveloped.length; i++)
				txtDeveloped[i].innerHTML = "rozwijany";
			for (let i=0; i<txtAbandoned.length; i++)
				txtAbandoned[i].innerHTML = "porzucony";
			// for (let i=0; i<txtFinished.length; i++)
			// 	txtFinished[i].innerHTML = '<i class="fa fa-check fa-fw"></i> ukończony';
			// for (let i=0; i<txtDeveloped.length; i++)
			// 	txtDeveloped[i].innerHTML = '<i class="fa fa-code fa-fw"></i> rozwijany';
			// for (let i=0; i<txtAbandoned.length; i++)
			// 	txtAbandoned[i].innerHTML = '<i class="fa fa-times fa-fw"></i> porzucony';
		for (let i=0; i<iconDownload.length; i++)
			iconDownload[i].innerHTML = '<i class="fa fa-download"></i> Pobierz';
		for (let i=0; i<txtFeatures.length; i++)
			txtFeatures[i].innerHTML = "Cechy & właściwości";
			for (let i=0; i<txtCSSWebfonts.length; i++)
				txtCSSWebfonts[i].innerHTML = "Czcionki internetowe CSS";
			for (let i=0; i<txtConnectionToTheDatabase.length; i++)
				txtConnectionToTheDatabase[i].innerHTML = "łączenie się z bazą danych";
			txtCSV[0].innerHTML = "dane przechowywane są w plikach CSV";
			for (let i=0; i<txtRWDViewportUnit.length; i++)
				txtRWDViewportUnit[i].innerHTML = "Responsywny układ strony: względna długość - jednostka zależna od rozmiarów okna przeglądarki";
			for (let i=0; i<txtCookiesSupport.length; i++)
				txtCookiesSupport[i].innerHTML = "obsługa ciasteczek (cookies)";
			for (let i=0; i<txtSessionSupport.length; i++)
				txtSessionSupport[i].innerHTML = "obsługa sesji";
			for (let i=0; i<txtMultilingualInterface.length; i++)
				txtMultilingualInterface[i].innerHTML = "wielojęzyczny interfejs użytkownika";
		for (let i=0; i<txtUserInterface.length; i++)
			txtUserInterface[i].innerHTML = "Interfejs użytkownika";
		for (let i=0; i<txtSourceCode.length; i++)
			txtSourceCode[i].innerHTML = "Kod żródłowy";
		for (let i=0; i<txtScreenshots.length; i++)
			txtScreenshots[i].innerHTML = "Screenshot'y";
		for (let i=0; i<txtAuthor.length; i++)
			txtAuthor[i].innerHTML = "Autor";
		for (let i=0; i<txtLicense.length; i++)
			txtLicense[i].innerHTML = "Licencja";
		for (let i=0; i<txtAllRightsReserved.length; i++)
			txtAllRightsReserved[i].innerHTML = "Wszystkie prawa zastrzeżone";

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
			document.getElementsByClassName("txtBike")[0].innerHTML = 'Rower';
			document.getElementsByClassName("txtBoxing")[0].innerHTML = 'Boks';
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
		document.getElementsByClassName("txtBorderShadows")[0].innerHTML = 'Cienie obramowania';
		document.getElementsByClassName("txtColors")[0].innerHTML = 'Kolory';
			document.getElementsByClassName("txtText")[0].innerHTML = 'Tekst';
			document.getElementsByClassName("txtIcons")[0].innerHTML = 'Ikony';
			document.getElementsByClassName("txtHyperlinks")[0].innerHTML = 'Odnośniki';
		document.getElementsByClassName("txtFontFamily")[0].innerHTML = 'Krój czcionki';
			document.getElementById("txtSansSerif").innerHTML = 'bezszeryfowe';
			document.getElementById("txtSerif").innerHTML = 'szeryfowe';
			document.getElementById("txtMonospace").innerHTML = 'o stałej szerokości znaku (maszynowe)';
			document.getElementById("txtCursive").innerHTML = 'odręczne';
		document.getElementsByClassName("txtFontSize")[0].innerHTML = 'Wielkość czcionki';
		document.getElementsByClassName("txtFontWeight")[0].innerHTML = 'Grubość czcionki';
		document.getElementsByClassName("txtFontProperties")[0].innerHTML = 'Właściwości czcionki';
			document.getElementsByClassName("txtBold")[0].innerHTML = 'pogrubienie';
			document.getElementsByClassName("txtItalic")[0].innerHTML = 'kursywa';
			document.getElementsByClassName("txtSmallCaps")[0].innerHTML = 'kapitaliki';
		document.getElementsByClassName("txtFooterPosition")[0].innerHTML = 'Położenie stopki';
			document.getElementsByClassName("txtFixedFooter")[0].innerHTML = 'nieruchomy - jeden poziom poniżej strony głównej';
			document.getElementsByClassName("txtStaticFooter")[0].innerHTML = 'statyczny - ten sam poziom co strona główna';
		document.getElementsByClassName("txtTransformations")[0].innerHTML = 'Przekształcenia';
			document.getElementsByClassName("txtRotate")[0].innerHTML = 'obrócony';
			document.getElementsByClassName("txtSkewX")[0].innerHTML = 'ukośny względem osi X';
			document.getElementsByClassName("txtSkewY")[0].innerHTML = 'ukośny względem osi Y';
		document.getElementsByClassName("txtSources")[0].innerHTML = 'Źródła';
			document.getElementsByClassName("txtIcons")[1].innerHTML = 'Ikony';
			document.getElementsByClassName("txtFonts")[0].innerHTML = 'Czcionki';
			document.getElementsByClassName("txtBackgrounds")[0].innerHTML = 'Tła';

		// COOKIES PAGE
		///////////////
		document.getElementById("txtWhatAreCookies").innerHTML = "Czym są <em>ciasteczka (HTTP cookies)</em>?";
		document.getElementById("txtWikipediaCookie").innerHTML = "HTTP Cookie (tłumaczone czasem jako plik cookie, w skrócie cookie, również ciasteczko) – mały fragment tekstu, który serwis internetowy wysyła do przeglądarki i który przeglądarka wysyła z powrotem przy następnych wejściach na witrynę. (...)";
		document.getElementById("linkWikipediaCookie").innerHTML = "pl.wikipedia.org/wiki/HTTP_cookie";
		document.getElementById("linkWikipediaCookie").href = "https://pl.wikipedia.org/wiki/HTTP_cookie";
		document.getElementById("hWhyDoWeUseCookies").innerHTML = "Dlaczego korzystamy z ciasteczek?";
		document.getElementById("pWhyDoWeUseCookies").innerHTML = "Aby zapamiętać ustawienia tej strony internetowej.";
		document.getElementById("hWhatInformationDoWeCollect").innerHTML = "Jakie informacje zbieramy?";
		document.getElementById("pWhatInformationDoWeCollect").innerHTML = "Nic szczególnego. Żadnych prywatnych informacji o Tobie. Ciasteczka służą do zapamiętania ustawień strony, tj. język oraz wygląd strony.";
		document.getElementById("hWhenAreCookiesSaved").innerHTML = "Kiedy zapisywane są pliki cookie?";
		document.getElementById("pWhenAreCookiesSaved").innerHTML = 'Pliki cookie są zapisywane po naciśnięciu przycisku „Zapisz ustawienia”. Możesz usunąć wszystkie pliki cookie w dowolnym momencie za pomocą „Usuń ciasteczka” lub w ustawieniach przeglądarki.';
		document.getElementById("txtCookiesUsedOnThisWebsite").innerHTML = "Ciasteczka używane na tej stronie";
		document.getElementById("txtSavedCookies").innerHTML = "Zapisane ciasteczka";

		// FOOTER
		/////////
		document.getElementsByClassName("txtCookiesFooterInfo")[0].innerHTML = "Na tej stronie grasują ciasteczka (cookies)<br>Więcej informacji ";
		document.getElementsByClassName("txtHere")[0].innerHTML = "tutaj";
		document.getElementById("txtToCreateWebsiteThereWereUsed").innerHTML = 'Do stworzenia strony wykorzystano<br>ikony <a target="_blank" href="https://fontawesome.com">Font Awesome</a> oraz<br>czcionkę <a target="_blank" href="https://fonts.google.com/specimen/Quicksand">Quicksand</a>';
		//document.getElementById("txtAlternatives").innerHTML = 'Przejdź na jasną stronę mocy.';
	}
}