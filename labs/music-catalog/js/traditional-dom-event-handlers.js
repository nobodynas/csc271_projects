// Get all record cards
var record_cards = document.querySelectorAll('.record-card');

// Get the records in the second row 
var record_card2 = record_cards[1];
var record_card3 = record_cards[2];

// Get the close button of the Spotify embedded player
var close_btn = document.getElementById('close-player');

record_card2.onclick = function (){
   // Get the Spotify track id of the song saved as its attribute
   var track_id = record_card2.getAttribute('data-track-id');
         
   // Get the iframe element that contains the Spotify embedded player
   var player_iframe = document.getElementById('spotify-player');
         
   // Update the iframe source to the clicked track
   player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;
         
   // Show and animate the player
   document.getElementById('spotify-player-container').classList.add('visible');
};

record_card3.onclick = function (){
   // Get the Spotify track id of the song saved as its attribute
   var track_id = record_card3.getAttribute('data-track-id');
         
   // Get the iframe element that contains the Spotify embedded player
   var player_iframe = document.getElementById('spotify-player');
         
   // Update the iframe source to the clicked track
   player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;
         
   // Show and animate the player
   document.getElementById('spotify-player-container').classList.add('visible');
};

close_btn.onclick = function (){
   // Close the Spotify embedded player by changing its visibility 
   document.getElementById('spotify-player-container').classList.remove('visible');
};
/* 
  TO DO: 
  
      1) Use traditional DOM event handlers to do the following when the second and third records are clicked:
 
         // Get the Spotify track id of the song saved as its attribute
         var track_id = record_card2.getAttribute('data-track-id');
         
         // Get the iframe element that contains the Spotify embedded player
         var player_iframe = document.getElementById('spotify-player');
         
         // Update the iframe source to the clicked track
         player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;
         
         // Show and animate the player
         document.getElementById('spotify-player-container').classList.add('visible');          
      
      
      2) Use a traditional DOM event handler to do the following when the close button of the Spotify embedded player is clicked:

         // Close the Spotify embedded player by changing its visibility 
         document.getElementById('spotify-player-container').classList.remove('visible');
      
*/

