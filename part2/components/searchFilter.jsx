import React,{useState} from 'react'


export default function FilteredNumbers({newSearch, persons})
{

    const DisplayName = ({name,number,id})=>
    {
      return <p>name:{name} number:{number} id:{id}</p>
    }
  
  const personsToShow = persons.filter((item)=>
      {
        return item.name.toLowerCase().includes(newSearch.toLowerCase())
      })
  
  return(
     <div style={{padding:'1em'}}>
        {
        personsToShow.map((value)=><DisplayName key={value.id} name={value.name} number ={value.number} id={value.id}/>)
        }
    
     </div>
  )
}
