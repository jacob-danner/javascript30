import { useState, useEffect } from "react";


function App() {
  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic '
        }
      })
      console.log(response.json())
    }
    getResponse()
  }, [])

  return (
    <>
      hello
    </>
  );
}

export default App;
