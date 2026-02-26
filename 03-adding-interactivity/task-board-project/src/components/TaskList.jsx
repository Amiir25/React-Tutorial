import React, { useState } from 'react'

const filterButtons = [
    {id: "all", text: "All"},
    {id: "active", text: "Active"},
    {id: "completed", text: "Completed"},
];

const TaskList = ({filter, setFilter, tasks}) => {

    return (
        <div className='mt-10'>

            <div className='flex items-center justify-between mb-10'>
                <h1 className='text-2xl font-semibold'>
                    Tasks
                </h1>

                {/* Filters */}
                <div>
                    <div className='flex gap-2 font-semibold'>
                        {filterButtons.map(filterbutton => (
                            <button key={filterbutton.id}
                            onClick={() => setFilter(filterbutton.id)}
                            className={`${filterbutton.id === filter && 'bg-gray-800 text-white'} px-2 rounded cursor-pointer`}>
                                {filterbutton.text}
                            </button>
                        ))}
                    </div>
                    <p className='text-right text-sm font-light mt-1'>
                        {tasks.length} {filter} Tasks
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TaskList