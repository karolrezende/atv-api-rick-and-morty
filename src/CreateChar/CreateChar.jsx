import React from 'react'
import { AliveChar} from './styles'

export default function CreateChar(props) {
    const newName = props.char.name.substring(0,10)
    if(props.char.status==='Alive'){
        return(
            <AliveChar isAlive>
                <div >
                    <h2>{newName}</h2>
                    <p>{props.char.status} Uhu!</p>
                    <img src={props.char.image} alt="imagem personagem" />
                </div>
            </AliveChar>
        )
    }
    else{
        return(
            <AliveChar>
                <div>
                    <h2>{newName}</h2>
                    <p>{props.char.status} F</p>
                    <img src={props.char.image} alt="imagem personagem" />
                </div>
            </AliveChar>
        )
    }
}
