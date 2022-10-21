import React, {useEffect, useState} from "react";
import axios from "axios";

const Forecast = ({lat, lng}) => {
    const [forecast, setForecast] = useState({
        result: {
            sky: [],
            temp: [],
            wind: [],
            swell: [],
    }
    });

    const params = 'airTemperature,cloudCover,gust,swellHeight';
    
    const today = new Date();
    const time = Math.floor(today.getTime() / 1000);
    console.log(time);

    useEffect(() => {
        if (!lat) return
        if (!lng) return

        const getForecast = async () => {
            const {data} = await axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${time}`, {
                headers: {
                    'Authorization' : 'bbec2bc0-4e1f-11ed-bce5-0242ac130002-bbec2c2e-4e1f-11ed-bce5-0242ac130002'
                },
            });
            console.log(data.hours);
            setForecast({...forecast, result: {
                sky: data.hours[0].cloudCover.noaa,
                temp: data.hours[0].airTemperature.noaa,
                wind: data.hours[0].gust.noaa,
                swell: data.hours[0].swellHeight.noaa,
            }});
        };
    
        getForecast();
    
    }, [lat,lng])

    return <div> Cloud cover: {forecast.result.sky} temp: {forecast.result.temp} wind: {forecast.result.wind} swell: {forecast.result.swell}</div>
};

export default Forecast;

// setLocation(prevLocation => ({ ...location, lat: e.target.value }))