import { useState } from 'react'
import React from 'react'
import FoodData from '../FoodData'
import Search from './components/Search'
import Food from './components/Food-box'
import "./App.css"

export default function App() {
  const [search,setSearch]=useState("")

  const  Filtered=FoodData.filter((e)=>{
    return e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <>
    <h1 className='header'>Pro-nutrition</h1>
    <Search setSearch={setSearch}/>
    {
      Filtered.length<=0 ? (
        <h3>No data found</h3>

      ) : Filtered.map((e,i)=> {
        return <Food key={i} ele={e} index={i}/>
      })
    }
    </>
  )
}

