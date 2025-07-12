"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LiveMap = ({
  location,
}: {
  location: { lat: number; lon: number; userName: string } | null;
}) => {
  if (!location)
    return <p className="text-gray-600">Waiting for location...</p>;

  return (
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
  );
};

export default LiveMap;
