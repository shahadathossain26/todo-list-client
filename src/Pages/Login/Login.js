import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn, } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    return (
        <section className='my-28 block lg:flex justify-around'>

            <div className='w-full  md:w-[385px]  shadow-xl  border px-[29px] py-[25px] mx-auto'>
                <h2 className='text-xl text-center text-black'>Login</h2>

                <form onSubmit={handleSubmit()}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs text-black" />
                        {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full max-w-xs text-black" />
                        {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                    </div>



                    <button className="btn btn-primary text-white w-full my-[11px]">Login</button>
                    <div>
                        {
                            loginError && <p className='text-red-700 mb-5'>{loginError}</p>
                        }
                    </div>
                    <p className='text-black'>New to Doctors Portal? <span className='text-info font-semibold'><Link to='/register'>Create new account</Link></span></p>


                </form>
            </div>
        </section>
    );
};

export default Login;