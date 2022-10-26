import React from "react";
import HourlyDisplay from "./HourlyDisplay";
import { WiDaySunny, WiDayCloudy } from "react-icons/wi";

const ForecastDisplay = ({sky, wind, swell, temp, when}) => {
    const today = new Date();
    const time = today.getHours()

    
    return (    
        <div className="ui container">
            <div className="ui basic segment">
                <h2>{when}</h2>
            </div>
            <div className="ui center aligned two column grid">
                <div className="row">
                    <div className="column">
                        {sky < 25 && < WiDaySunny size={100} />}
                        {sky > 25 && sky < 50 && < WiDayCloudy size={100} />}
                    </div>
                    <div className="column">
                        <div className="ui inverted statistic">
                            <div className="label">
                                wind/kn
                            </div>
                            <div className="value">
                                {wind}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="ui inverted statistic">
                            <div className="label">
                                temp
                            </div>
                            <div className="value">
                                {temp}°
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui inverted statistic">
                            <div className="label">
                                swell/m
                            </div>
                            <div className="value">
                                {swell}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            < HourlyDisplay 
                time={time}
                sky={Math.floor(sky)}
                wind={Math.floor(wind)} 
                swell={Math.floor(swell)} 
                temp={Math.floor(temp)} 
            />
        </div>
    );
};

export default ForecastDisplay;
