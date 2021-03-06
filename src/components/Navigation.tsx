import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  display: flex;
  width: 100vw;
  height: 4.375rem;
  background-color: #000000;
`;

const Logo = styled.img`
  width: auto;
  height: 1.563rem;
  margin-bottom: 0.17rem;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  font-size: 1.563rem;
  font-weight: 800;
  text-decoration: none;
  color: #ffffff;
  align-items: center;
  height: 100%;
  margin-left: 15%;
  margin-right: auto;
`;

const LogoText = styled.span`
  margin-left: 1.25rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  height: 100%;
  margin-left: auto;
  margin-right: 15%;
`;

const Item = styled(Link)`
  color: #cdcdcd;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Navigation: React.FC = () => (
  <Container>
    <LogoWrapper to="/">
      <Logo src="/images/logo192.png" />
      <LogoText>Command</LogoText>
    </LogoWrapper>
    <ItemWrapper>
      <Item to="/member">Member</Item>
      <Item to="/social">Social Media</Item>
      <Item to="/contact">Contact Us</Item>
    </ItemWrapper>
  </Container>
);

export default Navigation;
