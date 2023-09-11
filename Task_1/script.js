function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "1935664e7c680f6459b5dcb3fa2f5a57"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-info").innerHTML = "City not found.";
        });
}
