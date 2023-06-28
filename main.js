let scrollbtn = document.querySelector(".scroll-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > 800) {
        scrollbtn.style.display = "inherit";
    } else {
        scrollbtn.style.display = "none";
    }
  }

