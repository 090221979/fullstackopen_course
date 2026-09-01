import React,{useState} from 'react'

export default function AddDetails({setPersons,persons,setNewName,setNewNumber,newName,newNumber})
{
    function addToPhoneBook(e)
  {
    e.preventDefault()
  
    const found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase())
    found != undefined ? alert(`${newName} already in phonebook`) :   setPersons(persons.concat({name:newName,number:newNumber,id:persons.length+1}))
    setNewName('')
    setNewNumber('')
  }
  
  return(
        <form onSubmit={addToPhoneBook} style={{padding:'1em'}}>
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
  )
}
