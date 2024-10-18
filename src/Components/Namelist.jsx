import React from 'react'
import Person from './Person'

function Namelist() {
    // const name = ['Chantha','Bro code','Rean code']
    const person = [
        {
            id: 1001,
            name: 'John',
            age: 36,
            position: 'Web developer'
        },
        {
            id: 1002,
            name: 'chantha',
            age: 18,
            position: 'Full stack development'
        },
        {
            id: 1003,
            name: 'thomas',
            age: 30,
            position: 'App developer'
        },
        {
            id: 1004,
            name: 'Alibaba',
            age: 32,
            position: 'Freelancer'
        }
    ]
    const personList = person.map(persons => (<Person key={persons.name} persons={persons}/>))
  return (
    <div>
      {
        personList
      }
    </div>
  )
}

export default Namelist
