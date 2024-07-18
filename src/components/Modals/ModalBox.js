import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

export const ModalBox = ({ children, toggler, className }) => {
    return (
        <section className='bg-neutral-800/90 fixed flex items-center justify-center inset-0 h-screen w-full z-30 text-neutral-50 p-[3%]'>
            {/* <div className='relative h-full'> */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
                <article className={`w-auto min-h-[300px] md:min-w-[500px] bg-inherit border-[1px] border-primary rounded-md overflow-auto relative ${className}`}>
                    <FaTimesCircle className='text-primary bg-inherit float-right sticky right-2 top-2 m-2 hover:text-issue hover:neon-red hover:bg-red-200 rounded-full cursor-pointer transition-all duration-700' onClick={() => toggler(false)} title='close' />
                    {children}
                </article>
                {/* </div> */}
            {/* </div> */}
        </section>
    );
}