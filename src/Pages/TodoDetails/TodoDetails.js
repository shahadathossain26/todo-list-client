import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

const TodoDetails = () => {
    const todo = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-16'>{todo.title}</h1>
                <p className='text-center mt-2'>Date: {todo.date}</p>
                <p className='mt-10 w-full px-5 md:px-10 lg:px-0 lg:w-3/5 lg:mx-auto'><span className='font-bold'>Description:</span> {todo.description}</p>
            </div>
        </div>
    );
};

export default TodoDetails;