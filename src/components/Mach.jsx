/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Mach.gltf --transform
Author: S3DCreation (https://sketchfab.com/S3DCreation)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercedes-project-one-1733a70259f44fe7947fe306e5149df6
Title: MERCEDES PROJECT ONE
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Mach-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.CARPAINT_2} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.CHROME} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.CHROME_BLACK} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.CARPAINT} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.GRILL_2} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MIRROR} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.PLASTIC_BLACK} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.HEADLIGHT_GLASS} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.STERRING_DECALS} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.SEAT_BELT} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.CARBON_FIBER} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.CARBON_FIBER} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.CHROME_RED} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.CHROME_ROUGH} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.BAKE_DISK} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.METAL_BLACK} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.PLASTIC_BLACK_SHINNY} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.SCREEN} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.PLASTIC_RUBBER} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.PLASTIC_SHINNY} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.NUMBERPLATE} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.HEADLIGHT_GLASS} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.LEATHER_BLACK} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.MERCEDES_LOGO} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.GAPFILL} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.TIRE_SIDEWALL} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.HEADLIGHT_GLASS} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.TAILLIGHT_GLASS} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.TIRE_TREAD} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.ALLOY} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.ALLOY} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.GRILL} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.PIANO_BLACK} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.RADIATOR} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.DECALS} />
      </group>
    </group>
  )
}

useGLTF.preload('/Mach-transformed.glb')
