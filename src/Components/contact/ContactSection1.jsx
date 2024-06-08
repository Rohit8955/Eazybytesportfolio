import React from 'react'
import './contact.css'
const ContactSection1 = () => {
  return (
    <div className=''>
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-black text-[18px] font-[500] text-center'>Talk to me</h1>
            <div className='w-[300px] h-[150px] rounded-md bg-white border-gray-200 border-[1px] py-2 px-3 flex flex-col gap-2 items-center justify-center'>
                <i className="fa-regular fa-envelope text-black text-[24px]"></i>
                <h1 className='text-black font-[500] text-[18px] '>Email</h1>
                <h1 className='hover:text-blue-400 hover:cursor-pointer'>rohitsharmaa971@gmail.com</h1>
                <div className='flex gap-2 items-center writemediv'>
                    <h1>Write me</h1>
                    <i className="fa-solid fa-arrow-right writemeicon"></i>
                </div>
            </div>
            <div className='w-[300px] h-[150px] rounded-md bg-white border-gray-200 border-[1px] py-2 px-3 flex flex-col gap-2 items-center justify-center'>
                <i className="fa-brands fa-whatsapp text-black text-[24px]"></i>
                <h1 className='text-black font-[500] text-[18px] '>WhatsApp</h1>
                <h1 className='hover:text-blue-400 hover:cursor-pointer'>8955675971</h1>
                <div className='flex gap-2 items-center writemediv'>
                    <h1>Write me</h1>
                    <i className="fa-solid fa-arrow-right writemeicon"></i>
                </div>
            </div>
            <div className='w-[300px] h-[150px] rounded-md bg-white border-gray-200 border-[1px] py-2 px-3 flex flex-col gap-2 items-center justify-center'>
                <i className="fa-brands fa-facebook-messenger text-black text-[24px]"></i>
                <h1 className='text-black font-[500] text-[18px] '>Messenger</h1>
                <h1 className='hover:text-blue-400 hover:cursor-pointer'>rohit_sharma_1256</h1>
                <div className='flex gap-2 items-center writemediv'>
                    <h1>Write me</h1>
                    <i className="fa-solid fa-arrow-right writemeicon"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection1