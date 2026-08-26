//exercise 2.3
//calculate the sum of exercises with the array method reduce
//exercise 2.4
//extend our application to allow for an arbitrary number of courses

import React,{useState} from 'react'

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
    const Totals = course.parts.reduce((sum,part)=>
      {
        return sum+part.exercises
      },0)

    return(
      <div>
         {
           course.parts.map((value)=>
              <Part 
                 key={value.id} 
                 name={value.name} 
                 exercises={value.exercises}/>)      
        }
        <div>Total of {Totals} exercises</div>
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


  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
    {courses.map(singleItem=> <Course course={singleItem} id={singleItem.id}/>)}
    </div>
  )
}

export default App
