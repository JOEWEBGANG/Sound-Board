// create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong','oiia'];
const oiiaGif = document.getElementById('oiiaGif');

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

        // stop all sounds first
        stopSounds();

        // get audio element...
        const audio = document.getElementById(sound);
        // play sound  on click
        audio.play();
        
        // if my sound is the special oiia
        if (sound === "oiia") {
            // make the gif visible
            oiiaGif.style.display = "block";

            // Force gif to reload itself so that I get consistent "animation"
            oiiaGif.src = oiiaGif.src;

            // Hide the GIF when the audio finishes
            audio.onended = () => {
                oiiaGif.style.display = "none";
            };
        }
    });
    // add each button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

// Helper Functions
function stopSounds() {

    // Loop over all sounds
    sounds.forEach((sound) => {

        // Get sound element
        const song = document.getElementById(sound);

        // Pause the sound
        song.pause();

        // Reset time of sound to 0
        song.currentTime = 0;
    });

    // Hide my special gif if sound is stopped
    oiiaGif.style.display = "none";
}