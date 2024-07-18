import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

export const PageLoading = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <BiLoaderCircle size={30} className='animate-spin' />
        <p>wait a moment ...</p>
    </div>
  )
}