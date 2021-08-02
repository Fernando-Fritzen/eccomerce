import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Image from './img/jonathan-borba.png';

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaTshirt, FaRedhat, FaSocks } from "react-icons/fa";
import { GiShirt, GiSonicShoes, GiShorts, GiArmoredPants, GiUnderwear } from "react-icons/gi";
import { IconContext } from "react-icons";



const Main = styled.main`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const ContainerLeft = styled.div`
  width: 55%;
  padding-left: 15%;
  

  h1 {
    font-size: 96px;
    font-weight: 300;
  }

  p {
    font-size: 18px;
    line-height: 2;
    color: #8C96A9;
  }

  div.select {
    margin-top: 30px;
    display: flex;

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
  margin-right: 50px;

`;

const Color = styled.div`
  display: flex;
  flex-direction: row;

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
    margin-right: 4px;
    margin-top: 5px;
  }
  
`;

const ContainerRight = styled.div`
  width: 45%;
  text-align: right;
  padding-right: 10%;
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: min(85%, 1250px);
  background-color: rgba(0,0,0,.1);

  h2 {
    font-size: 40px;
    font-weight: 100;
  }

  div.iconContainer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
`;

const Categoria = styled.div`
  width: 85px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 5px;
  }

  &:hover {
    background: #62666D;
    color: #FFF;
    fill: red;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />

      <Main>
        <ContainerLeft>
          <div className="title">
            <h1>Verão</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>

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

        </ContainerLeft>
        <ContainerRight>
          <img src={Image} />
        </ContainerRight>
      </Main>
    
      <Section>
        <Container>
          <h2>Categoria</h2>

          <div className="iconContainer">
            <IconContext.Provider value={{ size:'1.5em', color:'#B8BCC9', className:'icon'}}>
              <Categoria>
                <FaTshirt />
                <p>Camiseta</p>
              </Categoria>
              <Categoria>
                <GiShirt />
                <p>Camisa</p>
              </Categoria>
              <Categoria>
                <FaSocks />
                <p>Meias</p>
              </Categoria>
              <Categoria>
                <GiShorts />
                <p>Shorts</p>
              </Categoria>
              <Categoria>
                <GiArmoredPants />
                <p>Calça</p>
              </Categoria>
              <Categoria>
                <GiSonicShoes />
                <p>Calçado</p>
              </Categoria>
              <Categoria>
                <FaRedhat />
                <p>Chapéu</p>
              </Categoria>
              <Categoria>
                <GiUnderwear />
                <p>Cueca</p>
              </Categoria>
            </IconContext.Provider>
          </div>
        </Container>
      </Section>

    </div>
  );
}

export default App;
