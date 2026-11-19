function playTrack(track_id){
   // Get the iframe element that contains the Spotify embedded player
   var player_iframe = document.getElementById('spotify-player');
         
   // Update the iframe source to the clicked track
   player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;
         
   // Show and animate the player
   document.getElementById('spotify-player-container').classList.add('visible');
}

function stopTrack(){
   // Close the Spotify embedded player by changing its visibility 
   document.getElementById('spotify-player-container').classList.remove('visible');
}

// Get all record cards
var record_cards = document.querySelectorAll('.record-card');

// Get the close button of the Spotify embedded player
var close_btn = document.getElementById('close-player');

for(var i = 3; i < record_cards.length; i++){
   record_cards[i].addEventListener('click', function (){
      var track_id = this.getAttribute('data-track-id');
      playTrack(track_id);
   }, false);
}

close_btn.addEventListener('click', stopTrack, false);

/* 
  TO DO: 
  
      1) Copy and paste BOTH functions you wrote back in the html-event-handlers.js script.

      2) Loop through all records in the third row. For each record, do the following:
         a) Add an event listener so that when clicked: 
            Get its Spotify track ID saved as its attribute.
            Pass this ID as an argument to the appropriate function to update the track of the player. 
      
      3) Add an event listener to the close button so that when clicked it calls the appropriate function
         to close the Spotify embedded player. 
      
*/
