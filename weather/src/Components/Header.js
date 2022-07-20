import { useState } from "react"

export const Header = ({cities, setCities, setLen}) => {
    cities = cities
    const [input, setInput] = useState("")

    const handleClick = event => {
        console.log(cities)
        cities.push(input)
        setCities(cities)
        setLen(cities.length + 1)
        console.log(cities)
        
    }
    return (
        <>
            <h1>Weather</h1>

                <input type={"text"} 
                    placeholder={"add city"} 
                    onChange={event => {setInput(event.target.value)}}
                    value={input}
                >
                </input>
                <button onClick={e => handleClick(e)}>+</button>
        </>
    )
}