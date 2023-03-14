import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import React from 'react'



const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
 
  `
  const Main = styled.div`
  height: 700px;
  width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
  `

export default function MercedesAMGONE() {
  return (
    <Main><Img src="./img/Mercedes.png" alt='mers'>

</Img></Main>

    )
}
