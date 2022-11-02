import React from "react";
import { WiDaySunny, WiDayCloudy } from "react-icons/wi";

const HourForecast = ({sky, wind, swell, temp, when}) => { 
    return (
        <div className="ui segment" > 
            <div className="ui center aligned">
                {sky < 25 && < WiDaySunny size={30} />}
                {sky > 25 && sky < 50 && < WiDayCloudy size={30} />}
            </div>
            <div className="ui divider"></div>
            <div className= "ui center aligned">
                <div className="ui mini inverted statistic">
                    <div className="label">
                        wind/kn
                    </div>
                    <div className="value">
                        {wind}
                    </div>
                </div>
            </div>
            <div className="ui divider"></div>
            <div className= "ui center aligned">
                <div className="ui mini inverted statistic">
                    <div className="label">
                        temp
                    </div>
                    <div className="value">
                        {temp}°
                    </div>
                </div>
            </div>
            <div className="ui divider"></div>
            <div className= "ui center aligned">
                <div className="ui mini inverted statistic">
                    <div className="label">
                        swell/m
                    </div>
                    <div className="value">
                        {swell}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HourForecast;