import React from "react";
import HourForecast from "./HourForecast";

const HourlyDisplay = ({ hour_results, time }) => {
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve} = hour_results;
    
    return (
        <div className="ui" >
            <div className="ui basic segment">
                <h2>Hourly Forecacast</h2>
            </div>
            <div className="ui hourly_f" >
                <div className="ui horizontal segments hourly_display" style={{ overflow: 'auto', maxWidth: '1000em' }}>
                        <div className="segment" style={{minWidth: '8em'}} >
                            <div className="ui center aligned">{time + 1}</div>
                            < HourForecast 
                                sky={one.cloudCover.noaa}
                                temp={one.airTempurature.noaa}
                                wind={one.gust.noaa}
                                swell={one.swellHeight.noaa}
                                when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 2}</div>
                            < HourForecast 
                                // sky={two.cloudCover}
                                // temp={two.airTempurature}
                                // wind={two.gust}
                                // swell={two.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 3}</div>
                            < HourForecast 
                                // sky={three.cloudCover}
                                // temp={three.airTempurature}
                                // wind={three.gust}
                                // swell={three.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 4}</div>
                            < HourForecast 
                                // sky={four.cloudCover}
                                // temp={four.airTempurature}
                                // wind={four.gust}
                                // swell={four.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 5}</div> 
                            < HourForecast 
                                // sky={five.cloudCover}
                                // temp={five.airTempurature}
                                // wind={five.gust}
                                // swell={five.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 6}</div>
                            < HourForecast 
                                // sky={six.cloudCover}
                                // temp={six.airTempurature}
                                // wind={six.gust}
                                // swell={six.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 7}</div>
                            < HourForecast 
                                // sky={seven.cloudCover}
                                // temp={seven.airTempurature}
                                // wind={seven.gust}
                                // swell={seven.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 8}</div>
                            < HourForecast 
                                // sky={eight.cloudCover}
                                // temp={eight.airTempurature}
                                // wind={eight.gust}
                                // swell={eight.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 9}</div>
                            < HourForecast 
                                // sky={nine.cloudCover}
                                // temp={nine.airTempurature}
                                // wind={nine.gust}
                                // swell={nine.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 10}</div>
                            < HourForecast 
                                // sky={ten.cloudCover}
                                // temp={ten.airTempurature}
                                // wind={ten.gust}
                                // swell={ten.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 11}</div>
                            < HourForecast 
                                // sky={eleven.cloudCover}
                                // temp={eleven.airTempurature}
                                // wind={eleven.gust}
                                // swell={eleven.swellHeight}
                                // when={time}
                            />
                        </div>
                        <div className="segment" style={{minWidth: '8em'}}>
                            <div className="ui center aligned">{time + 12}</div>
                            < HourForecast 
                                // sky={twelve.cloudCover}
                                // temp={twelve.airTempurature}
                                // wind={twelve.gust}
                                // swell={twelve.swellHeight}
                                // when={time}
                            />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HourlyDisplay;