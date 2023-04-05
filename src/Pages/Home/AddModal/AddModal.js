import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const AddModal = ({ setTodoLoading }) => {
    const { user } = useContext(AuthContext);

    const handleAddTodo = event => {
        event.preventDefault();
        setTodoLoading(false);
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;

        const todo = {
            user: user.email,
            title,
            date,
            description
        }
        console.log(todo);

        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTodoLoading(true);
                    toast.success('Todo Created Successfully')
                }
                if (data.message) {
                    toast.error(data.message)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleAddTodo}>

                        <div>
                            <label className="label">
                                <span className="label-text text-black">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Todo Title" className="input input-bordered  w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-black">Date</span>
                            </label>
                            <input type="date" name='date' placeholder="Phone Number" className="input input-bordered w-full border-slate-400" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-black">Description</span>
                            </label>
                            <textarea className="textarea border border-slate-400 w-full h-40" placeholder="Write Description" name='description'></textarea>
                        </div>

                        <button type='submit' className="btn btn-primary text-white w-full mt-5">Add</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddModal;