/* The main logic controller for the application which
   imports from additional modules/libraries as needed
*/
document.getElementById('searchBtn').addEventListener('click', function() {
  
   let artistName = document.getElementById('artistNameInput').value
   let songName = document.getElementById('songNameInput').value
   console.log('Artist Name:', artistName);
   console.log('Song Name:', songName);

   const newSongInfo = {
      artistName,
      songName,
   };

   let firstSongInfo = JSON.parse(localStorage.getItem('songData')) || [];
   firstSongInfo.push(newSongInfo);
  
   localStorage.setItem('songData', JSON.stringify(firstSongInfo));

   
});






/* make use of the record start/stop from the audio library */
import { recordStart, recordStop } from "./audio.js";
