/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var movies = [
    [
        "Star Wars: Revenge of the Sith",
        "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20171214071623",
        4.998,
        "Anakin Skywalker turns to the dark side and becomes Darth Vader"
    ],
    [
        "A Silent Voice",
        "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
        4,
        "A young boy meets the deaf girl he used to bully and learns to live life."
    ],
    [
        "Everything, Everywhere, All at Once",
        "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
        4.75,
        "Evelyn Wang, a stressed-out Chinese-American immigrant who owns a failing laundromat, faces an audit by the IRS, and struggles with her relationship with her meek husband Waymond, her demanding father Gong Gong, and her estranged daughter Joy."
    ]
];