async function getData() {
    const response = await fetch("https://api.weather.gov");
    const jsonData = await response.json();
    console.log(jsonData);
}