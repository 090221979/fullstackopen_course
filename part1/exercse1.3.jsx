import React from 'react'

function Header({course})
{
  return <h1>{course}</h1>
}

const Part = (props)=>
    {
      return<p>{props.name} {props.exercise}</p>
    }

function Content({ part1, part2, part3, exercises1, exercises2, exercises3})
{

  return(
    <div>
        <Part name={part1.name} exercise={part1.exercises}/>
      
        <Part name={part2.name} exercise={part2.exercises}/>
   
        <Part name={part3.name} exercise={part3.exercises}/>

    </div>
  )
}


function Total({part1,part2,part3})
{
  return  <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>

}

export default function App()
{

  const course = 'Half Stack application development'
    const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  
  return(
    <div>
       <Header course={course}/>
      
       <Content 
         part1={part1}
         part2={part2}
         part3={part3}/>
      
       <Total 
         part1={part1}
         part2={part2}
         part3={part3}/>
    </div>
  )
}
