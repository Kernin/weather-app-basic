

import ForecastWrapper from './components/ForecastWrapper';
import Temperature from './components/Temperature';
import WeatherWrapper from './components/WeatherWrapper';
import './App.css'

function App() {
  
  return (
    <WeatherWrapper>
      <Temperature/>
      <ForecastWrapper/>
    </WeatherWrapper>
    )
  }
  
  export default App;
  