import React from 'react'

const ListUser = ({filteredUsers, onDelete}) => {
  return (
    <div className='my-10'>
      <h1 className='text-xl font-semibold mb-4'>Users</h1>

      {filteredUsers.map(user => (
          <div key={user.id}
          className='flex items-center justify-between bg-gray-200 p-2 my-1 w-120'>
              <div className='flex gap-4'>
                <p className='font-semibold'>{user.name} -</p>
                <p>{user.role}</p>
              </div>
              <button
              onClick={() => onDelete(user.id)}
              className='text-rose-500 cursor-pointer'>
                Remove
              </button>
          </div>
      ))}
    </div>
  )
}

export default ListUser