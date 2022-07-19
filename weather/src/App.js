import { useEffect, useState } from "react";

import { CityCard } from "./Components/CityCard";

function App() {
  let KEY = 'bb9fea47a8834bd1a4f00712221907'

  let cities = ['Des Moines', 'South Elgin']

  let [loading, setLoading] = useState(true)
  let [weather, setWeather] = useState(undefined)

  const getWeather = async (cities) => {
    let responses = cities.map(async city => {
      let req = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`
      let res = await fetch(req)
      let body = await res.json()
      // BODY HERE IS GOOD. THE PROMISE ISSUE IS CAUSED BY THE MAP?
      return body
    })
    console.log(responses)
    return responses
  }

  useEffect( () => {
    try {
      let get = async () => {
        let responses = await getWeather(cities)
        setWeather(responses)
        setLoading(false)

      }
      get()
    } catch (error) {
      console.log('error', error)
    }
    }, [] )
 
  // let res = await fetch('http://api.weatherapi.com/v1/current.json?key=bb9fea47a8834bd1a4f00712221907&q=South Elgin')
  // console.log(res.json())
  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <div className="App">
      {weather.map(cityInfo => {
        return(<CityCard info={cityInfo} />)
      })}
    </div>
  );
}

export default App;
