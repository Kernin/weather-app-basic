import React, {useEffect, useState} from 'react';

import Temperature from './Temperature';

const WeatherFetch = () =>  {

  const [weathers, setWeathers] = useState([]);
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState([]);

  const url = 'http://api.weatherapi.com/v1/current.json?key=e89fa94e30d3436399b210019232707&q=Mexico';


  async function weatherForecast() {
    //fetch the api addres
    const response = await fetch(url);
    //turn to json
    const weatherResp = await response.json();
    //setting the response data to useState
    setWeathers(weatherResp);
    setTemp(weatherResp.current.temp_c);
    setCity(weatherResp.location.name)
    console.log(weatherResp);
    
  }

  useEffect( () => {
    weatherForecast();

  }, [])
  
console.log(temp, city)

  return (
    <>
    WeatherFetch<br/>
    <Temperature temp={temp} city={city}/>
    </>
  )
}

export default WeatherFetch;