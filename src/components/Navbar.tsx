import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilização da Navbar
const NavbarContainer = styled.nav`
  background-color: #007bff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: white;
    color: #007bff;
  }
`;

// Componente da Navbar
const Navbar: React.FC = () => {
  const isAuthenticated = localStorage.getItem("token"); // Simulando login com token

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <NavbarContainer>
      <h1>Blog</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/create">Criar Post</Link>}
        {isAuthenticated && <Link to="/admin">Administração</Link>}
        {!isAuthenticated ? <Link to="/login">Login</Link> : <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
