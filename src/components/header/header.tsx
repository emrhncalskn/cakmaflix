import Link from 'next/link'
import React from 'react'
import { MdMovieFilter } from "react-icons/md";


function Header() {
  return (// emr NOTE container ve mx-auto yapısı
    <header>
      <div className='flex container mx-auto flex-row justify-between items-center py-5 backdrop-brightness-50 rounded-b-md'>
        <div className=''>
          <Link href='/' className='flex items-center justify-center gap-5'>
            <MdMovieFilter className='h-auto w-10' />
            <h1 className=' text-4xl'>Fakeflix</h1>
          </Link>
        </div>
        <div className='flex gap-10 text-xl'>
          <Link href='/'>Home</Link>
          <Link href='/Movies'>Movies</Link>
          <Link href='#'>Categories</Link>
          <Link href='#'>Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header