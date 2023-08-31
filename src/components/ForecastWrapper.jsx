import {useState, useEffect} from 'react';
import classes from './forecastWrapper.module.css';
const ForecastWrapper = () => {

  const [foreca, setForeca] = useState([]);

  const country = "london";
  const url2 = `http://api.weatherapi.com/v1/forecast.json?key=e89fa94e30d3436399b210019232707&q=${country}&days=4&aqi=no&alerts=no`;

  async function weatherForecast() {
    //fetch the api addres
    const response = await fetch(url2);
    //turn to json
    const forecaResp = await response.json();
    //setting the response data to useState
    setForeca(forecaResp.forecast.forecastday);
    
    console.log("resp", forecaResp.forecast.forecastday)
    // console.log("temp", forcaResp.forecast.forecastday.day);
  }

  useEffect( () => {
    weatherForecast();
  },[])

  const itemList = foreca.map((item, index) => {

    const theDay = new Date( item.date);
    const diaSemana = theDay.getDay();
    const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ]

    return <article className={classes.forecastdays} key={index}>
      <img className={classes.iconTemps} src={item.day.condition.icon}/>
      <h5 className={classes.temps}>{item.day.avgtemp_c}º</h5>
      <p className={classes.days}>{dayNames[diaSemana]}</p>
      </article>
  }
  );

  return (
    <>
      <h2>Forecast</h2>
    <div className={classes.forecastWrapper}>
      {itemList}
    </div>

    </>
  )
}

export default ForecastWrapper