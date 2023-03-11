import React from 'react'
import { Float, OrbitControls, RenderTexture,Text, PerspectiveCamera  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Cube from './Cube'


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
            
            <Cube/>
</Canvas>
</Left>

<Right>
          <Title>Think outside the square space</Title>
            <Subtitle>Who we Are</Subtitle>
          
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
</Right>
    </Section>
  )
}
