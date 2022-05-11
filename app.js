const username = document.getElementById("uname");
const usernameError = document.querySelector("#uname + span.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const phone = document.getElementById("phone");
const phoneError = document.querySelector("#phone + span.error");

const comment = document.getElementById("comment");
const commentError = document.querySelector("#comment + span.error");

const form = document.getElementsByTagName("form");

username.addEventListener("input", function (event) {
  if (username.validity.valid) {
    usernameError.textContent = "";
    usernameError.className = "error";
  } else {
    showError();
  }
});

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});
phone.addEventListener("input", function (event) {
  if (phone.validity.valid) {
    phoneError.textContent = "";
    phoneError.className = "error";
  } else {
    showError();
  }
});
comment.addEventListener("input", function (event) {
  if (comment.validity.valid) {
    commentError.textContent = "";
    commentError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (!username.validity.valid) {
    showError();
    event.preventDefault();
  }
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
  if (!phone.validity.valid) {
    showError();
    event.preventDefault();
  }
  if (!comment.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to reach requirements";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  if (phone.validity.valueMissing) {
    phoneError.textContent = "You need to enter an phone number.";
  } else if (email.validity.typeMismatch) {
    phoneError.textContent = "Entered value needs to reach requirements";
  } else if (phone.validity.tooShort) {
    phoneError.textContent = `Phone Number should be at least ${phone.minLength} characters; you entered ${phone.value.length}.`;
  }

  if (comment.validity.valueMissing) {
    commentError.textContent = "Please leave a comment.";
  } else if (email.validity.typeMismatch) {
    commentError.textContent = "Enter at least 25 characters";
  } else if (phone.validity.tooShort) {
    commentError.textContent = `Comment should be at least ${comment.minLength} characters; you entered ${comment.value.length}.`;
  }

  if (username.validity.valueMissing) {
    usernameError.textContent = "You need to enter an username.";
  } else if (username.validity.typeMismatch) {
    usernameError.textContent = "Entered value needs to reach requirements";
  } else if (username.validity.tooShort) {
    usernameError.textContent = `Username should be at least ${username.minLength} characters; you entered ${username.value.length}.`;
  }
  usernameError.className = "error active";
  emailError.className = "error active";
  phoneError.className = "error active";
  commentError.className = "error active";
}
