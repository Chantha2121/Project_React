import React from 'react'

function Hero({heroName}) {
    if(heroName === "joker"){
        throw new Error('Not a hero!')
    }
  return (
    <div>
      <h1 style={{
        textAlign:'center'
      }}>{heroName}</h1>
    </div>
  )
}

export default Hero
