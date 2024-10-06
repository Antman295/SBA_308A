// Importing functions from other mjs files
import { getData } from "./api.mjs";
import { displayWeather, showError } from "./ui.mjs";

// Getting elements from HTML file
let form = document.getElementById('weatherLocation');
let locationInput = document.getElementById('location');

// Event Listener to submit form and get location
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let city = locationInput.value;
    try {
        const weatherData = await getData(city);
        displayWeather(weatherData);
    } catch (error) {
        showError(); // Print error if something went wrong with getting the weather data
    }
})