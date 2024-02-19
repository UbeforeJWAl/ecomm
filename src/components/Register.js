import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const Register=()=> {
  return (
    <div className="container login-container">
          
    <div className="col-md-12 col-sm-12">
        <div className='card shadow'>
            <div className='card-body p-5'>
                <h4 className='card-title text-center mt-3-fw-bold'>REGISTRATION FORM</h4>
                <form>
<div>
<label>First Name
<input type="text" className="  form-control " placeholder=' ' /></label></div>
<div>
<label>Last Name
<input type="email" className=" form-control " placeholder=' ' /></label>
</div>
<div>
<label>E-mail
<input type="text" className="  form-control " placeholder=' ' /></label></div>
<div>
<label>Password
<input type="password" className=" form-control  "placeholder=''/></label></div>

<div className= ' mt-3 d-grid'>
<button  className="custom-btn custom-btn-blue">
  <Link to="/add-sales">Sign Up</Link></button>
<div className='my-4'>
<hr className='text-muted'/>
<h5 className='text-muted text-center'>OR</h5>
<hr className='text-muted'/>
</div>
<div className='mt-3 mb-5 d-grid'>
<button  className=" custom-btn custom-btn-white">
<span className='text-muted '>Already Have an Account?</span>
<Link to="/login" className='ms-1 text-info fw-bold'>Log In</Link>
</button>

</div>
</div>
</form>
            </div>
        </div>
        </div>
        </div>
  );
};

export default Register;