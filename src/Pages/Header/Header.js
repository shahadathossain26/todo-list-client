import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.error(err))

    }
    return (
        <div className="navbar bg-base-100 lg:px-10 lg:pt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/home'><li>Home</li></Link>

                    </ul>
                </div>
                <Link to='/'><div className='flex items-center'>
                    <img className='w-[30px] md:w-[40px] lg:w-[50px]' src={logo} alt="" />
                    <h1 className='text-xl md:text-2xl font-bold ml-2'>DoThat</h1>
                </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/home'><li>Home</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={handleLogout}><a href="/" className="btn btn-primary text-white">LogOut</a></button>
                        : <Link to='/'><a href="/" className="btn btn-primary text-white">logIn</a></Link>
                }
            </div>
        </div>
    );
};

export default Header;