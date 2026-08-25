//exercise 2.1
//Define a component responsible for formatting a single course called Course.
import React from 'react'

const Header = ({course})=>
  {
    return <h2>{course.name}</h2>
  }

const Part = ({name,exercises}) =>
  {
    return <p>{name} {exercises}</p>
  }

const Content = ({course})=>
  {
    return(
      <div>
         {course.parts.map((value)=>
        <Part key={value.id} name={value.name} exercises={value.exercises}/>)}
      </div>
 
    ) 
  }

const Course = ({course})=>
  {
    return (
      <div>
         <Header course={course}/>
         <Content course={course}/>
      </div>
    )
  }

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
