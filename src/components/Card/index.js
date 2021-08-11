import React from 'react';
import styled from 'styled-components';

import Shirt from '../../img/shirt-white.jpg';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const CardContainer = styled.div`
  width: max(24.5%, 150px);
  height: clamp(300px, 310px, 350px);
  background: red;
  position: relative;
  color: #FFF;
  transition: 0.5s ease-in-out;

  margin-bottom: 7px;


  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
  }

  &:hover:before{
    opacity: 1;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top:0;
    left: 0;
  }

  .info {
    position: relative;
    z-index: 3;
    color: #FFF;
    opacity: 0;
    transition: 0.5s all;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: rgba(0,0,0,.7);
    height: 100%;
    padding: 15% 7%;

    .title {
      h4{
        margin-bottom: 10px;
      }
    }

    .end {

      .action {
        display: flex;
        align-items: center;
        margin-top: 10px;

        button {
        padding: 5px 15px;
        background: transparent;
        border: 1px solid #FFF;
        color: #FFF;
        }

        icon {
          margin-left: 10px;
        }
      }

      
    }

  }

  &:hover .info {
    opacity: 1;

  }

`;


function Card() {
  return (

    <CardContainer>
        <img src={Shirt}/>
        <div className="info">
          <div className="title">
              <h4>Camiseta branca</h4>
              <span>⭐ 4.7</span>
          </div>
          <div className="end">
              <span>R$ 117,99</span>
              <div className="action">
                <button>Comprar</button>
                <AiOutlineHeart style={{marginLeft:'10px'}}/>
                <AiOutlineShoppingCart style={{marginLeft:'10px'}}/>
              </div>
          </div>
        </div>
    </CardContainer>


  );
}

export default Card;