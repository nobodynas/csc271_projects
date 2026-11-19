// Nehemiah Speaks 11/19/26
// this is my script that uses event listeners to display a successful submit message
// to the user after they submit their questions on how to use the app

// variable initialization
var form = document.getElementById("question-form");
var email = document.getElementById("email");
var question = document.getElementById("user-questions");
var emailFeedback = document.getElementById("email-feedback");
var questionFeedback = document.getElementById("question-feedback");

// focus function for email, after clicking on the text field it displays this message
email.addEventListener("focus", function () {
    emailFeedback.textContent = "Enter an email address in the format name@example.com.";
});

// blur function for email
email.addEventListener("blur", function () {
    
    // after clicking off the text field, if its empty tell the user it cant be blank
    if (email.value.trim() == "") {
        emailFeedback.textContent = "Email cannot be blank.";
    }
    // also check if the email is actually valid, and let the user know if it isn't
    else if (!email.checkValidity()) {
        emailFeedback.textContent = "Enter a valid email address.";
    }
    // if everything is good, dont display anything
    else {
        emailFeedback.textContent = "";
    }
});

// focus function for the users questions, after clicking on the text area it displays this message
question.addEventListener("focus", function () {
    questionFeedback.textContent = "Enter a question. Maximum length: 250 characters.";
});

// blur function for the users questions
question.addEventListener("blur", function () {

    // if the text area is empty or has the default text after clicking off of it,
    // tell the user to ask a question
    if (question.value.trim() == "" || question.value.trim() == "Enter questions here...") {
        questionFeedback.textContent = "Please enter a question.";
    }
    // if everything is good just leave it blank
    else {
        questionFeedback.textContent = "";
    }
});

// event listener for submitting a form
form.addEventListener("submit", function(event) {
    // stops page from reloding/redirecting after hitting submit
    event.preventDefault();

    // if the form isn't valid, give an error popup
    if (!form.checkValidity()) {
        alert("Please correct the highlighted form fields.");
        return;
    }

    // successful alert popup if everything was ok
    alert("Your question(s) were succesfully submitted! We will get back to you as soon as possible. 🙏");
});