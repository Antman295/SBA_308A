// Function to print data from the API
export function displayWeather(jsonData) {
    let message = document.getElementById('message');

    // All the data that will be used from the API
    const location = jsonData.location.name;
    const state = jsonData.location.region;
    const condition = jsonData.current.condition.text;
    const temp = jsonData.current.temp_f;
    const tempFeels = jsonData.current.feelslike_f;

    // Message that will appear after the user hits submit
    message.textContent = `In ${location}, ${state}, it's currently ${condition}, ${temp} degrees (in fahrenheit) but it feels like ${tempFeels} degrees.` 
}

export function showError() {
    document.getElementById('location').focus(); // Will focus on text field if city name is invalid
    alert(`Please enter a valid city!`); // Error message if city is invalid
}