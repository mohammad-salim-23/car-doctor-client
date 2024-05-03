import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import axios from 'axios';
const Login = () => 
  {
     const navigate = useNavigate();
     const location = useLocation();
     console.log(location)
    const {SignIn} = useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
       
        const email = form.email.value;
        const password = form.password.value;
        SignIn(email,password)
        .then(res=>{
          const logedInUser = res.user;
          console.log(logedInUser)
          const user = {email};

                axios.post('http://localhost:5000/jwt',user)
                .then(res=>{
                 console.log(res.data);
                })
                .catch((error)=>{
                  console.log(error);
                })
            console.log(res)
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });

          // navigate(location?.state ?location?.state: '/')
          // get access token

        })
        .error()

       
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
     <img src={login} alt="" />
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleLogin}>
<div className="card-body">
<h1 className="text-3xl text-center font-bold">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
             name="email"
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name="password"
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-outline bg-[#FF3811]" type="submit" value="Login" />
        </div>
        <p>Have an account? <Link className='font-bold text-[#FF3811]' to='/signup'>Sign Up</Link> </p>
      </div>
</form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;