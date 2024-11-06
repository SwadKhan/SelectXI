import React from 'react';

const Navbar = ({coin}) => {
    return (
        <div className="w-11/12 top-0 mb-10 fixed z-50 bg-opacity-80 mx-auto backdrop-blur-sm flex flex-col md:flex-row md:justify-between items-center ">
        <img className='w-[73px] h-[72px]' src="/logo-footer.png" alt="" />
        
        <div className="flex flex-row justify-between items-center gap-4">
       
        <ul className="flex gap-6 text-slate-200 font-semibold text-base">
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">Fixtures</a>
        </li>
        <li>
            <a href="">Team</a>
        </li>
        <li><a href="">Schedule</a>
        </li>
        </ul>

             <div className="flex items-center p-2 justify-center rounded-lg w-auto h-12 border-2 border-gray-500">
                <h2 className='flex'><span>{coin}</span> coins</h2>
                <img src="/icons8-gold-coin-48.png" alt="" />
             </div>

            </div>
           

        </div>
        
 
    );
};

export default Navbar;