import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const getPuppy = async () => {
      try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-PT-SF/players");

        const data = await response.json();

        console.log(data.data.players);

        setPuppies(data.data.players);

      } catch (error) {
        console.log(error);
      }
    };

    getPuppy();
  },[]);



  return <>
  {puppies.map((puppy) => (
    <h1>{puppy.name}</h1>
  ))}
  </>;

};

export default App
