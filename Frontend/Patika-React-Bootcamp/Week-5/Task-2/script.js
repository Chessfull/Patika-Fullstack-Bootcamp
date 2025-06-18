// Adding listeners to all buttons
const buttons = document.querySelectorAll(".drum-button");

buttons.forEach(button => {
    button.addEventListener("click", () => playSound(button.dataset.key));
});

// Triggered when click keyboard buttons
document.addEventListener("keydown", event => {
    const key = event.key.toUpperCase();
    playSound(key);
});

// Adding animation
function playSound(key) {
    const button = document.querySelector(`.drum-button[data-key="${key}"]`);
    const soundFile = button?.dataset.sound;

    if (soundFile) {
        const audio = new Audio(`sounds/${soundFile}`);
        audio.play();
        animateButton(button);
    }
}

// Adding animation to button
function animateButton(button) {
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 150);
}
