
// Hamburger Menu
const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", function () {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

window.addEventListener(
  "resize",
  function () {
    if (document.body.clientWidth > 720) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);


function msgButton(){
  window.location.href="https://api.whatsapp.com/send?phone=919744770070&text=Hello,%20I%20have%20an%20enquiry";
}

function callButton(){
  window.location.href="tel:+919744770070";
}
function social(){
  window.location.href="https://www.instagram.com/simple_distributors";
}


function showmore(){
  document.getElementById('showmore').style.display = "block";

  document.getElementById('showmore-img-but').style.display = "none";
}