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

    return (

        < ForecastDisplay 
            sky={Math.floor(sky)}
            wind={Math.floor(wind)} 
            swell={Math.floor(swell)} 
            temp={Math.floor(temp)}
            when='today' 
        />

        // <div className="ui centered">
        //     <div className="content">
        //         <p className="header justify top left">NOW</p>
        //         <div className="ui grid container">
        //             <div className="column four wide centered">
        //                 {sky < 25 && < WiDaySunny size={100} />}
        //                 {sky > 25 && sky < 50 && < WiDayCloudy size={100} />}
        //             </div>
        //             <div className="column eight wide centered">
        //                 <div className="ui small inverted statistic">
        //                     <div className="label">
        //                         Wind
        //                     </div>
        //                     <div className="value">
        //                         {forecast.result.wind}
        //                     </div> 
        //                 </div>
        //             </div>
        //             <div className="column eight wide centered">
        //                 <div className="ui small inverted statistic">
        //                     <div className="label">Temp</div>
        //                     <div className="value">
        //                         {Math.floor(temp)}° 
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="column eight wide centered">
        //                 <div className="card ui small inverted statistic">
        //                     <div className="label">
        //                         Swell
        //                     </div>
        //                     <div className="value">
        //                         {forecast.result.swell}
        //                     </div> 
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        //     <div className="next 24hr forecast">

        //     </div>
        // </div>
    );
};

export default Forecast;