var toggleNav = document.getElementById("toggleNav");
let toggleNavStatus = false;

toggleNav.addEventListener("click", function () {
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");

  if (toggleNavStatus === false) {
    getToggleMenuUl.style.visibility = "visible";
    getToggleMenu.style.width = "272px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

var blueClick = document.getElementById("blue");
var redClick = document.getElementById("red");
var greenClick = document.getElementById("green");
var yellowClick = document.getElementById("yellow");
var purpleClick = document.getElementById("purple");

blueClick.addEventListener("click", function () {
  document.body.classList.toggle("blueClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

redClick.addEventListener("click", function () {
  document.body.classList.toggle("redClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

greenClick.addEventListener("click", function () {
  document.body.classList.toggle("greenClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

yellowClick.addEventListener("click", function () {
  document.body.classList.toggle("yellowClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

purpleClick.addEventListener("click", function () {
  document.body.classList.toggle("purpleClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }

    toggleNavStatus = false;
  }
});
