let form = document.getElementById('weatherLocation');


// async function to collect data from the API
async function getData(city) {
    const apiKey = '6273319fd5474074877181012240310';

    try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const jsonData = await response.json();
    
    if (response.ok) {
        console.log(jsonData);
    } else {
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