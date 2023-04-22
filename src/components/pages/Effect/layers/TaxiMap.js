// import L from "leaflet";
// import { useEffect, useState } from "react";
// import React, { useRef } from 'react'

// const AnimatedMarker = ({ from, to, image }) => {
//   const [position, setPosition] = useState(from);
//   const markerRef = useRef(null);

//   useEffect(() => {
//     const marker = markerRef.current;

//     // Use setInterval to update the position of the marker every 100ms
//     const interval = setInterval(() => {
//       const lat = position.lat + (to.lat - from.lat) / 10;
//       const lng = position.lng + (to.lng - from.lng) / 10;
//       setPosition({ lat, lng });

//       // Update the marker's position
//       marker.setLatLng(position);
//     }, 100);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(interval);
//   }, []);

//   const icon = L.icon({
//     iconUrl: image,
//     iconSize: [70, 70]
//   });

//   return <L.Marker position={position} icon={icon} ref={markerRef} />;
// };

// export default AnimatedMarker;
