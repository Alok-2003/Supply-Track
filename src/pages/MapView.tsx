import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { IndiaMap } from '../components/Map/IndiaMap';
import { Vehicle } from '../components/Map/Vehicle';
import { VehicleInfo } from '../components/UI/VehicleInfo';
import { useMapStore } from '../store/useMapStore';
import { Truck } from '../components/Map/Truck';

// Mock data - in a real app, this would come from an API
const mockVehicles = [
  {
    id: '1',
    registration: 'MH-12-AB-1234',
    position: [1, 5, 0] as [number, number, number], 
    material: 'Electronics',
    destination: 'Mumbai',
    eta: '2h 30m',
    health: 45,
    emissions: 15.5,
    fuelEfficiency: 8.2,
    driver: {
      name: 'Ravi Kumar',
      contact: '+91 9876543210',
    },
    weather: {
      temperature: 32,
      condition: 'Sunny',
    },
  },
  {
    id: '2',
    registration: 'DL-05-CD-5678',
    position: [2, 8, 0] as [number, number, number],
    material: 'Perishables',
    destination: 'Delhi',
    eta: '3h 15m',
    health: 80,
    emissions: 18.2,
    fuelEfficiency: 7.5,
    driver: {
      name: 'Priya Singh',
      contact: '+91 9876543211',
    },
    weather: {
      temperature: 28,
      condition: 'Partly Cloudy',
    },
  },
  {
    id: '3',
    registration: 'WB-02-EF-9012',
    position: [1, 2, 0] as [number, number, number],
    material: 'Medicine',
    destination: 'Kolkata',
    eta: '1h 30m',
    health: 85,
    emissions: 12.5,
    fuelEfficiency: 8.2,
    driver: {
      name: 'Amit Roy',
      contact: '+91 9876543212',
    },
    weather: {
      temperature: 22,
      condition: 'Cloudy',
    },
  },
];

export function MapView() {
  const updateVehicles = useMapStore((state) => state.updateVehicles);

  React.useEffect(() => {
    updateVehicles(mockVehicles);
  }, [updateVehicles]);

  return (
    <div className="w-full h-[calc(100vh-4rem)] relative">
      <Canvas
        shadows
        camera={{ position: [0, 20, 10], fov: 60 }}
        className="bg-gray-900"
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1}
            castShadow
          />
          <IndiaMap />
          <Truck />
          {mockVehicles.map((vehicle) => (
            <Vehicle key={vehicle.id} data={vehicle} />
          ))}
          <OrbitControls />
        </Suspense>
      </Canvas>

      <VehicleInfo vehicles={mockVehicles} />

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Supply Chain Status</h3>
        <div className="flex gap-4">
          <div>
            <p className="text-sm text-gray-600">Active Vehicles</p>
            <p className="text-xl font-bold">{mockVehicles.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">On-Time Delivery</p>
            <p className="text-xl font-bold text-green-600">94%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
