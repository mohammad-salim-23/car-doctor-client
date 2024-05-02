import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
    const {SignIn,logOut} = useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
       
        const email = form.email.value;
        const password = form.password.value;
        SignIn(email,password)
        .then(res=>{
            console.log(res)
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