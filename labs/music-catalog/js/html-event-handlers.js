/* 
  TO DO: 
  
      1) Create a function that accepts a Spotify track ID as an argument and contains the following code:
 
         // Get the iframe element that contains the Spotify embedded player
         var player_iframe = document.getElementById('spotify-player');
         
         // Update the iframe source to the clicked track
         player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;
         
         // Show and animate the player
         document.getElementById('spotify-player-container').classList.add('visible');          
      
      2) Use an HTML event handler attribute on the top record (single) to call this function when clicked. 
      
      3) Create a basic function (no parameters or return) that contains the following code:

         // Close the Spotify embedded player by changing its visibility 
         document.getElementById('spotify-player-container').classList.remove('visible');

      4) Use an HTML event handler attribute on the close button of the Spotify embedded player to call this function when clicked. 
      
*/

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