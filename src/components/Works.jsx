import React, { useState, lazy } from 'react'
import styled from 'styled-components'
import {MercedesBenzAMG}  from './carsImageFile/MercedesBenzAMG'
import  MercedesAMGONE from './carsImageFile/MercedesAMGONE'


const data = [
  "Mercedes-AMG ONE",
  "2020 Mercedes-Benz AMG",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
   
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

`;

const Right = styled.div`
  flex: 1;
`;


export default function Works() {
  const [work , setWork] = useState("Mercedes-AMG ONE")
  return (
    <Section>
      <Container>
        <Left>
        <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>
              {work === "Mercedes-AMG ONE" ? (
                <MercedesAMGONE/>
              ): work === "2020 Mercedes-Benz AMG" ? (
                <MercedesBenzAMG/>
              ): (
                <></>
              )}

        </Right>
      </Container>
    </Section>
  )
}
