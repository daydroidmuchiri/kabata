import dumpTruckImg from '../assets/howo-dump-truck.png';
import tractorHeadImg from '../assets/howo-tractor-head.png';
import mixerTruckImg from '../assets/howo-mixer-truck.png';

export const inventory = [
  // Dump Trucks
  {
    id: 1,
    model: 'HOWO 6x4 Dump Truck',
    category: 'Dump Trucks',
    description: 'Heavy-duty 6x4 dump truck designed for mining and construction sites. Reliable lifting mechanism.',
    specs: ['371 HP Engine', '25 Ton Capacity', 'HW19710 Transmission'],
    image: dumpTruckImg
  },
  {
    id: 101,
    model: 'HOWO 8x4 Mining Dump Truck',
    category: 'Dump Trucks',
    description: 'Extra capacity mining dump truck for extreme environments.',
    specs: ['420 HP Engine', '40 Ton Capacity', 'Reinforced Body'],
    image: dumpTruckImg // Placeholder
  },

  // Tractor Trucks
  {
    id: 2,
    model: 'HOWO 6x4 Tractor Head',
    category: 'Tractor Trucks',
    description: 'Powerful 6x4 prime mover for long-haul logistics. Spacious cabin with ergonomic design.',
    specs: ['420 HP Engine', 'Combined Weight 70 Tons', 'Air Suspension'],
    image: tractorHeadImg
  },
  {
    id: 201,
    model: 'HOWO A7 420HP Tractor',
    category: 'Tractor Trucks',
    description: 'Premium A7 series tractor head with advanced fuel efficiency.',
    specs: ['420 HP Engine', 'AMT Transmission', 'Luxury Cabin'],
    image: tractorHeadImg // Placeholder
  },

  // Mixer Trucks
  {
    id: 3,
    model: 'HOWO 6x4 Mixer Truck',
    category: 'Mixer Trucks',
    description: 'Efficient concrete mixer truck with uniform mixing technology. Durable drum material.',
    specs: ['336 HP Engine', '8m³ Drum Capacity', 'Hydraulic Drive System'],
    image: mixerTruckImg
  },

  // Cargo Trucks
  {
    id: 401,
    model: 'HOWO 6x4 Cargo Truck',
    category: 'Cargo Trucks',
    description: 'Versatile cargo truck for general logistics and transport.',
    specs: ['336 HP Engine', '20ft Cargo Body', 'Heavy Duty Axles'],
    image: dumpTruckImg // Placeholder
  },

  // Special Vehicles
  {
    id: 501,
    model: 'HOWO Water Tanker',
    category: 'Special Vehicles',
    description: 'High capacity water tanker for municipal and construction use.',
    specs: ['290 HP Engine', '20,000L Tank', 'High Pressure Pump'],
    image: mixerTruckImg // Placeholder
  },
  {
    id: 502,
    model: 'HOWO Fuel Tanker',
    category: 'Special Vehicles',
    description: 'Safe and reliable fuel transport vehicle with multiple compartments.',
    specs: ['336 HP Engine', '25,000L Capacity', 'Safety Valves'],
    image: mixerTruckImg // Placeholder
  },

  // Light Trucks
  {
    id: 601,
    model: 'HOWO Light Duty Truck',
    category: 'Light Trucks',
    description: 'Agile light truck for urban delivery and distribution.',
    specs: ['116 HP Engine', '4 Ton Capacity', 'Fuel Efficient'],
    image: dumpTruckImg // Placeholder
  },

  // Semi Trailers
  {
    id: 701,
    model: 'HOWO Flatbed Trailer',
    category: 'Semi Trailers',
    description: 'Three-axle flatbed trailer for container transport.',
    specs: ['40ft Length', 'Container Locks', 'Fuwa Axles'],
    image: tractorHeadImg // Placeholder
  }
];
