"use client";

import { useSignalR } from "@/hooks/useSignalR";
import React, { useState } from "react";

const Sender = () => {
  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();
  const [userName, setUserName] = useState("");

  const { sendLocation } = useSignalR(() => {});

  const handleSend = () => {
      if (lat && lon && userName) {
        const data = {lat,lon,userName}
      sendLocation( lat, lon, userName );
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">📤 Location Sender</h1>
      <label className="block mb-2">Latitude:</label>
      <input
        type="number"
        value={lat}
        placeholder="Enter Latitude "
        onChange={(e) => setLat(Number(e.target.value))}
        className="border p-2 w-full mb-4"
      />
      <label className="block mb-2">Longitude:</label>
      <input
        type="number"
        value={lon}
        placeholder="Enter Longitude"
        onChange={(e) => setLon(Number(e.target.value))}
        className="border p-2 w-full mb-4"
      />
      <label className="block mb-2">User Email:</label>
      <input
        type="text"
        placeholder="User Name"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleSend}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send Location
      </button>
    </div>
  );
};

export default Sender;
