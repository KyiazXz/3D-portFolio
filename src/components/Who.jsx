import React from 'react'
import { Float, OrbitControls, RenderTexture,Text, PerspectiveCamera,Stage  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Mers from "./threeDmers/Mers"



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    height: 100vh;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const Subtitle = styled.h2`
  color: #da4ea2;
  height: 20px;
  margin: 0px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export default function Who() {
  return (
    <Section>
<Left>
<Canvas>
<OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
  <Stage environment='city' intensity={0.6}>
    <Mers />
  </Stage>

<OrbitControls enableZoom={false} />
</Canvas>
</Left>

<Right>
          <Title>Mercedes-AMG Project ONE</Title>
            <Subtitle>a price of USD $2.72 million per unit</Subtitle>
          
          <Desc>
          On June 1, 2022, Mercedes-AMG revealed the production version of the AMG ONE. Production of the car began in August 2022. Currently, the car is the cover car for Forza Horizon 5.
          </Desc>
          <Button><a href='https://en.wikipedia.org/wiki/Mercedes-AMG_ONE#:~:text=The%20production%20version%20of%20the%20AMG%20ONE%20unveiled%20on%20June,which%20have%20been%20already%20sold.' >Click </a></Button>
</Right>
    </Section>
  )
}
