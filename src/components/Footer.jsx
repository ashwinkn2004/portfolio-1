import React from 'react'

const Footer = () => {
    return (
        <div className='border-t border-stone-900 pb-20'>
            <p className='text-center text-sm tracking-tighter text-stone-400 mt-8'>
                &copy; {new Date().getFullYear()} Ashwin K N. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
