import React, { useContext } from 'react';
import { RiFileEditFill, RiDeleteBin2Fill } from "react-icons/ri";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const TodoCard = ({ todo, handleDelete, setCurrentTodo }) => {
    const { user } = useContext(AuthContext);
    const { _id, title, date, description } = todo;


    return (
        <div className="card w-full lg:w-3/5  shadow-xl md:mx- lg:mx-auto mt-10 bg-primary text-white">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <span className=' opacity-70 text-[14px]'>{date}</span>
                    </div>
                    <div className='flex items-center'>
                        <button></button>
                        <label onClick={setCurrentTodo(todo)} htmlFor="update-modal" className=' cursor-pointer'><RiFileEditFill className='text-2xl cursor-pointer'></RiFileEditFill></label>
                        <button onClick={() => handleDelete(_id)}><RiDeleteBin2Fill className='text-2xl ml-3 cursor-pointer'></RiDeleteBin2Fill></button>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                    {
                        description.length > 70 ? <p>{description.slice(0, 70)}...</p>
                            : <p>{description}</p>
                    }
                    <Link to={`/todo/${_id}`}><a href="/" className="btn btn-secondary text-black">See Details</a></Link>
                </div>

            </div>
        </div>
    );
};

export default TodoCard;