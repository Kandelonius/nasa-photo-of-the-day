import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Description from "./components/description"
import ImageSection from "./components/image"
import HeaderSection from "./components/header"
import SearchBar from "./components/searchBar"

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = '5NL35nUXsW9hb8Aehzb3F0zSZl84RckM1vLfZgbu' // use in the query string 'api_key' https://api.nasa.gov/planetary/apod?api_key=5NL35nUXsW9hb8Aehzb3F0zSZl84RckM1vLfZgbu

function App(props) {
  const [date, setDate] = useState('')
  const [imageUrl, setImageUrl] = useState(null)
  const [hdImageUrl, setHdImageUrl] = useState(null)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    // console.log('how many times do I happen?')
    axios.get(`${url}?api_key=${api_key}&date=${date}`)
    .then(res =>{
      // console.log(`how many times? ${date}`)
      setTitle(res.data.title)
      setDate(res.data.date)
      setDescription(res.data.explanation)
      setImageUrl(res.data.url)
      setHdImageUrl(res.data.hdurl)
      // console.log(res.data.title)
    })
    .catch(err => {
      console.log(err)
      debugger
    })
    },
  [date]);

  return (
    <div className="App">
      <HeaderSection imageTitle={title} mediaDate={date} setDate={setDate}/>
      <ImageSection imageUrl={imageUrl} imageTitle={title}/>
      <Description imageDescription={description} hdImageUrl={hdImageUrl}/>
    </div>
  );
}

export default App;
