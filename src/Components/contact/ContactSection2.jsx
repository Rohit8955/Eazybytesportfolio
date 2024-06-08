import React from 'react'
import './contact.css'
const ContactSection2 = () => {
  return (
    <div>
        <h1 className='text-black font-[500] text-[18px] text-center '>Write me your project</h1>
        <div className='flex flex-col gap-5 items-center mt-5'>
            <div className='relative h-[40px] w-[300px]'>
                <label className='absolute top-[-11px]  left-6 label'>Name</label>
                <input className='input absolute top-0 left-0  w-full h-full  px-[10px] border-gray-400 border-[1px] rounded-[0.75rem] outline-none ' type='text' placeholder='insert your name'/>
            </div>
            <div className='relative h-[40px] w-[300px]'>
                <label className='absolute top-[-11px] z-500  left-6 label'>Email</label>
                <input className='input z-100 absolute top-0 left-0  w-full h-full  px-[10px] border-gray-400 border-[1px] rounded-[0.75rem] outline-none ' type='email' placeholder='insert your Email'/>
            </div>
            <div className='relative h-[40px] w-[300px]'>
                <label className='absolute top-[-11px] z-500  left-6 label'>Pro</label>
                <textarea rows="10" cols="30" className='input z-100 absolute top-0 left-0  w-full h-full  px-[10px] border-gray-400 border-[1px] rounded-[0.75rem] outline-none ' placeholder='write your project'></textarea>
            </div>
        </div>
        <div className='bg-gray-800 w-[150px] text-white px-4 py-2 rounded-[20px] hover:cursor-pointer hover:bg-gray-700 mt-[20px]'>
              Send Message
        </div>
    </div>
  )
}

export default ContactSection2