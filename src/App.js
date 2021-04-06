import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';




const APIKEY = "fde78050a631c8e28e30d84e5821981b";

class App extends React.Component{

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: undefined

    }

    getWeather = async(e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;


        const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`);
         /*eslint-disable-next-line*/
        const data = await apicall.json();

        if (city && country){

            this.setState({

                temperature:data.main.temp,
                city:data.name,
                country:data.sys.country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                wind:data.wind.speed,
                error:"",
            });

        } else{

            this.setState({

                temperature:undefined,
                city:undefined,
                country:undefined,
                humidity:undefined,
                description:undefined,
                wind:undefined,
                error:"Please enter the City and Country",
            });
        }

        

    

        
    }
    render(){
        return(

         <div>

             <div className ="wrapper"> 
                <div className ="main">
                     <div className ="container"> 
                        <div className ="row">
                            <div className ="col-xs-5 title-container">
                                    <Titles/>
                            </div>
                            <div className ="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        wind={this.state.wind}
                                        error={this.state.error}




                                    />
                            </div>

                       </div>
                   </div>
                </div>
             </div>
             
         </div>

        );
    }
};

export default App;




