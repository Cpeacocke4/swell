import React from "react";
import HourForecast from "./HourForecast";

const HourlyDisplay = ({time, sky, temp, wind, swell}) => {
    return (
        <div className="ui" >
            <h2>Hourly Forecacast</h2>
            <div className="ui hourly_f" >
                <div className="ui horizontal segments hourly_display" style={{ overflow: 'auto', maxWidth: '1000em' }}>
                        <div className="segment" style={{minWidth: '8em'}} >
                            <div className="ui center aligned">{time + 1}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 2}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 3}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 4}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 5}</div> 
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 6}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 7}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 8}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 9}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 10}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 11}</div>
                            < HourForecast 
                                sky={sky}
                                temp={temp}
                                wind={wind}
                                swell={swell}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 12}</div>
                            < HourForecast 
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
    );
};

export default HourlyDisplay;