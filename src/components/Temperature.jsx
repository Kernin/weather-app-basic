import  {useState, useEffect} from 'react';

import classes from './temperature.module.css';


const Temperature = () => {

  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState([]);
  const [icon, setIcon] = useState([]);

  const url = 'http://api.weatherapi.com/v1/current.json?key=e89fa94e30d3436399b210019232707&q=Mexico';


  async function weatherTemperature() {
    //fetch the api addres
    const response = await fetch(url);
    //turn to json
    const weatherResp = await response.json();
    //setting the response data to useState
    setTemp(`${weatherResp.current.temp_c}°C`);
    setCity(weatherResp.location.name);
    setIcon(weatherResp.current.condition.icon)
    // console.log(weatherResp);
    
  }

  useEffect( () => {
    weatherTemperature();

  }, [])
  
  return (
    <div className={classes.tempNumber}>
      <div><img className={classes.tempIcon} src={icon}/></div>

      <div className={classes.tempWrapper}>
        <span className={classes.tempMeasure}> {temp}</span>
        <span className={classes.cityName}> {city}</span>
      </div>


    </div>
  )
}

export default Temperature