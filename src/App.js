import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Description from "./components/description"
import ImageSection from "./components/image"
import HeaderSection from "./components/header"

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = '5NL35nUXsW9hb8Aehzb3F0zSZl84RckM1vLfZgbu' // use in the query string 'api_key' https://api.nasa.gov/planetary/apod?api_key=5NL35nUXsW9hb8Aehzb3F0zSZl84RckM1vLfZgbu

function App(props) {
  const [date, setDate] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
  // axios.get(`${url}?api_key=${api_key}${date}`)
  // .then(res =>{
  //   console.log(res)
  // })
  // .catch(err => {
  //   debugger
  // })
  },
   
    []
  ) 
  return (
    <div className="App">
      <HeaderSection />
      <ImageSection />
      <Description />
    </div>
  );
}

export default App;
