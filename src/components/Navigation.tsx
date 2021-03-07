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

const ItemWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  height: 100%;
  margin-left: auto;
  margin-right: 15%;
`;

const ItemN = styled.span`
  color: #cdcdcd;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

const Navigation: React.FC = () => (
  <Container>
    <LogoWrapper to="/">
      <Logo src="/images/logo text.png" />
    </LogoWrapper>
    <ItemWrapper>
      <ItemN
        onClick={() => {
          // eslint-disable-next-line
          alert('이 페이지는 신입생을 선발한 후에 활성화될 예정입니다.');
        }}
      >
        멤버
      </ItemN>
      <ItemN
        onClick={() => {
          document.location.href = 'https://facebook.com/command2021';
        }}
      >
        소셜 미디어
      </ItemN>
      <ItemN
        onClick={() => {
          document.location.href = 'https://open.kakao.com/me/command2021';
        }}
      >
        Contact Us
      </ItemN>
    </ItemWrapper>
  </Container>
);

export default Navigation;
