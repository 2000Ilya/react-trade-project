import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const GuestLoginPage = () => {
  const nameRef = useRef();
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setCurrentUser({ role: "guest", name: nameRef.current.value });
    navigate("/");
  }

  const navigateToAdminLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Введите ваше имя</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Войти
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={navigateToAdminLogin}>
          Войти как администратор
        </Button>
      </div>
    </>
  );
};

export default GuestLoginPage;
