
const apikey = "79ebbc61dd78e96de623058c3262afd9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);
    if (response.ok) {
        const data = await response.json();

        // Update the weather information in the DOM
        document.getElementById('temp').textContent = `${data.main.temp}°C`;
        document.getElementById('city').textContent = data.name;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `${data.wind.speed} km/h`;

        console.log(data); // To verify the data in the console
    } else {
        alert("City not found!");
    }
}

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    checkWeather(city);
});

// Default city weather on load
checkWeather("Dhaka");
