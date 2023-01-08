import React, { useEffect, useState } from "react";
import { Alert, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useRooms } from "../contexts/RoomsContext";

function RoomsPage() {
  const { currentUser, logout } = useAuth();
  const { rooms, addRoom } = useRooms();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      setError("");
      setLoading(true);
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
    setLoading(false);
  }

  const handleCreateRoom = () => {
    addRoom();
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      {currentUser.role === "admin" && (
        <Button disabled={loading} variant="primary" onClick={handleCreateRoom}>
          Создать комнату
        </Button>
      )}
      <Button disabled={loading} variant="primary" onClick={navigateToProfile}>
        Профиль
      </Button>
      <Button disabled={loading} variant="primary" onClick={handleLogout}>
        Выйти
      </Button>
      {error && <Alert variant="danger">{error}</Alert>}
      <ListGroup>
        {rooms.map((room, index) => {
          const id = room.id;
          return (
            <ListGroup.Item key={index}>
              <Link to={`/room/${id}`}>{`Комната ${id}`}</Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default RoomsPage;
