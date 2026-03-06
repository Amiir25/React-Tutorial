import React, { useState } from 'react'

const AddUser = ({onSubmit}) => {

  const [form, setForm] = useState({
    name: "",
    role: "",
  })

  const isNameValid = form.name.length >= 3;
  const isRoleValid = form.role.length >= 6;
  const isFormValid = isNameValid && isRoleValid;

  const handleFormChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return
    
    setForm({name: "", role: ""})
    onSubmit(form)
    isFormValid && alert('New User Added Successfully');
  }

  return (
    <div className='my-10'>
        <h1 className='text-xl font-semibold'>Add new user</h1>
        
        <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder='Name' name='name' value={form.name}
              onChange={handleFormChange}
              className='border border-gray-400 rounded p-1 block my-2' />

              {form.name && !isNameValid &&
                <p className='text-xs text-red-500'>Name must be at least 3 characters</p>
              }
            </div>

            <div>
              <input type="text" placeholder='Role' name='role' value={form.role}
              onChange={handleFormChange}
              className='border border-gray-400 rounded p-1 block my-2'/>

              {form.role && !isRoleValid &&
                <p className='text-xs text-red-500'>Role must be at least 6 characters</p>
              }
            </div>

            <button type='submit' disabled={!isFormValid}
            className='mt-2 bg-gray-900 text-white px-8 py-1 rounded disabled:opacity-50'>
                Add
            </button>
        </form>
    </div>
  )
}

export default AddUser