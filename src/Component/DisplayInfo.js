function Displayinfo({data,tempUnit}){
    return (
    <div className="weather-info" id="weather-info">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}{tempUnit}</p>
      <p>Max Temperature: {data.main.temp_max}{tempUnit}</p>
      <p>Min Temperature: {data.main.temp_min}{tempUnit}</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Pressure: {data.main.pressure} hPa</p>
    </div>
    );
}

export default Displayinfo;