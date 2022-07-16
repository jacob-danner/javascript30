import './App.css';
import {Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { Zoo } from './Zoo';
import { Amphibians } from './categories/Amphibians';
import { Birds } from './categories/Birds';
import { Fish } from './categories/Fish';
import { Mammals } from './categories/Mammals';
import { Reptiles } from './categories/Reptiles';

function App() {
  
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

  const [isLoading, setLoading] = useState(true)
  const [animals, setAnimals] = useState(undefined)

  useEffect(async () => {
    let animals = await getAnimals()
    setLoading(false)
    setAnimals(animals)
  }, [])

  if (isLoading) {
    return <h1>Loading</h1>
  }
  return (

        <Routes>
          <Route path='/' element={<Zoo />} />
          <Route path='mammals' element={<Mammals group={animals.mammals} />} />
          <Route path='birds' element={<Birds group={animals.birds} />} />
          <Route path='amphibians' element={<Amphibians group={animals.amphibians} />} />
          <Route path='reptiles' element={<Reptiles group={animals.reptiles} />} />
          <Route path='fish' element={<Fish group={animals.fish} />} />
        </Routes>

  )
}

export default App;
