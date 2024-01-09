import React from 'react'

export default function Search(props) {
    let{setSearch}=props;
  return (
    <>
    <h3>Search</h3>
    <input className='in'  type="text" placeholder='enter....' onChange={(e)=>{setSearch(e.target.value)}} />

    </>
  )
}
