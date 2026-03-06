import React, { useState } from 'react'

const SignUpPage = () => {

    const [submittedUsers, setSubmittedUsers] = useState([]);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Derived states
    // State should store the minimal source of truth for UI.
    // If something can be calculated from existing state or props, don't put it in state.
    const isUsernameValid = form.username.length >= 3;
    const isEmailValid = form.email.includes("@");
    const isPasswordValid = form.password.length >= 6;
    const isPasswordMatch = form.password === form.confirmPassword;

    // Compute UI state during render instead of storing it. This prevents state bugs.
    const isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatch;

    const handleFormChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(isFormValid ? "Form submitted" : "Form validation error")

        setSubmittedUsers(prev => [
            ...prev,
            {name: form.username, email: form.email},
        ])

        setForm({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    return (
        <section className='w-screen h-screen flex items-center justify-center'>
            <div className='w-120'>
                <h1 className='text-3xl mb-10'>Sign Up here</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className='my-4'>
                        <label htmlFor="username" className='block'>Username</label>
                        <input type="text" id='username' name='username' value={form.username}
                        onChange={handleFormChange}
                        className={`border border-gray-300 rounded
                        ${form.username && !isUsernameValid && 'border-red-500'}`}/>
                        
                        {form.username && !isUsernameValid &&
                            <p className='text-xs text-red-500'>Username must be at least 3 characters</p>
                        }
                    </div>
                    <div className='my-4'>
                        <label htmlFor="email" className='block'>Email</label>
                        <input type="text" id='email' name='email' value={form.email}
                        onChange={handleFormChange}
                        className={`border border-gray-300 rounded
                        ${form.email && !isEmailValid && 'border-red-500'}`}/>

                        {form.email && !isEmailValid &&
                            <p className='text-xs text-red-500'>Email must contain "@" charcater</p>
                        }
                    </div>
                    <div className='my-4'>
                        <label htmlFor="password" className='block'>Password</label>
                        <input type="password" id='password' name='password' value={form.password}
                        onChange={handleFormChange}
                        className={`border border-gray-300 rounded
                        ${form.password && !isPasswordValid && 'border-red-500'}`}/>
                        
                        {form.password && !isPasswordValid &&
                            <p className='text-xs text-red-500'>Password must be at least 6 characters</p>
                        }
                    </div>
                    <div className='my-4'>
                        <label htmlFor="confirmPassword" className='block'>Confirm Password</label>
                        <input type="password" id='confirmPassword' name='confirmPassword' value={form.confirmPassword}
                        onChange={handleFormChange}
                        className={`border border-gray-300 rounded
                        ${form.confirmPassword && !isPasswordMatch && 'border-red-500'}`}/>
                        
                        {form.confirmPassword && !isPasswordMatch &&
                            <p className='text-xs text-red-500'>Password must match</p>
                        }
                    </div>
                    <button type='submit' disabled={!isFormValid}
                    className='mt-6 text-xl bg-gray-800 text-white px-8 py-2 rounded cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'>
                        Sign Up
                    </button>
                </form>

                {/* Submitted Users */}
                <div className='mt-20'>
                    <h1 className='text-3xl mb-6'>Submitted users</h1>

                    {submittedUsers.map(user => (
                        <section key={user.email}>
                            <div className='flex items-end justify-between'>
                                <div>
                                    <p>Name: <span className='font-semibold'>{user.name}</span></p>
                                    <p>Email: <span className='font-semibold'>{user.email}</span></p>
                                </div>
                                <button 
                                className='bg-rose-500 text-white font-semibold px-4 py-1 rounded'
                                onClick={() => setSubmittedUsers(prev =>
                                    prev.filter(u => u.email !== user.email)
                                )}>
                                    Delete
                                </button>
                            </div>
                            <hr className='my-4 text-gray-400' />
                        </section>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SignUpPage