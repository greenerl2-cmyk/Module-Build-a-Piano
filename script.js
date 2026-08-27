const keys = document.querySelectorAll('.key');

//Listeners
// add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

//--Handlers--//

function playNote (key){
    const noteAudio = document.getElementById(key.dataset.note);
    console.log(noteAudio);
    noteAudio.play();
}