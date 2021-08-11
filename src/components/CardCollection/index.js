import React from 'react';
import styled from 'styled-components';

import BlackTshirt from '../../img/black-tshirt.jpg';

const CardContainer = styled.div`

    width: 49%;
    height: 300px;
    display: flex;
    margin-top: 80px;
    /* background-color: rgba(0,0,0,.1); */
    margin-bottom: 300px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .left {
        width: 55%;
        padding: 0 5%;
        border-right: 1px solid black;

        h5 {
            font-weight: 600;
        }

        .information {
            height: 100%;
            padding: 20% 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            button {
                padding: 10px;
                background: #3d3f43;
                color: #FFF;
                border: none;
                font-weight: 500;
            }
        }

    }
    .right {
        width: 45%;
        position: relative;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;



function CardCollection() {
  return (
      <CardContainer>
          <div className="left">
            <h5>NOVA COLEÇÃO</h5>

            <div className="information">
                <h4>PEÇAS ESCURAS</h4>
                <p>Vista-se de forma sofisticada com a nossa nova coleção de roupas todas escuras</p>
                <button>Ver Coleção</button>
            </div>

          </div>
          <div className="right">
            <img src={BlackTshirt} />
          </div>
      </CardContainer>
  );
}

export default CardCollection;