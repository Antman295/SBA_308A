// async function to collect data from the API
export async function getData(city) {
    const apiKey = '6273319fd5474074877181012240310';

    // Try/Catch to catch error if something went wrong with the API
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    
        // If/else to retrieve city from user if valid
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            throw new Error ('Invalid city');
        }
    } catch (error) {
        console.error('Error retreiving weather data: ', error); // Will print error on the web console
        throw error;
    }
}