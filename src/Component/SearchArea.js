import { useState } from "react";

function SearchArea({onSubmit}){
    const [cityName ,setCityName] = useState("");
    const [selectedUnit,setselectedUnit] = useState("metric")

    const handelCityName = (event) =>{
        setCityName(event.target.value);
    }

    const handleSelectUnit = (event) =>{
        setselectedUnit(event.target.value);
    }

    const handelSubmit = (event) =>{
        event.preventDefault();
        onSubmit(cityName,selectedUnit);

    }

    return (
            <form onSubmit={handelSubmit}>
                <label>City Name</label>
                <input value={cityName} onChange={handelCityName}/>

                <label>choose a unit system</label>
                <select name="units" id="units" value={selectedUnit} onChange={handleSelectUnit}>
                <option value="metric">°C</option>
                <option value="standard">Kelvin</option>
                <option value="imperial">°F</option>
                </select>

                <button>click me</button>

            </form>
    );
}

export default SearchArea;