/** @format */

// import React from 'react'
// import { useRef, useState } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { DoubleSide } from 'three'

// export default function Terrain() {
//       // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.001))
//   return (
//              <mesh
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <planeGeometry args={[60, 60,100,100]} />
//       <gridHelper size={10} divisions={10} color={0xff0000} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} side={DoubleSide} />
//     </mesh>

//   )
// }
