import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY='7e3f100c20c2fef0667201c853ba20f0';
const SAMPLE_API_URL='api.openweathermap.org/data/2.5/forecast?q=kolkata,india&APPID=7e3f100c20c2fef0667201c853ba20f0&units=metric';

class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.city.value;
    const country=e.target.country.value;

    const api_call = await fetch('api.openweathermap.org/data/2.5/forecast?q=manchester,uk&APPID=${API_KEY}&units=metric',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data= await api_call.json();
    // const data=JSON.stringify(api_call);
    console.log(data);
  }
  render(){
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
};

export default App;