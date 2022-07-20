import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { useEffect, useState } from "react";

import { Header } from "./Components/Header";
import { CityCard } from "./Components/CityCard";

function App() {
  let KEY = 'bb9fea47a8834bd1a4f00712221907'

  let initialCities = ['Des Moines', 'South Elgin']

  let [loading, setLoading] = useState(true)
  let [weather, setWeather] = useState(undefined)
  let [cities, setCities] = useState(initialCities)
  let [len, setLen] = useState(cities.length)

  useEffect( () => {
    try {
      let get = async () => {
        let promises = cities.map(async city => {
          let req = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`
          let res = await fetch(req)
          let body = await res.json()
          return body
        })

        let responses = await Promise.all(promises)
        setWeather(responses)
        setLoading(false)
      }
      get()
    } catch (error) {
      console.log('error', error)
    }
  }, [len] )
 
  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <Container style={{height:'100%'}} >
      <Header cities={cities} setCities={setCities} setLen={setLen}/>
      {weather.map(cityInfo => {
        return(<CityCard info={cityInfo} />)
      })}
    </Container>
  );
}

export default App;
