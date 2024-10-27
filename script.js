// formatting time and day
    function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
    }

    function formatDay(date) {
    const dayArray = date.getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const day = days[dayArray];
    return day;
    }


// getting current time & day and displaying it
    const currentTime = document.querySelector("#current-time");
    let newCurrentTime = new Date();
    currentTime.innerHTML = formatTime(newCurrentTime);

    const currentDay = document.querySelector("#current-day");
    let newCurrentDay = new Date();
    currentDay.innerHTML = formatDay(newCurrentDay);


// search city function
    document.getElementById("search-button").addEventListener("click", () => {
        const city = document.getElementById("search-input").value;
        fetchWeatherData(city);
    });



//fetching weather data from weather api and displaying it
    const apiKey = "dc9f7708a6f6a1ac4b1660a568861661";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    //elements to update
    const temperatureElement = document.getElementById("current-temperature");
    const weatherTypeElement = document.getElementById("weather-type");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");

    // fetech data for a "city"
    async function fetchWeatherData(city) {
    try {
        const response = await fetch(
        `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
    }

    // Updating UI with the fetched data
    function updateWeatherUI(data) {
    if (data && data.main) {
        temperatureElement.innerText = `${Math.round(data.main.temp)}°`;
        weatherTypeElement.innerText = data.weather[0].description;
        humidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${Math.round(data.wind.speed)} km/h`;
    }
    }

    // Initialize with a default city
    fetchWeatherData("tunis");

// Display city name
    const cityNameElement = document.getElementById("city-name");

    function updateWeatherUI(data) {
        if (data && data.main) {
          cityNameElement.innerText = data.name; // Display the city name
          temperatureElement.innerText = `${Math.round(data.main.temp)}°`;
          weatherTypeElement.innerText = data.weather[0].description;
          humidityElement.innerText = `${data.main.humidity}%`;
          windElement.innerText = `${Math.round(data.wind.speed)} km/h`;
        }
      }

