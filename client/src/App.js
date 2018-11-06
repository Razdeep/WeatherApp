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
    if(city && country)
    {
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
          error: 'Successfully fetched data'
        });
      }catch(error){
        console.error(error);
      }
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values correctly'
      });
    }
  }
  render(){
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles/>
              </div>
              <div className="col-xs-7">
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;