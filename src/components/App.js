import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import GuestLoginPage from "../pages/GuestLoginPage";
import RoomsPage from "../pages/RoomsPage";
import { AuthProvider } from "../contexts/AuthContext";
import { RoomsProvider } from "../contexts/RoomsContext";
import RoomPage from "../pages/RoomPage";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <RoomsProvider>
              <Routes>
                <Route exact path="/profile" element={<PrivateRoute />}>
                  <Route exact path="/profile" element={<Profile />} />
                </Route>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<RoomsPage />} />
                </Route>
                <Route exact path="/room/:id" element={<PrivateRoute />}>
                  <Route exact path="/room/:id" element={<RoomPage />} />
                </Route>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/guest_login" element={<GuestLoginPage />} />
              </Routes>
            </RoomsProvider>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
