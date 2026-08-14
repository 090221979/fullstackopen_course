import React from 'react'

function Header({course})// Header takes care of rendering the name of the course,
{
  return <h1>{course}</h1>
}

const Part = (props)=>
    {
      return<p>{props.name} {props.exercise}</p>
    }

function Content({ part1, part2, part3, exercises1, exercises2, exercises3})// Content renders the parts and their number of exercises
{

  return(
    <div>
        <Part name={part1} exercise={exercises1}/>
      
        <Part name={part2} exercise={exercises2}/>
   
        <Part name={part3} exercise={exercises3}/>

    </div>
  )
}


function Total({exercises1,exercises2,exercises3})
{
  return  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

export default function App()
{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return(
    <div>
       <Header course={course}/>
      
       <Content 
         part1={part1}
         part2={part2}
         part3={part3}
         exercises1={exercises1}
         exercises2={exercises2}
         exercises3={exercises3}
         />
      
       <Total 
         exercises1={exercises1} 
         exercises2={exercises2} 
         exercises3={exercises3}/>
    </div>
  )
}
