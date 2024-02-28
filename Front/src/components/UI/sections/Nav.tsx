import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #3498db; /* Light blue background color */
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5em;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-right: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #2c3e50; /* Darker blue on hover */
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <Links>
        <LinkItem>
          <NavLink to="/">Home</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/login">Login</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/register">Register</NavLink>
        </LinkItem>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
