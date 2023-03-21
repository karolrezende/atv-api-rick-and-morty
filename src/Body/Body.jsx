import React from 'react'
import CreateChar from '../CreateChar/CreateChar'
import { Div } from './styles'
export default function Body(props) {

    console.log(props.charList)
  return (
    <>
        <h1>Personagens do Rick and Morty (vivos ou mortos)</h1>
        <Div>
            {props.charList.map((char, id)=> <CreateChar key={id} char={char}/>)}
        </Div>
    </>
  )
}
