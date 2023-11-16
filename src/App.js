import './App.css';
import { useEffect } from 'react'

function App() {
    const apiKey = 'SiPVszgovu6aFy5pYecgwyi8szDKfZM3';
    const city = 'Lahore';

    useEffect(() => {
        const fetchData = async () => {
            const locationKey = fetchLocationKey();
            const currentWeather = fetchCurrentWeather(locationKey);
        }
        const fetchLocationKey = async () => {
            try {
                const responce = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`);
                const data = await responce.json();
                const locationkey = data[0].Key;
                console.log(locationkey);
                return locationkey;
            } catch(error) {
                console.log("Error while fetching locationKey: ", error)
            }}
        
            const fetchCurrentWeather = async (locationKey) => {
                try {
                    const responce = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
                    const data = await responce.json();
                    console.log(data);
                    return data
                } catch (error) {
                    console.log("error while fetching weather: ", error)
                }
            }

            fetchData();
        }, [])


     return (
    <p></p>
    );
}


export default App;
