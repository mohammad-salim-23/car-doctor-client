import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
const NavBar = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch()
  }
  const navItems = <>
      <li className="text-xl font-bold"><Link to='/'>Home</Link></li>
      <li className="text-xl font-bold"><Link to='/about'>About</Link></li>
     {
      user?.email? <>
      <li className="text-xl font-bold"><Link to='/bookings'>MyBookings</Link></li>
      <li className="text-xl font-bold"><button  onClick={handleLogOut}>Log Out</button ></li>
      </>
      :<li className="text-xl font-bold"><Link to='/login'>Login</Link></li>
     

     }
      
      

  </>
    return (
        <div>
           <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
   <Link to="/" className="btn btn-ghost text-xl"> 
   <img src={logo} alt="" />
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-warning btn-outline">Appointment</a>
  </div>
</div> 
        </div>
    );
};

export default NavBar;