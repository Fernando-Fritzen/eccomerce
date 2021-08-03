import React from 'react';
import styled from 'styled-components';

import WinterCoat from '../../img/winterCoat.jpg';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

const Container = styled.div`

    width: 85%;
    height: 400px;
    display: flex;
    padding: 1%;
    margin-top: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        height: 100%;

        padding: 4%;

        h4 {
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 20px;
        }
    }

    .right {
        width: 40%;
        height: 100%;
        position: relative;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            object-fit: cover;
        }
    }
`;

const Title = styled.div`
    
    h4 {

    }

    .select {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        div.color {
        display: flex;
        }
    }

    div.buy {
    display: flex;
    align-items: center;
    margin-top: 40px;

    button {
      background: transparent;
      border: 2px solid #000;
      padding: 10px 20px;
      margin-right: 20px;
    }

    svg {
      margin-right: 20px;
    }

  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

`;

const Color = styled.div`
  display: flex;
  flex-direction: row;

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    margin-right: 4px;
    margin-top: 5px;
  }
  
`;

function CardCollection() {
  return (

    <Container>
        <div className="left">
            <Title>
                <h4>CASACO PARA O INVERNO FEMININO</h4>

                <p>Traga á tona a sua moda interna com a nossa bela coleção de inverno</p>

                <div className="select">

                    <Box>
                        <span>Preço:</span>
                        <h3>R$ 117.99</h3>
                    </Box>
                    <Box className="color">
                        <span>Cor:</span>
                        <Color>
                            <div />
                            <div />
                            <div />
                        </Color>
                    </Box>
                    <Box>
                        <span>Tamanho:</span>
                        <span>S  M  L XL</span>
                    </Box>
                </div>
            
                <IconContext.Provider value={{ size:'1.5em' }}>
                    <div className="buy">
                    <button>Comprar agora</button>
                    <AiOutlineHeart />
                    <AiOutlineShoppingCart />

                    </div>
                </IconContext.Provider>
            </Title>

        </div>
        <div className="right">
            <img src={WinterCoat} />
        </div>
    </Container>

  );
}

export default CardCollection;