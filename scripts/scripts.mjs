let form = document.getElementById('weatherLocation');
let city = document.getElementById('location');


// async function to collect data from the API
async function getData(city) {
    const apiKey = '6273319fd5474074877181012240310';

    // Try/Catch to catch error if something went wrong with the API
    try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    
    // If/else to retrieve city from user if valid
    if (response.ok) {
        const jsonData = await response.json();

        const location = jsonData.location.name;
        const region = jsonData.location.region;
        const condition = jsonData.current.condition.text;
        const temp = jsonData.current.temp_f;
        const tempFeels = jsonData.current.feelslike_f;

        console.log(location, region, condition, temp, tempFeels);
        console.log(jsonData);
    } else {
        city.focus(); // Will focus on text field if city name is invalid
        alert(`${jsonData} is not a city. Please enter a valid one!`);
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