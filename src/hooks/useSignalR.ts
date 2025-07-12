import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";

const HUB_URL = "https://tech-test.raintor.com/Hub";

export const useSignalR = (onReceive: (data: any) => void) => {
  const connectionRef = useRef<signalR.HubConnection | null>(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(HUB_URL)
      .withAutomaticReconnect()
      .build();

    connectionRef.current = connection;

    connection.start().then(() => {
      console.log(" SignalR Connected");
      connection.on("ReceiveLatLon", (data) => {
        console.log(" Received:", data);
        onReceive(data);
      });
    });

    return () => {
      connection.stop();
    };
  }, [onReceive]);

  const sendLocation = (lat: number, lon: number, userName: string) => {
    connectionRef.current?.invoke("SendLatLon", lat, lon, userName);
  };

  return { sendLocation };
};
