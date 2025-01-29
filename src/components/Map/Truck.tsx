import React from 'react';
import { useGLTF } from '@react-three/drei';

interface TruckProps {
  position?: [number, number, number];
}

export function Truck({ position = [0, 0, 0] }: TruckProps) {
  const { scene } = useGLTF('public/Truck_Scene/scene.gltf'); // Ensure correct path

  return <primitive object={scene} position={position} scale={[2, 2, 2]} />;
}

useGLTF.preload('public/Truck_Scene/scene.gltf'); // Preload the model for performance
