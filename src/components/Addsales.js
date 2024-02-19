import React from 'react'
import "./addsales.css"
import { Link } from 'react-router-dom'

const Addsales=()=> {
  return (
    <div className="container login-container">
          
    <div className="col-md-12 col-sm-12">
        <div className='card shadow'>
            <div className='card-body p-5'>
                <h4 className='card-title text-center mt-3-fw-bold'>ADD SALES</h4>
                <form >
<div>
<label>Product Name
<input type="text" className="  form-control " placeholder=' ' /></label></div>
<div>
<label>Quantity
<input type="email" className="  form-control " placeholder=' ' /></label>
</div>
<div>
<label>Amount
<input type="text" className="  form-control " placeholder=' ' /></label></div>


<div className='mt-3 mb-5 d-grid'>
<button  className=" custom-btn custom-btn-blue">

<Link to="/top-5-sales" className='ms-1 text-info fw-bold'>SUBMIT</Link>
</button>
</div>
</form>
</div>
</div>

            </div>
        </div>
        
  );
};

export default Addsales;