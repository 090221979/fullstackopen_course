//Prevent the user from being able to add names that already exist in the phonebook.

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
  
    const found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase())
    found != undefined ? alert(`${newName} already in phonebook`) :   setPersons(persons.concat({name:newName}))
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
      <div>
        {
        persons.map((value,index)=><DisplayName key={index} name={value.name}/>)
        }
      </div>
    </div>
  )
}

export default App
