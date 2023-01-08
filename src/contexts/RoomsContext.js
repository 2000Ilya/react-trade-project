import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RoomsContext = React.createContext();

export function useRooms() {
  return useContext(RoomsContext);
}

export function RoomsProvider({ children }) {
  const [rooms, setRooms] = useState([]);

  const addRoom = () => {
    setRooms((rooms) => {
      console.log("room");
      return [...rooms, { id: uuidv4() }];
    });
  };

  const value = { rooms, addRoom };

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
}
