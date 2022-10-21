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
        <Forecast lat={location.lat} lng={location.lng}/>
    )
};

export default App;
