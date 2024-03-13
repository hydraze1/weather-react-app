import axios from 'axios';
const APIKEY = 'bdea1d67e62a5f8c948ea9de1c89ea53';

async function infoFetch(value_1,value_2,value){
    let data = {}
    if(value === "1"){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${value_1}&appid=${APIKEY}&units=${value_2}`;
         data = await axios.get(url);
    }else{
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${value_1}&lon=${value_2}&appid=${APIKEY}&units=metric`;
         data = await axios.get(url);
    }

// console.log(data);

    return data.data;
}

export default infoFetch;