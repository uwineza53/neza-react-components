import React from 'react';

export const Toast = ({ status = 200, toggler, children }) => {
    return (
        <div className={`flex flex-row-reverse justify-between items-center gap-3 fixed top-24 -right-10 animate-slide-in text-neutral-800 border-[1px] border-l-8 ${status === 200 ? 'border-primary-500 bg-primary-50 /70' : 'border-issue-500 bg-issue-50 /70'} rounded-r-[4px] px-2 py-1 w-[75%] sm:w-[300px] md:w-[400px] lg:w-[500px] transition-all duration-300 font-semibold z-30`}>
            <FaTimesCircle size={18} className='text-issue float-right sticky right-0 hover:text-issue hover:neon-red min-w-max hover:bg-red-200 rounded-full cursor-pointer transition-all duration-700' onClick={() => toggler(prev => ({ ...prev, visible: false }))} title='close' />
            {children}
        </div>
    );
}