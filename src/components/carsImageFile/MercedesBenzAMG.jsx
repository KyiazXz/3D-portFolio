import React from 'react'
import styled from 'styled-components'


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


export  const MercedesBenzAMG= () => {
  return (
    <Main><Img src="./img/20Mercedes-AMGGTCoupe-Jellybean-GTR-SeleniteGrey.png" alt="car"></Img></Main>
    
  )
}
