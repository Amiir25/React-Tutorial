import React, { useState } from 'react'

const TaskItem = ({task, handleToggle, onDelete}) => {

    const [toggle, setToggle] = useState(task.completed);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(task.id);
        setConfirmDelete(false);
    }

    return (
        <div
        onClick={handleToggle}
        className={`my-2 flex justify-between text-xl p-2 rounded cursor-pointer bg-gray-300
        ${toggle && 'bg-gray-200'}`}>

            <div className={`${toggle ? 'text-gray-400 line-through' : 'font-semibold'} flex gap-4`}>
                <p>{task.id}.</p>
                <h1>
                    {task.text}
                </h1>
            </div>
            
            <button
            onClick={() => setConfirmDelete(true)}
            className={`${toggle ? 'text-gray-600' : 'text-rose-500'} font-semibold cursor-pointer`}>
                Delete
            </button>

            {/* Delete confirmation */}
            {confirmDelete &&
            <div className='fixed top-0 left-0 w-screen h-screen bg-gray-700/50
            flex items-center justify-center'>
                <div className='bg-white p-10 rounded'>
                    <p className='text-2xl'>Are you sure you want to delete this task?</p>
                    <div className='mt-10 flex items-center justify-center gap-10'>
                        <button 
                        onClick={() => setConfirmDelete(false)}
                        className='bg-gray-200 px-4 py-2 rounded cursor-pointer
                        hover:bg-gray-500 hover:text-white transition-all duration-300'>
                            Close
                        </button>
                        <button
                        onClick={handleDelete}
                        className='bg-rose-200 px-4 py-2 rounded cursor-pointer
                        hover:bg-rose-500 hover:text-white transition-all duration-300'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default TaskItem