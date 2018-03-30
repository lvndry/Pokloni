import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';

styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41ADDD;
  color: #41ADDD;

  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;

class HomePage extends React.Component {
  render() {
    return (
    <Header />
    );
  }
}

export default HomePage;
