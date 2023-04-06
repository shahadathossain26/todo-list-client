import React from 'react';
import { toast } from 'react-hot-toast';

const UpdateModal = ({ setTodoLoading, currentTodo }) => {
    const { _id, title, date } = currentTodo;

    const handleUpdate = event => {
        event.preventDefault();
        setTodoLoading(false);
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const todo = {
            title,
            date,
            description
        }
        console.log(todo);

        fetch(`https://todo-list-server-shahadathossain26.vercel.app/todo/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setTodoLoading(true);
                    toast.success("Updated Successfully");
                    form.reset();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleUpdate} htmlFor="update-modal">

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

                        <button type='submit' className="btn btn-primary text-white w-full mt-5">Update</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;