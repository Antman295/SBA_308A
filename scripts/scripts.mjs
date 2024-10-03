let form = document.getElementById('weatherLocation');
let locationInput = document.getElementById('location');

// async function to collect data from the API
async function getData(city) {
    const apiKey = '6273319fd5474074877181012240310';

    // Try/Catch to catch error if something went wrong with the API
    try {
    
    let message = document.getElementById('message');

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    
    // If/else to retrieve city from user if valid
    if (response.ok) {
        const jsonData = await response.json();

        const location = jsonData.location.name;
        const state = jsonData.location.region;
        const condition = jsonData.current.condition.text;
        const temp = jsonData.current.temp_f;
        const tempFeels = jsonData.current.feelslike_f;

        console.log(location, state, condition, temp, tempFeels);
        
        message.textContent = `In ${location}, ${state}, it's currently ${condition}, ${temp} degrees (in fahrenheit) but it feels like ${tempFeels}.` 
    } else {
        locationInput.focus(); // Will focus on text field if city name is invalid
        alert(`Please enter a valid city!`);
    }
    } catch (error) {
        
        console.error('Error retreiving weather data: ', error)
    }
}

// Event Listener to submit form and get location
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let city = document.getElementById('location').value;
    getData(city);
})