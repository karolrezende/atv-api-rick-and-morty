import styled from "styled-components";

export const AliveChar = styled.span`
        width: 200px;
        height: 400px;
        background-color: ${props=> props.isAlive ? " #a7c957" : "#ffbaba"};;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        border-radius: 2em;
    img{
        width: 150px;
        border-radius: 50%;
        margin-top: 2em;
    }
    h2{
        color: ${props=> props.isAlive ? " #386641" : "#ff0000"};
        font-size: 20px;
    }
    p{
        color: ${props=> props.isAlive ? " #6a994e" : "#a70000"};;
    }
`