import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY='7e3f100c20c2fef0667201c853ba20f0';
const SAMPLE_API_URL='http://api.openweathermap.org/data/2.5/forecast?q=kolkata,india&APPID=7e3f100c20c2fef0667201c853ba20f0&units=metric';

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.city.value;
    const country=e.target.country.value;
    try{
      let api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=7e3f100c20c2fef0667201c853ba20f0&units=metric`);
      let data= await api_call.json();
      console.log(data);
      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: 'Something',
        error: 'Error ;)'
      });
    }catch(error){
      console.error(error);
    }
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