
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`



const Container = styled.div`

background-color: black;
width: 70vw;
height: 100%;
max-height: 100%;
color: wheat;
padding: 15%;




input{
height: 20px;
font-size: medium;
margin-left: 5px;
}

`
const Listpart = styled.div`

background-color: #250f33;

color: wheat;



div{

    margin: 2%;
    padding: 4%;
    width: 70%;
    display: flex;
    flex-direction: column;
}



`


const Button =styled.a`

  background-color: #7c0bb8;
  color: #250f33;
  border: solid;
  font-family: Verdana;
  font-weight: 200;
  font-size: medium;
  color: wheat;
  height: 30px;
  border-color: #5a22a3;
  padding-right: 2%;
  padding-left: 2%;
  margin-left: 1px;
  `

Button.displayName = 'button';
 export {Container, Listpart, Button}
