import React from 'react';

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((item) => {
        return (
          <Part
            name={item.name}
            key={item.id}
            id={item.id}
            exercises={item.exercises}
          />
        );
      })}
    </div>
  );
};

const Course = ({ course }) => {
  const Totals = course.parts.reduce((sum, value) => {
    return sum + value.exercises;
  }, 0);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <p>Course Totals {Totals}</p>
    </div>
  );
};

export default Course;
