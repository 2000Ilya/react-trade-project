import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useRooms } from "../contexts/RoomsContext";
//набор участников закончен
function RoomPage() {
  const { id } = useParams();
  const { rooms } = useRooms();
  const navigate = useNavigate();
  const currentRoom = rooms.find((room) => room.id === id);
  console.log(currentRoom, rooms, id);

  useEffect(() => {
    if (!currentRoom) {
      navigate("/");
    }
  }, []);

  const startTimer = () => {};

  return (
    <>
      <Button onClick={startTimer}>Запустить таймер</Button>
    </>
  );
}

export default RoomPage;
