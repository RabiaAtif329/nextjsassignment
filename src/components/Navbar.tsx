"use client";
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white text-green h-12 py-2 px-3 flex justify-between items-center"> 
                
                    <div>
                        <h1 className ='text-3xl font-semibold text-green-800'>
                            <a href="#!">Generation's School</a>
                            </h1>
                            </div>
                    <div>
                        <ul className='flex space-x-5'>
                            <li><Link href="/" className='hover:text-red-600'>Home</Link></li>   
                            <li><Link href="/aboutus" className='hover:text-red-600'>About </Link></li>
                            <li><Link href="/contactus" className='hover:text-red-600'>Contact Us</Link></li>
                            
                            </ul>
                    
                    </div>
                    <div>
                        <ul className='flex space-x-3'>
                            <li><Link href="#!" className=' hover:text-red-600'>Login</Link></li>
                            <li><Link href="#!" className= ' hover:text-red-600'>Signup</Link></li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;