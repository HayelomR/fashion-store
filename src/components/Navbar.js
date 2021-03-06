import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
          <div>
            <h1 className="name">Fashion <img src="/img/fashion.jpeg" alt="store" className="navbar-brand" />Store</h1>
              <div className="navbar navbar-expand-small navbar-dark px-sm-5">
                <Link to='/'>
                  <img src="/img/fashion.jpeg" alt="store" className="navbar-brand" />
                    </Link>
                      <ul className="navbar-nav align-items-center">
                         <li className="nav-item ml-5">
                           <Link to="/" className="nav-link"> Products </Link>
                          </li>
                        </ul>
                        <Link to='/cart' className="ml-auto">
                          <div className="ButtonContainer">
                            <span className="mr-2">
                             <i className="fas fa-cart-plus" />
                             </span>
                             Cart
                          </div>
                        </Link>
                   </div>
            </div>
        );
    }
}


