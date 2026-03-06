import React from 'react'

const roles = [
    {id: "all", name: "All"},
    {id: "manager", name: "Manager"},
    {id: "designer", name: "Designer"},
    {id: "engineer", name: "Engineer"},
    {id: "marketer", name: "Marketer"},
];

const FilterUser = ({selectedRole, onSelect}) => {
  return (
    <div className='my-10'>
      <h1 className='font-semibold mb-2'>Filter</h1>

      <div className='flex gap-4'>
        {roles.map(role => (
            <p key={role.id} 
            onClick={() => onSelect(role.id)}
            className={`px-4 py-0.5 rounded cursor-pointer hover:opacity-90
            ${role.id === selectedRole && 'bg-blue-900 text-white'}`}>
                {role.name}
            </p>
        ))}
      </div>
    </div>
  )
}

export default FilterUser