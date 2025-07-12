'use client'
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSignalR } from "@/hooks/useSignalR";

const Receiver = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number; userName: string } | null>(null);
    // console.log('receive page',location)
    useSignalR((data) => {
      
    setLocation(data);
  });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4"> Real-time Location Receiver</h1>
      {location ? (
        <MapContainer
          center={[location.lat, location.lon]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[location.lat, location.lon]}>
            <Popup>{location.userName}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-gray-600">Waiting for location...</p>
      )}
    </div>
  );
};

export default Receiver;

