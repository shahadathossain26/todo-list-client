import React, { useContext, useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { IoIosAddCircle } from "react-icons/io";
import AddModal from './AddModal/AddModal';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import TodoCard from './TodoCard/TodoCard';
import { toast } from 'react-hot-toast';
import UpdateModal from './UpdateModal/UpdateModal';
import Header from '../Header/Header';

const Home = () => {
    const { user } = useContext(AuthContext);

    let [todos, setTodos] = useState([]);
    const [todoLoading, setTodoLoading] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/todos?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTodos(data));

    }, [user?.email, todoLoading])

    const handleDelete = (id) => {
        setTodoLoading(false);
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = todos.filter(todo => todo._id !== id);
                    todos = remaining;
                    setTodoLoading(true);
                    toast.success("Deleted Succesfully");
                }
            })

    }


    return (
        <div className=' relative'>
            <Header></Header>
            <div className=' fixed bottom-12 right-20'>
                {/* <button onClick={() => setAddModal(true)} className='' htmlFor="add-modal"><IoIosAddCircle className='text-7xl '></IoIosAddCircle></button> */}
                <label htmlFor="add-modal" className=' cursor-pointer'><IoIosAddCircle className='text-7xl '></IoIosAddCircle></label>
            </div>

            <div>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center mt-16'>Your Todos</h1>
            </div>

            <div className='px-5 md:px-10'>
                {todos &&
                    todos.map(todo => <TodoCard
                        key={todo._id}
                        todo={todo}
                        handleDelete={handleDelete}
                        setCurrentTodo={setCurrentTodo}
                    ></TodoCard>)
                }
            </div>


            {/* add todo modal */}
            <AddModal
                todoLoading={todoLoading}
                setTodoLoading={setTodoLoading}
            ></AddModal>

            {
                currentTodo &&
                <UpdateModal
                    currentTodo={currentTodo}
                    setTodoLoading={setTodoLoading}
                ></UpdateModal>
            }


        </div>
    );
};

export default Home;