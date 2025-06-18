import React, { useEffect, useState } from 'react'
import Video from './Video'
import './App.css';
const Card = () => {

  const[apiData , setApiData] = useState([])
  const [filter ,setFilter] = useState(false);
  const[input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState(apiData)
  

    function handleChange(e){
       
      setInput(e.target.value)
  
    }
    function handleSearch(i){
      let filteredresults = apiData.filter(item => item.title.includes(input))
      setSearchResults(filteredresults)
      setFilter(!filter)
    }

  useEffect( () => {
    const fetchData = async () =>{
      try{
        const res = await fetch('https://dummyjson.com/products')
        if(!res.ok){
          throw new Error('some error occured', res.status)
        }
        const result = await res.json();
        console.log(result.products)
        setApiData(result.products)
      }
      catch(err){
        console.log(err)
      }
      
    }
    fetchData();

  }
    
    ,[])
  return (
    <>
      <div>
        <input 
          className='search-bar' 
          placeholder='Search here' 
          onChange={(e)=>{handleChange(e)}} 
          value={input}>
          
        </input>
        <button className='search-icon' onClick={(input)=>handleSearch(input)}>🔍</button>
      </div>
      <div className='card-container'>
        {!filter? (apiData ? apiData.map(item =>{
        return <Video title={item.title} id={item.id} image ={item.images}></Video>
        }): <h1>Loading...</h1>) : (searchResults.map(item =>{
        return <Video title={item.title} id={item.id} image ={item.images}></Video>
        }))}
        {}
      </div>
    </>
  )
}

export default Card