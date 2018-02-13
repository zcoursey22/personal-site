function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["_replyto"].value;
  var message = document.forms["contactForm"]["message"].value;

  if (!name || !email || !message) {
    if (!name) document.querySelector(".name").style.background = "#fbb";
    if (!email) document.querySelector(".email").style.background = "#fbb";
    if (!message) document.querySelector(".message").style.background = "#fbb";
    return false;
  }
}

function turnWhite(e) {
  e.style.background = "white";
}
