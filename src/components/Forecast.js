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

    const [hourlyForecast, setHourlyForecast] = useState({
        hour_results: {
            one: [],
            two: [],
            three: [],
            four: [],
            five: [],
            six: [],
            seven: [],
            eight: [],
            ninth: [],
            ten: [],
            eleven: [],
            twelve: [],
        }
    });

    const { result } = forecast;
    const { sky, temp, wind, swell } = result;
    const { hour_results } = hourlyForecast;

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
            setHourlyForecast({...hourlyForecast, hour_results: {
                one: data.hours[1],
                two: data.hours[2],
                three: data.hours[3],
                four: data.hours[4],
                five: data.hours[5],
                six: data.hours[6],
                seven: data.hours[7],
                eight: data.hours[8],
                ninth: data.hours[9],
                ten: data.hours[10],
                eleven: data.hours[11],
                twelve: data.hours[12],
            }});
        };
    
        getForecast();
    
    }, [lat,lng]);

    return (
        < ForecastDisplay 
            sky={Math.floor(sky)}
            wind={Math.floor(wind)} 
            swell={swell} 
            temp={Math.floor(temp)}
            when='today'
            hour_results={hour_results}
        />
    );
};

export default Forecast;