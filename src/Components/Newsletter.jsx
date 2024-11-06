import React from 'react';

const Newsletter = () => {
    return (
        <div className='border-2 backdrop-blur-sm border-gray-500 rounded-xl p-4 -mb-28 translate-y-2 opacity-1 mt-8'>
            <div className='bg-cover p-16  bg-no-repeat rounded-3xl flex flex-col justify-center items-center text-white  gap-3  translate-y-2  opacity-95' style={{ backgroundImage: 'url(/bg-shadow.png)'
             }}>
            <h2 className='font-bold text-2xl'>Subscribe to our Newsletter</h2>
            <p>Get the latest updates and news right in your inbox!</p>
            <div className='flex gap-1'>
                <input type="text" className='w-64 p-2 rounded-lg' placeholder='Enter your email' />
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-xl' >Subscribe</button>
            </div>
        </div>
        </div>
        
    );
};

export default Newsletter;