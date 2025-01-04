'use client';
import Link from 'next/link';
import { useState } from 'react';
import {about} from '../components/About'
import {contact} from '../components/Contact'
const Navbar = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav className="w-[80vw] flex gap-x-5 mx-auto">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
<div className="flex flex-col items-center w-[100px] ">
<h2 className='text-5xl font-bold'>{count}</h2>
      <button 
        onClick={() => setCount(count + 1)} 
        className="bg-blue-500 rounded text-white px-4 py-2 mt-4">
        Click
      </button>
    
          </div>
    </div>
  );
};

export default Navbar;
