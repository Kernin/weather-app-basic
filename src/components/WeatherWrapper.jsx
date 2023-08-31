import React from 'react';
import classes from './weatherWrapper.module.css';

const WeatherWrapper = (props) => {
  return (
    <div className={classes.weatherWrapper}>{props.children}</div>
  )
}

export default WeatherWrapper;