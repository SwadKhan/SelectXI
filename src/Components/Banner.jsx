import React from 'react';

const Banner = ({Claimcoin}) => {
    return (
        <div
        className='bg-cover mt-20 bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-24' 
        style={{ backgroundImage: 'url(/bg-shadow.png)' }}>
            <div className='w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4'>
            <img src="/logo-footer.png" alt="" />
            <h1 className='font-bold text-white md:text-[2rem] '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-lg text-zinc-50 font-normal'>Beyond Boundaries Beyond Limits</p>
            <div className='flex gap-4 text-xl border-2 border-gray-50 rounded-lg font-semibold p-1'>
             <button className='btn bg-outline bg-yellow-600 text-slate-900  hover:bg-green-400 rounded-lg' onClick={()=>{Claimcoin()}}>Claim free credit</button>
            </div>
           
            </div>

    </div>
    );
};

export default Banner;