/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

	var movies = ["Star Wars: Revenge of the Sith", "A Silent Voice", "Everything, Everywhere, All at Once"];
	var moviePosters = ["https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20171214071623", "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original", "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"]
	var htmlMovies = ["revengeOfTheSith.html", "aSilentVoice.html", "everythingEverywhereAllAtOnce.html"];
	var ratings = [4.9998, 4, 4.75];

/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/

	var movieCards = document.querySelectorAll('div.movie-card');
	
	for (var i = 0; i < movieCards.length; i++){
		var movieName = movies[i];
		var rate = ratings[i];
		var html = htmlMovies[i];
		var poster = moviePosters[i];
		var filled = "★";
		var empty = "☆";
		var ratingString = "";

		movieCards[i].innerHTML = '<a href="'+ html +'" class="movie-link">'+ movieName +'</a>'
		movieCards[i].innerHTML += '<img class="movie-image" src="' + poster + '" alt="' + movieName + '">';
		
		for (var j = 0; j < 5; j++) {
			if (j < rate) {
				ratingString += filled;
			}
			else {
				ratingString += empty;
			}
		}

		movieCards[i].innerHTML += '<div class="rating">'+ ratingString +'</div>'
	}

