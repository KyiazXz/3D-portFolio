import React from 'react'
import { Float, OrbitControls, RenderTexture,Text, PerspectiveCamera  } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


export default function Cube() {


  return (
    <mesh>
    <boxGeometry args={[2, 2, 2]}/>
    <meshLambertMaterial  >
        <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,2]}/> 
            <color attach="background" args={["white"]}/>
            <Text fontSize={0.5} color="black" >
              0101
            </Text>
        </RenderTexture>
    </meshLambertMaterial>
</mesh>

  )
}
