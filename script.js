// create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// For each sound, create a button, add a class "btn", update text of the button, append to DOM
sounds.forEach((sound) => {

    // create a button for each sound in sounds
    const btn = document.createElement('button');

    // add a class of "btn" to each button element
    btn.classList.add('btn');

    // add text to each button
    btn.innerText = sound;

    // add event listener to each button
    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    });
    // add each button to the DOM
    document.getElementById('buttons').appendChild(btn);

});



function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}