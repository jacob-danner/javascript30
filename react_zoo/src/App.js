import './App.css';
import {Route, Routes, Link } from 'react-router-dom'
import { Zoo } from './Zoo';
import { Mammals } from './Mammals';
import { useState } from 'react';

function App() {
  const [isLoading, setLoading] = useState(true)
  
  async function get(amount) {
    let responses = []
    
    for (let i = 0; i < amount; i++) {
        let res = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
        let body = await res.json()
        responses.push(body)
    }
    return responses
  }

  function sortByType(animals) {
    return {
        'mammals': animals.filter(a => a.animal_type === 'Mammal'),
        'birds': animals.filter(a => a.animal_type === 'Bird'),
        'reptiles': animals.filter(a => a.animal_type === 'Reptile'),
        'amphibians': animals.filter(a => a.animal_type === 'Amphibian'),
        'fish': animals.filter(a => a.animal_type === 'Fish')
    }

  }
  
  async function getAnimals() {
    try {
        let animals = await get(30)
        let byType = sortByType(animals)
        setLoading(false)
        return byType

    } catch (error) {
       console.log('error') 
    }
  }

  const animals = getAnimals()

  if (isLoading) {
    return <h1>Loading</h1>
  }
  return (
      <Routes>
        {console.log(animals)}
        <Route path='/' element={<Zoo />} />
        <Route path='mammals' element={<Mammals animals={animals.mammals} />} />
      </Routes>
  )
}

export default App;
