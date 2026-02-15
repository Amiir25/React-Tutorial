import React, { useState } from 'react'
import ProfileCard from './ProfileCard';

const App = () => {

  const users = [
    { id: 1, name: "Alice", role: "Frontend Dev", bio: "Loves React" },
    { id: 2, name: "Bob", role: "Backend Dev", bio: "Node.js expert" },
    { id: 3, name: "Charlie", role: "Designer", bio: "UI/UX specialist" }
  ];

  const [count, setCount] = useState(0);
  
  const handleCount = (follow) => {
    follow ?
      setCount(prev => prev + 1)
    : setCount(prev => prev - 1)
    // console.log(follow);
  }

  return (
    <>
      <div className='absolute top-40 left-1/2 text-xl'>
        Following {count} users
      </div>
      <div className='w-screen h-screen flex items-center justify-center gap-20'>
        {
          users.map(user => (
            <ProfileCard
              key={user.id}
              name={user.name}
              role={user.role}
              bio={user.bio}
              handleCount={handleCount}/>
          ))
        }
      </div>
    </>
  )
}

export default App