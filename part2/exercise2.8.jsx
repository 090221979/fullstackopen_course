// Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler 
//removed strict UK phone pattern recognition for HTML pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"  

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-123456', id:1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
//null forces useState to switch from a "controlled component" to an "uncontrolled component."

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addToPhoneBook}>
        <div>
          name: <input value={newName} onChange={(e)=>setNewName(e.target.value)} required/>
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
        persons.map((value)=><DisplayName key={value.id} name={value.name} number ={value.number} id={value.id}/>)
        }
      </div>
    </div>
  )
}

export default App
