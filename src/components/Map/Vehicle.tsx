import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import { VehicleData } from '../../types/Vehicle';
import { useMapStore } from '../../store/useMapStore';

interface VehicleProps {
  data: VehicleData;
}

export function Vehicle({ data }: VehicleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const setSelectedVehicle = useMapStore((state) => state.setSelectedVehicle);
  const time = useRef(0);

  // Define a looping curve path
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.5, -2.3),
      new THREE.Vector3(3.5, 0.5, -1),
      new THREE.Vector3(3, 0.5, 0.01),
      new THREE.Vector3(2, 0.5, 1),
      new THREE.Vector3(1, 0.5, 2.),
      new THREE.Vector3(0.4, 0.5, 3),
      new THREE.Vector3(-5, 0.5, 3),
      new THREE.Vector3(-5, 0.5, 0),
      new THREE.Vector3(-5, 0.5, -4), // Closing the loop
    ], true);
  }, []);

  // Calculate path points for visualization
  const pathPoints = useMemo(() => {
    const points = curve.getPoints(100); // Generate 100 points along the curve
    return points;
  }, [curve]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Increment time to move along the curve
      time.current = (time.current + delta * 0.03) % 1;

      // Get position and tangent (for rotation) on the curve
      const position = curve.getPointAt(time.current); // Position at the current time
      const tangent = curve.getTangentAt(time.current).normalize(); // Direction of movement

      // Update vehicle position
      groupRef.current.position.copy(position);

      // Update vehicle rotation to face the direction of movement
      const angle = Math.atan2(tangent.x, tangent.z);
      groupRef.current.rotation.y = angle;
    }
  });

  return (
    <>
      {/* Render the curve path */}
      <Line
        points={pathPoints}
        color={data.id === '1' ? "blue" : "green"}
        lineWidth={1}
        dashed={false}
      />

      <group
        ref={groupRef}
        onClick={() => setSelectedVehicle(data)}
        scale={[0.2, 0.2, 0.2]} // Reduced scale
      >
        {/* Cabin */}
        <mesh position={[0, 1, 1.5]} castShadow>
          <boxGeometry args={[2, 1.4, 1.2]} />
          <meshStandardMaterial color="#2C5F2D" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Windshield */}
        <mesh position={[0, 1.4, 1.1]} rotation={[Math.PI * 0.1, 0, 0]}>
          <boxGeometry args={[1.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#97BFB4" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Cargo Container */}
        <mesh position={[0, 1.3, -0.8]} castShadow>
          <boxGeometry args={[2.2, 2, 4]} />
          <meshStandardMaterial color="#1E5128" metalness={0.4} roughness={0.6} />
        </mesh>

        {/* Wheels */}
        <Wheel position={[-1.1, 0.3, 1.5]} /> {/* Front Left */}
        <Wheel position={[1.1, 0.3, 1.5]} /> {/* Front Right */}
        <Wheel position={[-1.1, 0.3, -0.8]} /> {/* Back Left */}
        <Wheel position={[1.1, 0.3, -0.8]} /> {/* Back Right */}
        <Wheel position={[-1.1, 0.3, -2]} /> {/* Trailer Left */}
        <Wheel position={[1.1, 0.3, -2]} /> {/* Trailer Right */}

        {/* Headlights */}
        <mesh position={[-0.8, 0.5, 2.1]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.8, 0.5, 2.1]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>

        {/* Grill */}
        <mesh position={[0, 0.5, 2]}>
          <boxGeometry args={[1.8, 0.6, 0.1]} />
          <meshStandardMaterial color="#2C3333" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </>
  );
}

// Wheel component for reusability
function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 8]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
        <meshStandardMaterial color="#1B1B1B" metalness={0.5} roughness={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.31, 16]} />
        <meshStandardMaterial color="#383838" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
}
