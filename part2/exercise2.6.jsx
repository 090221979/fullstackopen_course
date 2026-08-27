//In this part, we will only be adding names to the phonebook

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const DisplayName = ({name})=>
    {
      return <p>name:{name}</p>
    }

  function addToPhoneBook(e)
  {
    e.preventDefault()
    setPersons(persons.concat({name:newName}))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addToPhoneBook}>
        <div>
          name: <input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((value,index)=><DisplayName key={index} name={value.name}/>)}</div>
    </div>
  )
}

export default App
