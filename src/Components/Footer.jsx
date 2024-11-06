import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col  bg-white w-full mx-auto py-36 gap-2 items-center  pt-44 pb-10 '>
            <div className=''>
            <img src="/logo-footer.png" alt="" />
            </div>
           
          <div className='flex flex-row justify-around gap-20'>
          <div className='flex flex-col '>      
                <h2 className='font-semibold text-lg text-black'>About Us</h2>
                
                <p className='text-black'>We are a Passionate Team <br />
                    dedicated to providing the best <br />
                    services to our customers.
                </p>      
            </div>
            <div className='flex flex-col'>
                <h2 className='font-semibold text-lg text-black' >Quick Links</h2>
                <ul className='text-black'>
                   <li className='list-disc text-grey-800'>Home</li>
                   <li  className='list-disc text-grey-800'>Services</li>
                   <li className='list-disc text-grey-800'> About</li>
                   <li className='list-disc text-grey-800'>Contact</li>
                </ul>
            </div>

        <div className='flex flex-col justify-center items-center text-black   gap-3'>
            <h2 className='font-bold text-2xl'>Subscribe to our Newsletter</h2>
            <p>Get the latest updates and news right in your inbox!</p>
            <div className='flex'>
                <input type="text" className='w-64 p-2 rounded-l-lg rounded-r-none' placeholder='Enter your email' />
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-r-lg rounded-l-none' >Subscribe</button>
            </div>
        </div>
          </div>
          <div className=' mt-8 w-full h-0.5 bg-black'>

          </div>
           <h4 className='mt-4'>@2024 YourXI All rights reserved</h4>
        </div>
    );
};

export default Footer;