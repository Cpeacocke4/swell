import React, { useEffect, useState } from "react";
import Forecast from "./components/Forecast";

const App = () => {
    const [location, setLocation] = useState({lat: null, lng: null});

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLocation({lat: position.coords.latitude, lng: position.coords.longitude})
        );
    
    }, []);

    console.log(location);  
    
    return (
        <div className="body">
            <h1 className="ui huge header">SWELL</h1>
            <div className="ui two stackable cards">
                <div className= "card">
                    <div className="content">
                        <Forecast lat={location.lat} lng={location.lng}/>
                    </div>
                </div>
                <div className= "card">
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
