import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"
import { Link } from 'react-router-dom';



const NavigationBar = () => (
  <><div>
    <header id="header">
      <input type="checkbox" name="" id="chk1" />
      <div className="logo"><h1>E-COMMERCE</h1></div>
      <div className="search-box">
        <form>
          <input type="text" name="search" id="srch" placeholder="product name,Category name,etc" />
          <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
      <ul>
        <li>
          <button className="btn1"><a href="#">login</a>
          </button></li>

        <li>
          <i className="fa-solid fa-cart-shopping"></i>

        </li>
      </ul>
      <div className="menu">
        <label for="chk1">
          <i className="fa fa-bars"></i>
        </label>
      </div>

    </header>
  </div>
  
  <br></br>
  <br></br>
  
  <hr></hr>
 
  <div>
      <header className="hd1">
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav " href="home.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav" href="allprod.html">ALL PRODUCTS</a>
            </li>
            <li className="nav-item">
              <a className="nav" href="feature.html">FEATURED PRODUCTS</a>
            </li>
            <li className="nav-item-dropdown">


             
              <li className="nav-item-dropdown">


                <li className="nav-item">
                  <ul className="nav nav-pills">
                    <a className="nav  dropdown-toggle " data-bs-toggle="dropdown"> MEN</a>
                    <ul className="dropdown-menu active">
                      <li> <a className="dropdown-item" href="allprod.html">ALL PRODUCTS </a></li>
                      <li><a className="dropdown-item" href="menshirts.html">SHIRTS</a></li>
                      <li><a className="dropdown-item" href="menpants.html">PANTS</a></li>
                      <li><a className="dropdown-item" href="menhod.html">HOODIES</a></li>
                    </ul>
                  </ul>
                </li>
              </li>
            </li>
            <li className="nav-item">

              <a className="nav " href="kids.html">KIDS</a>
            </li>
            <li className="nav-item">

              <a className="nav " href="#">Logout</a>
            </li>
          </ul>
        </div>



        <script src="jquery-3.3.1.min.js"></script>

      </header>
    </div></>
      
      );

      export default NavigationBar;