// JavaScript Document
console.log("hi");

// open menu button
var menuButton = document.querySelector("header nav:nth-child(1) ul+ul button");
var navigatie = document.querySelector("header nav+nav")
menuButton.onclick = toonMenu;



// reduce motion button
var reduceButton = document.querySelector("nav ul:nth-child(2) li:nth-child(3) button");
var bodychange = document.querySelector("body")
reduceButton.onclick = reduceMotion;
// High contrast button
var contrastButton = document.querySelector("nav ul:nth-child(2) li:nth-child(2) button");
var contrastChange = document.querySelector("body")
contrastButton.onclick = highContrastMode;

function toonMenu() {
navigatie.classList.add("toonMenu")
console.log("menu werkt")
}

function reduceMotion() {
bodychange.classList.toggle("reduceMotion")
console.log("reducemotion werkt")
}

function highContrastMode(){
contrastChange.classList.toggle("highContrastMode")
console.log("contrast is verandered")
}

// sluit menu
var sluitButton = document.querySelector("header nav+nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
    navigatie.classList.remove("toonMenu");
    console.log("het menu is gesloten");
}