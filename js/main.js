// the current year
const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();


// navigation menu animataion
function myFunction(menu) {
  menu.classList.toggle("change");
}


// dropdown menu
/*
function myFunction() {
  document.getElementById("jsDropdown").classList.toggle("jsShow");
}

window.onclick = function (event) {
  if (!event.target.matches(".navButton")) {
    let dropdowns = document.getElementsByClassName("navMenu");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("jsShow")) {
        openDropdown.classList.remove("jsShow");
      }
    }
  }
}
*/


// nav menu
function openNav() {
  document.getElementById("jsSideNav").style.width = "350px";
  document.getElementById("jsMain").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("jsSideNav").style.width = "0";
  document.getElementById("jsMain").style.marginLeft = "0";
}
// nav menu


// mobile nav menu
function menuOpen() {
  document.getElementById("jsNav").style.height = "100%";
}

function menuClose() {
  document.getElementById("jsNav").style.height = "0%";
}
// / mobile nav menu


// don't know
// document.getElementsByClassName("menu").style.
// / don't know


// const border = "";
// setInterval(myTimer, 2.5);

// function mytimer() {
//   switch () {
//     case purple:
//       document.getElementById(border).style.border = "dotted 10px rgba(255,200,100,1)";
//   }
  // const random = Math.random()
  // const time = 
// }
