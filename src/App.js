import './App.css';
import { useEffect, useState } from 'react'

function App() {
    const [weather, setWeather] = useState(null);
    const apiKey = 'SiPVszgovu6aFy5pYecgwyi8szDKfZM3';
    const city = 'Lahore';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationKey = await fetchLocationKey();
                const currentWeather = await fetchCurrentWeather(locationKey);
                setWeather(currentWeather[0])
            } catch(error) {
                console.log('Error while fetching data: ', error)
            }

        }
        const fetchLocationKey = async () => {
            try {
                const responce = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`);
                const data = await responce.json();
                const locationkey = data[0].Key;
                console.log(locationkey);
                return locationkey;
            } catch(error) {
                console.log("Error while fetching locationKey: ", error);
                throw error;
            }}
        
            const fetchCurrentWeather = async (locationKey) => {
                try {
                    const responce = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
                    const data = await responce.json();
                    console.log(data);
                    return data
                } catch (error) {
                    console.log("error while fetching weather: ", error);
                    throw error
                }
            }

            fetchData();
        }, [])


     return (
        <div>
            {weather && <div>
                {weather.WeatherText} <br/>
                {weather.Temperature.Metric.Value}
                </div>}
        </div>
    );
}


export default App;
