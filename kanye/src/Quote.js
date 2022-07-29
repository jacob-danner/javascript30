import { useState, useEffect } from "react"

export const Quote = () => {
    const [cur, flipCur] = useState(false)

    const [quote, setQuote] = useState()

    useEffect( () => {
        const getQuote = async () => {
            const res = await fetch('https://api.kanye.rest')
            const body = await res.json()
            setQuote(body)
        }
        getQuote()
    }, [cur])


    if (quote) return (
        <div id='quote'>
            <h2 id='text'>{quote.quote}</h2>
            <h3>-Kanye West</h3>
            <button onClick={() => flipCur(!cur)}>more wisdom</button>
        </div>
    )
}