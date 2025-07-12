"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useSignalR } from "@/hooks/useSignalR";

// Dynamically import MapContainer (client only)
const Map = dynamic(() => import("@/components/LiveMap"), { ssr: false });

const Receiver = () => {
  const [location, setLocation] = useState<{
    lat: number;
    lon: number;
    userName: string;
  } | null>(null);

  useSignalR((data) => {
    if (data) {
      setLocation(data);
    }
  });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Real-time Location Receiver</h1>
      <Map location={location} />
    </div>
  );
};

export default Receiver;
