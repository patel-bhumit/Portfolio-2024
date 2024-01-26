import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";


export default function CanvasComponent() {
  return (
    <div className="canvas">
        <Suspense>
        <Canvas shadows={['true']} camera={{ position: [0, 0, 3] }}>
            <OrbitControls autoRotate ={"true"} autoRotateSpeed={5} enableZoom={false} />
            <ambientLight color="lightblue" position={[0, 0, 5]} />
            <mesh>
            <boxGeometry arg={[1,1,1]} />
            <meshPhongMaterial color={0xffffff} reflectivity={1.5}  />
            </mesh>
        </Canvas>
        </Suspense>
    </div>
  );
}
