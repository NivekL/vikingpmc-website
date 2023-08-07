import React, { useState } from "react";
import styled from "styled-components/macro";

const Navbar = () => {
  const [sideNavState, setSideNavState] = useState(false);

  return (
    <NavbarWrapper>
      <LogoContainer>
        <Logo src="/assets/Logo.svg" alt="" />
      </LogoContainer>
      <MenuBtn onClick={() => setSideNavState(true)}>&#9776;</MenuBtn>
      <SideNav isOpen={sideNavState}>
        <CloseBtn onClick={() => setSideNavState(false)}>&times;</CloseBtn>
        <NavLinkList>
          <NavItem>
            <NavItemLink>About us</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>Information</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink>VKN mod</NavItemLink>
          </NavItem>
        </NavLinkList>
      </SideNav>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  padding: 16px 0;
`;

const Logo = styled.img``;

const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 42px;
  cursor: pointer;
`;

const SideNav = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 350px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #1a1a1c;
  overflow-x: hidden;
  transform: ${({ isOpen }) => (isOpen ? "translate(0)" : "translate(100%)")};
  transition: 0.5s;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 42px;
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`;

const NavLinkList = styled.ul`
  padding: 0;
  margin: 55px 0 0 16px;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin: 15px 0;
`;

const NavItemLink = styled.button`
  font-family: "Assistant", sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
`;
