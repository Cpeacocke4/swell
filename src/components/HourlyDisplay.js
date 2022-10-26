import React from "react";
import Forecast from "./Forecast";
import ForecastDisplay from "./ForecastDisplay";


const HourlyDisplay = ({time, sky, temp, wind, swell}) => {
    return (
        <div className="ui basic modal">
            <h2>Hourly Forecacast</h2>
            <div className="ui scrolling content hourly_f">
                <div className="">
                    <div className="row">
                        <div className="column">
                            < ForecastDisplay 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HourlyDisplay