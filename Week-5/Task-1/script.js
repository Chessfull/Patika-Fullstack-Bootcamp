document.getElementById("startBtn").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value.trim();
    
    if (name) {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("greetingScreen").style.display = "block";
        document.getElementById("greeting").innerText = `Hello, ${name}!`;

        updateDateTime();
        setInterval(updateDateTime, 1000);
    } else {
        alert("Please write your name!");
    }
});

function updateDateTime() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentTime = now.toLocaleTimeString();
    const currentDay = days[now.getDay()];

    document.getElementById("dateTime").innerText = `Şu an: ${currentDay}, ${currentTime}`;
}
