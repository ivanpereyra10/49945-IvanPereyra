import React from 'react';
import styled from 'styled-components';
import CartWidget from '../CartWidget/CartWidget';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
`;

const ButtonSection = styled.section`
  display: flex;
  gap: 10px;

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Title>LeBron</Title>
      <ButtonSection>
        <button>Buzos</button>
        <button>Remeras</button>
        <button>Pantalones</button>
      </ButtonSection>
      <CartWidget />
    </Nav>
  );
};

export default NavBar;
