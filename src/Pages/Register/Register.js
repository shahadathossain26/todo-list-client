import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Header from '../Header/Header';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [registerError, setRegisterError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = data => {
        console.log(data);
        setRegisterError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Succesfully')

                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(user)
                        navigate('/home')
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err.message);
                setRegisterError(err.message);
            })

    }



    return (
        <div>
            <Header></Header>
            <section className='my-28 block lg:flex justify-around'>
                <div className='w-full  md:w-[385px]  shadow-xl  border px-[29px] py-[25px] mx-auto'>
                    <h2 className='text-xl text-center text-black'>Register</h2>

                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" {...register("name")} className="input input-bordered border-slate-400 w-full max-w-xs text-black" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs ">
                            <label className="label"><span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                        </div>
                        {/* <div>
                        <label className="label"><span className="label-text text-black">Select Account Type</span>
                        </label>
                        <select {...register("account_type")} className="select select-bordered w-full max-w-xs border-slate-400 mb-5 text-black">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div> */}

                        <div>
                            {
                                registerError && <p className='text-red-700 mb-5'>{registerError}</p>
                            }
                        </div>

                        <button className="btn btn-primary text-white w-full mb-[11px] mt-5">Register</button>
                        <p className='text-black'>Already have an account? <span className='text-info font-semibold'><Link to='/'>Please Login</Link></span></p>

                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;