import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ProfileCard = ({ name, role, bio, handleCount }) => {

    const [showBio, setShowBio] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    // Never rely on state immediately after calling a state setter. React state updates are asynchronous.
    const handleFollow = () => {
        const currentValue = !isFollowing;
        setIsFollowing(currentValue);   
        handleCount(currentValue)
    };

    return (
        <div className='border border-gray-300 rounded p-4 w-52'>
            
            <h1 className='text-3xl'>{name}</h1>

            <p className='font-light'>{role}</p>

            {/* Bio */}
            <div className='bg-gray-300 p-1'>
                <div className='mt-4 flex items-center justify-between'>
                    Bio
                    <button onClick={() => setShowBio(prev => !prev)}>
                        { showBio ? <ChevronUp/> : <ChevronDown/> }
                    </button>
                    {/*
                    (prev => !prev)
                    This is a short form of arrow function. The prev is the argument the second is the return value.
                    React calls this function passing the current state and calls the setShowBio function passing
                    its return value i.e !prev.*/}
                </div>
                <p className={`text-sm h-0 opacity-0 ${showBio && 'h-4 opacity-100'}
                     transition-all duration-200`}>
                    {bio}
                </p>
            </div>

            {/* Follow */}
            <button
            onClick={handleFollow}
            className={`${isFollowing ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}
                mt-8 px-2 py-1 rounded`}>
                { isFollowing ? 'Following' : 'Follow' }
            </button>
        </div>
    )
}

export default ProfileCard