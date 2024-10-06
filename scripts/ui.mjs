export function displayWeather(jsonData) {
    let message = document.getElementById('message');

    const location = jsonData.location.name;
    const state = jsonData.location.region;
    const condition = jsonData.current.condition.text;
    const temp = jsonData.current.temp_f;
    const tempFeels = jsonData.current.feelslike_f;

    message.textContent = `In ${location}, ${state}, it's currently ${condition}, ${temp} degrees (in fahrenheit) but it feels like ${tempFeels}.` 

}

export function showError() {
    document.getElementById('location').focus(); // Will focus on text field if city name is invalid
    alert(`Please enter a valid city!`);
}