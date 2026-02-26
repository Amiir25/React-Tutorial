import React, { useState } from 'react'

const TaskInput = ({tasks, setTasks}) => {

    const [newTask, setNewTask] = useState("");
    const [emptySearch, setEmptySearch] = useState(false);

    const addNewTask = (e) => {
        e.preventDefault();
        
        if (!newTask.trim()) {
            setEmptySearch(true);
            setTimeout(() => {setEmptySearch(false)}, 3000);
            return;
        }

        setTasks([
            ...tasks,
            {id: tasks.length + 1, text: newTask, completed: false},
        ])
    }

    return (
        <div className='mt-10'>
            <form onSubmit={addNewTask} className='flex gap-2'>
                <input
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                type="text" placeholder='Add a task here...'
                className='flex-2 border border-gray-300 p-3 rounded-full' />
                
                <button type='submit'
                className='text-xl bg-green-700 text-white px-8 rounded-full cursor-pointer'>
                    Add
                </button>
            </form>

            {/* Empty task popup */}
            {emptySearch &&
                <div className={`fixed top-6 left-1/2 -translate-1/2 px-8 py-2 bg-rose-200 text-rose-700
                ${emptySearch ? 'h-12' : 'h-0'} transition-all duration-300`}>
                    <p>Can not add empty task</p>
                </div>
            }
        </div>
    )
}

export default TaskInput