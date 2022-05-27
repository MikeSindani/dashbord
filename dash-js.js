var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var wrapper = document.querySelector(".wrapper");
var button = document.querySelector(".button");
var tabButton = document.querySelector(".tabButton");

function buttonFunction(event){
  event.preventDefault();
  tabButton.style.display="none";
  modal.classList.add("is-active");
  button.classList.add("button-modal-showing");
  overlay.classList.add("overlay-modal-showing");
}

function overlayFunction(event){
  event.preventDefault();
  event.stopImmediatePropagation();
  tabButton.style.display="block";
  modal.classList.remove("is-active");
  overlay.classList.remove("overlay-modal-showing");
  button.classList.remove("button-modal-showing");
};
/* for tab fonctionement */ 
function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.border = "";
    }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = '4px solid black';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();