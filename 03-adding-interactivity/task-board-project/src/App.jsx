import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Filtered tasks
  // During render, React gives you a snapshot of state. Every render receives a fresh snapshot of tasks and filter.
  let filteredTasks = [];
  if (filter === 'active') {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(t => t.completed);
  } else {
    filteredTasks = tasks;
  }

  // Toggle status
  // If something affects global rendering logic (like filtering), it MUST live in the parent state.
  const handleToggle = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {...task, completed: !task.completed}
          : task
      )
    )
  }

  // Delete task
  const handldeDelete = (id) => {
    setTasks(
      tasks.filter(t => t.id !== id)
    )
  }

  return (   
    <div className='pt-10 max-w-200 mx-auto'>
      <Header/>
      <TaskInput tasks={tasks} setTasks={setTasks}/>
      
      <TaskList filter={filter} setFilter={setFilter} tasks={filteredTasks} />

      {/* {console.log("Filter", filter)}
      {console.log("Filtered Tasks", filteredTasks)} */}

      {filteredTasks.map((task, index) => (
        <TaskItem key={index}
        task={task}
        onToggle={handleToggle}
        onDelete={handldeDelete} />
      ))}
    </div>
  )
}

export default App