// Function to fetch weather data from OpenWeatherMap API
function fetchWeather() {
  const apiKey = "041aeb52e3836927dc7a8b6badd9e437"; //
  const city = "Calgary";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extracting temperature and weather description from API response
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      // Displaying temperature and weather description on the page
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${temperature}°C`;
      document.getElementById(
        "weather-description"
      ).textContent = `Weather: ${weatherDescription}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Call the fetchWeather function when the page loads
window.onload = fetchWeather;
