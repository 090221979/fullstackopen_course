// Implement a search field that can be used to filter the list of people by name  

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-123456', id:1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Arto Hellas', number:'040-123456', id:5}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch,setNewSearch] = useState('')

  const DisplayName = ({name,number,id})=>
    {
      return <p>name:{name} number:{number} id:{id}</p>
    }

  function addToPhoneBook(e)
  {
    e.preventDefault()
  
    const found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase())
    found != undefined ? alert(`${newName} already in phonebook`) :   setPersons(persons.concat({name:newName,number:newNumber,id:persons.length+1}))
    setNewName('')
    console.log(newNumber)
    setNewNumber('')
  }

const personsToShow = persons.filter((item)=>
      {
        return item.name.toLowerCase().includes(newSearch.toLowerCase())
      })
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter By Name: <input value={newSearch} onChange={(e)=>setNewSearch(e.target.value)}/>
        
      </div>
      <form onSubmit={addToPhoneBook}>
        <div>
          name: <input value={newName} onChange={(e)=>setNewName(e.target.value)} required/>
          <div>
           
          </div>
        </div>
        <div>
          telephone: <input 
                       type='tel' 
                       value={newNumber} 
                       placeholder="0000-000-0000"
                       required
                       onChange={(e)=>setNewNumber(e.target.value)}/>
         <span>Please include "-" when entering telephone number</span>              
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
        personsToShow.map((value)=><DisplayName key={value.id} name={value.name} number ={value.number} id={value.id}/>)
        }
      </div>
    </div>
  )
}

export default App
