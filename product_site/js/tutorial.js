// Nehemiah Speaks 11/8/26
// this is my tutorial generation script. I also made my decision tree at the bottom of the food_calc.js file.
// This script will load in each step of the tutorial on the "how to use page" with a loop

var tutorialImage = [
    "images/step1.jpg",
    "images/step2.jpg",
    "images/step3.jpg",
    "images/step4.jpg"
]

var tutorialAltText = [
    "Shows the user sign up screen with an email and password, followed by a continue button",
    "Shows the user profile screen where you can select various eating options and dietary restrictions that apply to someone",
    "Shows the family/group screen where you add your created profiles into a group and are able to click the DECIDE EATZ button to help pick a dish/restaurant",
    "Shows the results page after clicking DECIDE EATZ. Choose from various meals or restaurants that will please everyone."
]

var tutorialDesc = [
    "Make sure to sign up for an account with an email and password!",
    "Next, make a profile for yourself, selecting your eating preferneces and dietary restrictions.",
    "Now, make profiles for people you want to use the app with (friends/family), and create a group and name it. Then press the 'DECIDE EATZ' button.",
    "Finally, look through recipes/restaurants that cater to all the people in your group and enjoy a meal together!"
]

// selects the four images in the second row of the table
var imagesOnPage = document.querySelectorAll("#tutorial-image-table tr:nth-child(2) img");

// selects the four description cells in the third row of the table
var descOnPage = document.querySelectorAll("#tutorial-image-table tr:nth-child(3) td");

// loops through the images in the table and adds the correct image and alt text for each
// I chose a FOR loop because it makes it pretty easy to update items in a linear order with indexing
for (var i = 0; i < imagesOnPage.length; i++) {
    imagesOnPage[i].src = tutorialImage[i];
    imagesOnPage[i].alt = tutorialAltText[i];
}

// updates the descriptions in the table until it has seen all of them
// I chose a WHILE loop because it continues to loop on a specific condition
var descSeen = 0;
while (descSeen <= 4){
    descOnPage[descSeen].textContent = tutorialDesc[descSeen];
    descSeen += 1;
}
