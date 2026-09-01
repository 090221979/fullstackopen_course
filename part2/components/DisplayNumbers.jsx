import React from 'react'

export default function NameFilter({newSearch, setNewSearch})
{
  return   <div style={{padding:'1em'}}>Filter By Name: <input value={newSearch} onChange={(e)=>setNewSearch(e.target.value)}/></div>
}
