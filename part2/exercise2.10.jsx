import React from 'react'
import { useState } from 'react'
import FilteredNumbers from './components/searchFilter'
import NameFilter from './components/DisplayNumbers'
import AddDetails from './components/addDetails'
const App = () => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-123456', id:1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Arto Hellas', number:'040-123456', id:5}
  ]) 
  const [newSearch,setNewSearch] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
       <NameFilter newSearch={newSearch} setNewSearch={setNewSearch}/>
        <AddDetails setPersons={setPersons} persons={persons} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
         <FilteredNumbers newSearch={newSearch} persons={persons} />
    </div>
  )
}

export default App
