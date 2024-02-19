import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import "./NavBar"
const Login=()=> {
  return (
    
    <div className="container login-container">
            
                <div className="col-md-12 col-sm-12">
                    <div className='card shadow'>
                        <div className='card-body p-5'>
                            <h4 className='card-title text-center mt-4-fw-bold'>Login form</h4>
                            <form >
  <div>
   <label>E-mail
    <input type="email" className="  form-control " placeholder='' /></label>
    </div>
  
  
   <label>Password
    <input type="password" className=" form-control "placeholder=''/></label>
  
  <div className= ' mt-3 d-grid'>
  <button  className="custom-btn custom-btn-blue">Log In</button>
  <div className='my-4'>
    <hr className='text-muted'/>
    <h5 className='text-muted text-center'>OR</h5>
    <hr className='text-muted'/>
  </div>
  <div className='mt-3 mb-5 d-grid'>
  <button  className=" custom-btn custom-btn-white">
    <span className='text-muted '>Don't Have an Account?</span>
    <Link to="/register" className='ms-1 text-info fw-bold'>REGISTER</Link>
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

export default Login