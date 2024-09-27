import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header'; // Importando o Header

interface ServiceCardProps {
  $special?: boolean;
}
 
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div<ServiceCardProps>`
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${(props) => (props.$special ? '#ffc107' : 'white')};

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }

  button {
    background-color: ${(props) => (props.$special ? '#007bff' : '#ffc107')};
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 1rem;
  }

  button:hover {
    background-color: ${(props) => (props.$special ? '#0056b3' : '#e0a800')};
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Header /> {/* Uso do Header aqui */}
      <Section>
        <h2>Conheça os serviços que oferecemos a você!</h2>
        <ServicesGrid>
          <ServiceCard>
            <h3>Serviço de Encanamento</h3>
            <p>texto texto</p>
            <img src="1.png" alt="Icon" />
          </ServiceCard>
          {/* Outros cards */}
          <ServiceCard $special>
            <h3>Não encontrou o que procurava?</h3>
            <Button>TODOS SERVIÇOS</Button>
          </ServiceCard>
        </ServicesGrid>
      </Section>
      <Footer>
        <p>Nec sociosqu eu reiciendis esse fames nostrud habitasse! Purus imperdiet atque nulla? Aliquid, ullamcorper auctor?</p>
      </Footer>
    </Container>
  );
};

export default Home;
