const keys = document.querySelectorAll(".key");


//add an event listener to all keys
keys.forEach((key)=> {
  key.addEventListener('click', () => playNote(key));

});


//handlers
function playNote(key){
  //Get the notes value
    const noteAudio = document.getElementById(key.dataset.note);
    
    //Reset the note's current time to 0
    noteAudio.currentTime = 0;
    //Play the note
    noteAudio.play();

//add a class, active, for styling purposes
key.classList.add("active");
}