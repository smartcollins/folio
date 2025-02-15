import { GithubLogo, GoogleLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between capitalize items-center bg-black text-[#a8a9ab] relative shadow-sm font-mono h-20 px-2' role='navigation'>
      <div className=' font-bold uppercase text-xl'>
        <p>Collins</p>
        <p className=' text-base text-center'>web dev.</p>
      </div>
      <div className=' flex justify-between items-center w-1/2'>
        <p>
          &lt; hi &gt;
        </p>
        <p>about</p>
        <p>works</p>
        <p>products</p>
        <p>contact</p>
      </div>
      <div className=' *:flex flex flex-col justify-between items-center text-sm bg-black w-40 h-40 rounded-full py-4 mt-28'>
        <a href="/" className=' '>
          <LinkedinLogo size={20} weight="fill" color='#a8a9ab'/>
          <p>linkedin</p>
        </a>
        <div className='flex justify-between w-11/12'>
        <a href="/" className='flex justify-between items-center space-x-2'>
          <GithubLogo size={20} weight="bold" color='#a8a9ab'/>
          <p>github</p>
        </a>
        <a href="/">
        <XLogo size={20} weight="duotone" color='#a8a9ab' />
        </a>
        </div>
        <a href="/" className=''>
          <GoogleLogo size={20} weight="bold" color='#a8a9ab'/>
          <p>gmail</p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;