import React from 'react';
import styled from 'styled-components';

import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Menu = styled.header`

    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;

    button {
        width: 90px;
        height: 100%;
        background-color: #62666D;
        border: none;
    }
      
`;

const MenuRight = styled.div`

  width: calc(100% - 80px);
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

    h1 {
      font-size: 25px;
    }

    ul {
      display: flex;
      align-items: center;

      li {
        list-style: none;
        padding: 10px;
        margin: 0 5px;

        button {
          background-color: #2D1E1C;
          border: none;
          padding: 10px 5px;
          color: #fff;
          font-weight: 600;
        }
      }
    }

`;


function Header() {
  return (
    <Menu>
        <button></button>

        <MenuRight>
          <h1>FerShopping.</h1>
          
          <ul>
              <li><BsSearch /></li>
              <li><AiOutlineHeart /></li>
              <li><AiOutlineShoppingCart /></li>
              <li><button>Login</button></li>
          </ul>
        </MenuRight>
    </Menu>
  );
}

export default Header;