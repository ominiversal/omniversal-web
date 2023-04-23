import React from 'react';
import styled from 'styled-components';

import './App.css';
import Hero from './components/Hero'


function App() {
  return (
    <Main>
      <Hero />
    </Main>
  );
}

export default App;

const Main = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  padding-top: 5px;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
`;
