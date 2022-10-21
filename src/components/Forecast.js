import React, {useEffect, useState} from "react";
import axios from "axios";

const Forecast = () => {
    const [forecast, setForecast] = useState({
        sky: {},
        temp: {},
        wind: {},
        swell: {},
    });

    const params = 'airTemperature,cloudCover,gust,swellHeight';
    
    const today = new Date();
    const time = today.getHours() + '.' + today.getMinutes();
    console.log(time);

    useEffect(() => {
        const lat = window.navigator.geolocation.getCurrentPosition.coords.latitude
        console.log(lat);

        const getForecast = async () => {
            const {data} = await axios.get(`https://api.stormglass.io/v2/weather/point?lat=${location.lat}&lng=${location.long}&params=${params}`, {
                headers: {
                    'Authorization' : 'bbec2bc0-4e1f-11ed-bce5-0242ac130002-bbec2c2e-4e1f-11ed-bce5-0242ac130002'
                },
            });
            setForecast(...forecast, ...data.hours[0])
            console.log(forecast);
        };

        getForecast();
    }, []);
    
    return <div>Your position is Lat: {}, Long: {}</div>
};

export default Forecast;

// setLocation(prevLocation => ({ ...location, lat: e.target.value }))