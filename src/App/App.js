import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from '../Screen/Components/HomePage';
import styled from 'styled-components';

import './App.css';

const AppWrapper = styled.div `
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        defaultTitle='Premshare'
        >
        <meta name="description" content="Share only premium content"/>
      </Helmet>
      <HomePage />
    </AppWrapper>
  );
}
