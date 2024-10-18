import React from 'react'

function Person({persons, key}) {
  return (
    <div>
      <h5 style={{textAlign:'center'}}>My name is {persons.name}. I am {persons.age}. I have ID: {persons.id}. And also my position is {persons.position}</h5>
    </div>
  )
}

export default Person
