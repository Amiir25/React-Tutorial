import React, { useState } from 'react'
import AddUser from './AddUser';
import FilterUser from './FilterUser';
import ListUser from './ListUser';

const UserDirectory = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRole, setSelectedRole] = useState('all');
    const [users, setUsers] = useState([
        {id: 1, name: 'Alice', role: 'Designer'},
        {id: 2, name: 'Bob', role: 'Engineer'},
        {id: 3, name: 'Ana', role: 'Marketer'},
        {id: 4, name: 'Charles', role: 'G. Manager'},
    ]);

    const filteredUsers = users.filter(user => {
        const matchSearch = user.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchRole = selectedRole === "all" ||
            user.role.toLowerCase().includes(selectedRole);

        return matchSearch && matchRole;
    })

    // Add user
    const handleAddUser = (newUser) => {
        setUsers(prev => ([
            ...prev,
            {
                id: crypto.randomUUID(),
                name: newUser.name,
                role: newUser.role
            },
        ]))
    }

    // Delete User
    const handleDeleteUser = (userId) => {
        setUsers(prev => prev.filter(u => u.id !== userId))
    }

  return (
    <div className='px-50 py-10'>
        <h1 className='text-3xl font-semibold'>User Directory</h1>

        {/* Search */}
        <div className='my-10'>
            <input type="text" placeholder='search'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className='border border-gray-300 w-80 p-2 rounded-full' />
        </div>

        <FilterUser selectedRole={selectedRole} onSelect={setSelectedRole}/>
        <AddUser onSubmit={handleAddUser}/>
        <ListUser filteredUsers={filteredUsers} onDelete={handleDeleteUser}/>
    </div>
  )
}

export default UserDirectory