import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function () {
    const links = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/products">Products</Link>
            </li>
        </>
    );
    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-[#e2e6ef] backdrop-blur-2xl'>
            <div className="navbar max-w-[1600px] w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a href='/' className='flex gap-1'>
                        <Image className='rounded-full' src="/logo/logo.png" alt='logo' width={36} height={36} />
                        <span className="text-xl font-bold">Ray</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                   <button className='btn bg-[#c6d7f2] hover:bg-[#96bbf6]'>Login</button>
                </div>
            </div>
        </nav>
    )
}
