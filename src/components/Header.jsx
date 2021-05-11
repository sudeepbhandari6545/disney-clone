import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a>
          <img src="./images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="./images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="./images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="./images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="./images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="./images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-item: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  margin: 30px 0;
  margin-left: 20px;
  align-item: center;
  flex: 1;
  a {
    display: flex;
    align-item: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: white;
        left: 0;
        right: 0;
        bottom: -10px;
        position: absolute;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  padding: 5px 0;
  cursor: pointer;
`;
