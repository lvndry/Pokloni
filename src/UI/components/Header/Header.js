import React, {Component} from 'react';

import Link from './Link';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="hh navbar-brand" role="navigation">
          <div className="hll navbar-start">
            <div className="navbar-link">
              <a>
                Premshare
              </a>
            </div>
          </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-dropdown">
                <h3>Categories</h3>
                <a className="navbar-item"> Dev </a>
                <a className="navbar-item"> Motivation </a>
                <a className="navbar-item"> Business </a>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
