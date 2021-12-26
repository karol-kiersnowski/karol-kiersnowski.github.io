// DEFAULT SETTINGS
const LANGUAGE = "en";
const MENU_WIDTH = "wide";
const MENU_LOCATION = "left";
const FOREGROUND_THEME = "white";
const BACKGROUND_THEME = "default";
const BOX_SHADOW = "5px";
const TEXT_COLOR = "#000000";
const ICON_COLOR = "#113366";
const HYPERLINK_COLOR = "#113366";
const FONT_FAMILY = "Quicksand";
const FONT_SIZE = "16px";
const FONT_WEIGHT = 400;
const FONT_STYLE = "normal";
const FONT_VARIANT = "normal";
const FOOTER_POSITION = "sticky";
const ROTATE = 0;
const SKEW_X = 0;
const SKEW_Y = 0;

// CURRENT SETTINGS
let language = undefined;
let menuWidth = undefined;
let menuLocation = undefined;
let foregroundTheme = undefined;
let backgroundTheme = undefined;
let boxShadow = undefined;
let textColor = undefined;
let iconColor = undefined;
let hyperlinkColor = undefined;
let fontFamily = undefined;
let fontSize = undefined;
let fontWeight = undefined;
let fontStyle = undefined;
let fontVariant = undefined;
let footerPosition = undefined;
let rotate = undefined;
let skewX = undefined;
let skewY = undefined;

// NAV
let nav = document.getElementsByTagName("nav");
let main = document.getElementsByTagName("main")[0];
let bigCalendar = document.getElementById("big-calendar");
let smallCalendar = document.getElementById("small-calendar");

// LANGUAGE
let daysOfWeek = new Array(7);
let monthNames = new Array(12);
let monthAbbreviation = new Array(12);

// CALENDAR
let year = new Date().getFullYear();
let month = new Date().getMonth();

// PROJECTS
let projectSelect = document.getElementById("project-select");
let projectContainer = document.getElementsByClassName("project-container")[0];

// COOKIES
let tdLanguage = document.getElementsByClassName("tdLanguage");
let tdMenuWidth = document.getElementsByClassName("tdMenuWidth");
let tdMenuLocation = document.getElementsByClassName("tdMenuLocation");
let tdForegroundTheme = document.getElementsByClassName("tdForegroundTheme");
let tdBackgroundTheme = document.getElementsByClassName("tdBackgroundTheme");
let tdBoxShadow = document.getElementsByClassName("tdBoxShadow");
let tdTextColor = document.getElementsByClassName("tdTextColor");
let tdIconColor = document.getElementsByClassName("tdIconColor");
let tdHyperlinkColor = document.getElementsByClassName("tdHyperlinkColor");
let tdFontFamily = document.getElementsByClassName("tdFontFamily");
let tdFontSize = document.getElementsByClassName("tdFontSize");
let tdFontWeight = document.getElementsByClassName("tdFontWeight");
let tdFontStyle = document.getElementsByClassName("tdFontStyle");
let tdFontVariant = document.getElementsByClassName("tdFontVariant");
let tdFooterPosition = document.getElementsByClassName("tdFooterPosition");
let tdRotate = document.getElementsByClassName("tdRotate");
let tdSkewX = document.getElementsByClassName("tdSkewX");
let tdSkewY = document.getElementsByClassName("tdSkewY");

// FUNCTIONS
/*
function getCookie(Name);
function setCookie(name, value);
function isSetCookie(name);
function changeMenuWidth();
function setMenuWidth(menuWidth);
function saveSettings();
function loadSettings();
function displayCookies();
function restoreDefaultSettings();
function setMenuLocation(MenuLocation);
function setForegroundTheme(ForegroundTheme);
function setBackgroundTheme(BackgroundTheme);
function setBoxShadow(BoxShadow);
function setTextColor(TextColor);
function setIconColor(IconColor);
function setHyperlinkColor(HyperlinkColor);
function setFontFamily(FontFamily);
function setFontSize(FontSize);
function setFontWeight(FontWeight);
function setFontWeightByCheckbox(bold);
function setFontStyle(italic);
function setFontVariant(smallCaps);
function setFooterPosition(FooterPosition);
function transform();
function resetTransformations();
*/