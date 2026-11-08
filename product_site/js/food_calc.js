// Nehemiah Speaks 10/31/26
// This is my food calculation javascript file. Here is where I calculate the percent chance
// of a user and their friends/family agreeing on where to eat, using javascript and DOM methods

// Variable initialization
var userName
var numbersOnForm
var numPeople
var numRestaurants
var agreePercent
var form
var finalCalculation

// I asked Copilot here on how to get the information from the form after the user
// clicks the calculate button
form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
    // stops page from reloding/redirecting after hitting calculate
    event.preventDefault();

    // get the users name
    userName = document.getElementById("user-name").value;

    // get the number of people and restaurants and convert them into ints
    numbersOnForm = document.getElementsByClassName("numbers");
    numPeople = numbersOnForm[0].value;
    numRestaurants = numbersOnForm[1].value;

    numPeople = Number(numPeople);
    numRestaurants = Number(numRestaurants);

    // calculate the chance for everyone agreeing and round to two decimal places
    agreePercent = (numPeople / numRestaurants) * 100;
    agreePercent = agreePercent.toFixed(2);

    // update the text at the bottom of the section to list the users chance
    finalCalculation = document.querySelector(".food_percent");
    finalCalculation.textContent = userName + "'s chance of everyone agreeing on a restaurant: ";
    finalCalculation.innerHTML += "<strong>" + agreePercent + "%</strong> \n";

    // check the agreePercent and if its 30% or less, say it will be hard to agree
    if (agreePercent <= 30) {
        finalCalculation.innerHTML += "You're going to have a REALLY HARD time trying to get everyone to agree..."
    }
    // if agreePercent is between 80% and 30%, say it will be a little hard
    else if (agreePercent < 80 && agreePercent >= 30){
        finalCalculation.innerHTML += "It might be a <em>little difficult</em> to get everyone to agree."
    }
    // if agreePercent is 80% of greater, say it will be easy to agree
    else if (agreePercent >= 80){
        finalCalculation.innerHTML += "It should be pretty easy for everyone to agree!"
    }
})
