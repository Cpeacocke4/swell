import React, {useEffect, useState} from "react";
import axios from "axios";
import ForecastDisplay from "./ForecastDisplay";

const Forecast = ({lat, lng}) => {
    const [forecast, setForecast] = useState({
        result: {
            sky: [],
            temp: [],
            wind: [],
            swell: [],
    }
    });

    const { result } = forecast;
    const { sky, temp, wind, swell } = result;

    const params = 'airTemperature,cloudCover,gust,swellHeight';
    
    const today = new Date();
    const time = Math.floor(today.getTime() / 1000);

    useEffect(() => {
        if (!lat) return
        if (!lng) return

        const getForecast = async () => {
            const {data} = await axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${time}`, {
                headers: {
                    'Authorization' : 'bbec2bc0-4e1f-11ed-bce5-0242ac130002-bbec2c2e-4e1f-11ed-bce5-0242ac130002'
                },
            });
            console.log(data);
            setForecast({...forecast, result: {
                sky: data.hours[0].cloudCover.noaa,
                temp: data.hours[0].airTemperature.noaa,
                wind: data.hours[0].gust.noaa,
                swell: data.hours[0].swellHeight.noaa,
            }});
        };
    
        getForecast();
    
    }, [lat,lng]);

    return (
        < ForecastDisplay 
            sky={Math.floor(sky)}
            wind={Math.floor(wind)} 
            swell={Math.floor(swell)} 
            temp={Math.floor(temp)}
            when='today' 
        />
    );
};

export default Forecast;