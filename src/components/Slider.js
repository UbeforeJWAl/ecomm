import React from 'react'
import './slider.css';
import { BrowserRouter } from 'react-router-dom';





const Slider=()=> (
  
    <>
    <div className="row"/>
    <div className="col-sm-2">
        <div className="card" style={{ width: '200px' }}>
            <a href="shirtlogo.html" />
            <img className="card-img-top" src=''  alt="MEN jeans" />
            <div className="card-body">
                <h2 className="card-title">MEN jeans</h2>
                <hr />
                <h3>$35</h3>
                <p className="card-text">Lorem ipsum dolor sit amet</p>
                <br />
                <br />
                <a href="#" className="btn btn-md btn-success">add to cart</a>
            </div>
        </div>
    </div>
    <div className="c0l-sm-2">
        <div className="card" style={{ width: '200px' }}>
            <a href="shirtlogo.html" />
            <img className="card-img-top col-sm-2" src="images/menpants1.jpg" alt="GREY PANT" />
            <div className="card-body">
                <h2 className="card-title">GREY PANT</h2>
                <h3>$30</h3>
                <p className="card-text">Lorem ipsum dolor sit amet</p>
                <a href="#" className="btn btn-md btn-success">add to cart</a>
            </div>
        </div>
    </div>
    <div className="col-sm-2">
        <div className="card" style={{ width: '200px' }}>
            <a href="shirtlogo.html" />
            <img className="card-img-top" src="images/newpant2.jpg" alt="MEN FORMALS" />
            <div className="card-body">
                <h2 className="card-title">MEN FORMALS</h2>
                <h3>$18</h3>
                <p className="card-text">Lorem ipsum dolor sit amet</p>
                <br />
                <a href="#" className="btn btn-md btn-success">add to cart</a>
            </div>
        </div>
    </div>
    <div className="col-sm-2">
        <div className="card" style={{ width: '200px' }}>
            <a href="shirtlogo.html" />
            <img className="card-img-top" src="images/newpant3.jpg" alt="BLUE PANT" />
            <div className="card-body">
                <h2 className="card-title">BLUE PANT</h2>
                <h3>$25</h3>
                <p className="card-text">Lorem ipsum dolor sit amet</p>
                <br />
                <br />
                <br />
                <a href="#" className="btn btn-md btn-success">add to cart</a>
            </div>
        </div>
    </div>
    <div className="col-sm-2">
        <div className="card" style={{ width: '200px' }}>
            <a href="shirtlogo.html" />
            <img className="card-img-top" src="images/newpant4.jpg" alt="SKIN PANT" />
            <div className="card-body">
                <h2 className="card-title">SKIN PANT</h2>
                <hr />
                <h3>$15</h3>
                <p className="card-text">Lorem ipsum dolor sit amet</p>
                <br />
                <a href="#" className="btn btn-md btn-success">add to cart</a>
            </div>
        </div>
    </div>
    <div className="col-sm-2">
        <div className="card" style={{ width: '200px' }}>
        </div>
    </div></>
  );


export default Slider;
      