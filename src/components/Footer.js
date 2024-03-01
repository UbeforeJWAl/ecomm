import React from 'react';
import './footer.css';
import { BrowserRouter } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="container1" />
            <div className="row">
                <div className="footer-col">
                    <h4><u>WOMEN</u></h4>
                    <ul>
                        <li><a href="#">ALL PRODUCTS</a></li>
                        <li><a href="#">DRESS</a></li>
                        <li><a href="#">PANTS</a></li>
                        <li><a href="#">SKIRTS</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4><u>MEN</u></h4>
                    <ul>
                        <li><a href="#">ALL PRODUCT</a></li>
                        <li><a href="#">SHIRTS</a></li>
                        <li><a href="#">PANTS</a></li>
                        <li><a href="#">HOODIES</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4><u>KIDS</u></h4>
                    <ul>
                        <li><a href="#">ALL PRODUCTS</a></li>
                        <li><a href="#">SHIRTS</a></li>
                        <li><a href="#">PANTS</a></li>
                        <li><a href="#">HOODIES</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4><u>LINKS</u></h4>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <hr className="hr" />
            <p className="p">COPYRIGHTS @E-COMMERCE 2023-24</p>
        </>
    );
}

export default Footer;