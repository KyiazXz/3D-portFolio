import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mach from "./Mach"

export default function WebDesign() {
  return (
<Canvas>
<OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
  <Stage environment='city' intensity={0.6}>
    <Mach />
  </Stage>

<OrbitControls enableZoom={false} />
</Canvas>

    )
}
