import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Image from './img/jonathan-borba.png';
import Shirt from './img/shirt-white.jpg';
import Shirt2 from './img/shirt.jpg';

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaTshirt, FaRedhat, FaSocks } from "react-icons/fa";
import { GiShirt, GiSonicShoes, GiShorts, GiArmoredPants, GiUnderwear } from "react-icons/gi";
import { IconContext } from "react-icons";

import { Container } from './styles/style';

import Card from './components/Card';
import CardPopular from './components/CardPopular';
import CardCollection from './components/CardCollection';





const Main = styled.main`
  width: min(85vw, 1250px);
  margin: 0 auto;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  /* padding: 0 30px; */
`;

const Aside = styled.aside`
  width: 7%;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  background-color: red;
`;

const ContainerLeft = styled.div`
  width: 55%;
  /* padding-left: 15%; */
  

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
  /* padding-right: 10%; */
`;

const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;


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

  .cardContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .listAll {

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 0;

    button {
      padding: 15px 20px;
      background-color: transparent;
      border: 1px solid #000;
    }
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
    /* background: #62666D; */
    background: #3d3f43;
    color: #FFF;
    fill: red;
  }
`;

const Section2 = styled.section`

  width: 100vw;
  padding-left: 7.5%;
  padding-top: 40px;
  margin-top: 30px;
`;



function App() {
  return (
    <div className="App">
      <Header />

      <Main>
        <Aside />
        <ContainerLeft>
          <div className="title">
            <h1>Ver??o</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>

          <div className="select">
            <Box>
              <span>Pre??o:</span>
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
                <p>Cal??a</p>
              </Categoria>
              <Categoria>
                <GiSonicShoes />
                <p>Cal??ado</p>
              </Categoria>
              <Categoria>
                <FaRedhat />
                <p>Chap??u</p>
              </Categoria>
              <Categoria>
                <GiUnderwear />
                <p>Cueca</p>
              </Categoria>
            </IconContext.Provider>
          </div>

          <div className="cardContainer">
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Card ><img src={Shirt2}/></Card>
            <Card ><img src={Shirt}/></Card>
            <Card ><img src={Shirt2}/></Card> */}
          </div>
        
          <div className="listAll">
            <button>Todos os produtos</button>
          </div>
          
        </Container>

      </Section>
            
      <Section2 >
        <h2>Popular essa semana</h2>

        <CardPopular />
      </Section2>

      <Container style={{display:'flex', margin: '0 auto', justifyContent:'space-between'}}>
            <CardCollection />
            <CardCollection />
      </Container>

    </div>
  );
}

export default App;
