import { useState,useEffect } from "react";
import infoFetch from "./api";
import SearchArea from "./Component/SearchArea";
import Geolocation from "./Component/Geolocation";
import Displayinfo from "./Component/DisplayInfo";
import Map from "./Component/Map";
import './App.css';

function App(){

    const [info,setInfo] = useState([])
    const [show,setShow] = useState(0)
    let render = <div>fetching data.....</div>

    const geoLocation =  () =>{
        const gotLocation = async (position) => {
            const response = await infoFetch(position.coords.latitude,position.coords.longitude,"0")
            console.log(response);
            setInfo([response,'°C']);
            setShow(show+1)

          };
      
          const failedToGetLocation = (error) => {
            console.error('Error getting location:', error.message);
          };
      
          navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
    }

    useEffect(() =>{
        geoLocation();
    },[])
    
    const handelSubmit = async (cityName,selectedUnit) =>{
        let unit = ''
        console.log(cityName,selectedUnit)
        const response = await infoFetch(cityName,selectedUnit,"1");
        if (selectedUnit == 'standard'){
            unit = 'Kelvin';
        }else if(selectedUnit == 'metric'){
            unit = '°C';
        }else{
            unit = '°F';
        }
        setShow(show+1)
        console.log(response);
        renderInfo([response,unit])
    }

    const renderInfo = (data) =>{
        setInfo(data);  
    }
    if(show){
        const markers = [
            {
              coord: {
                lat: info[0].coord.lat,
                lon: info[0].coord.lon,
                pop: `temp: ${info[0].main.temp} ${info[1]}`
              }
            }];

        render = (<div>
            <Displayinfo data={info[0]} tempUnit={info[1]}/>
            <Map markers={markers}/>
            </div>)
    }
    

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <SearchArea onSubmit={handelSubmit}/>
            {/* <Displayinfo info={info} /> */}
            <div>{render}</div>
        </div>
    );
}

export default App;