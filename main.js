'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

//--------- NAVBAR TOGGLE FOR MOBILE---------//
 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 *FAQS
 */

 document.querySelectorAll(".faq-question").forEach(item => {
  item.addEventListener("click", () => {
      let answer = item.nextElementSibling;
      let icon = item.querySelector("i");
      
      if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.classList.replace("fa-angle-down", "fa-angle-right");
      } else {
          document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
          document.querySelectorAll(".faq-question i").forEach(ic => ic.classList.replace("fa-angle-down", "fa-angle-right"));
          
          answer.style.display = "block";
          icon.classList.replace("fa-angle-right", "fa-angle-down");
      }
  });
});

/**
 *EXPERINCE
 */

 document.addEventListener("DOMContentLoaded", function () {
  let progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
      let targetPercent = bar.getAttribute("aria-valuenow");
      let currentPercent = 0;
      let interval = setInterval(() => {
          if (currentPercent >= targetPercent) {
              clearInterval(interval);
          } else {
              currentPercent++;
              bar.style.width = currentPercent + "%";
              bar.parentElement.previousElementSibling.querySelector("p:last-child").textContent = currentPercent + "%";
          }
      }, 20); // Speed of animation
  });
});