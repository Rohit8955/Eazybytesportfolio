import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [show,setshow] = useState(false);
    const [tab, settab] = useState('home');
  return (
    <div className='w-screen relative'><div className='flex items-center justify-between px-[40px] md:px-[100px] py-3 overflow-hidden backgroundcolor boxshadow'>
        <h1 className='text-[21px] font-[500]'>Rohit</h1>

        <div><div className='toshownonmobile'>
            <ul className='grid grid-cols-5 gap-x-8'>
                <li onClick={()=>settab('home')} className={`hover:text-black ${tab==='home'?"text-black":null} cursor-pointer font-[500]`}><a href='#home'>Home</a></li>
                <li onClick={()=>settab('skills')} className={`hover:text-black ${tab==='skills'?"text-black":null} cursor-pointer font-[500]`}><a href='#skills'>Skills</a></li>
                <li onClick={()=>settab('portfolio')} className={`hover:text-black ${tab==='portfolio'?"text-black":null} cursor-pointer font-[500]`}><a href='#portfolio'>Portfolio</a></li>
                <li onClick={()=>settab('contact')} className={`hover:text-black ${tab==='contact'?"text-black":null} cursor-pointer font-[500]`}><a href='#contact'>Contact</a></li>
            </ul>
        </div></div>
        {show===true?(<i onClick={()=>setshow(false)} className="fa-solid fa-x text-[18px]"></i>):<i onClick={()=>setshow(true)} className="fa-solid fa-bars desktop text-[18px]"></i>}
    </div>
        <div className='mobileshown absolute w-[60%] bg-white top-0 right-0 '>
            {
                show===true?(
                    <div className='p-3 px-6 h-screen'>
                        <div className='flex justify-between px-3'><div></div><i onClick={()=>setshow(false)} className="fa-solid fa-x text-[18px]"></i></div>
                        <ul className='grid grid-cols-1 gap-y-6 text-[18px] mt-3'>
                            <li className='flex gap-3 items-center'>
                                <i className="fa-solid fa-house"></i>
                                <a onClick={()=>setshow(false)} href='#home'>Home</a>
                            </li>
                            <li className='flex gap-3 items-center'>
                                <i className="fa-solid fa-file"></i>
                                <a onClick={()=>setshow(false)} href='#skills'>Skills</a>
                            </li>
                            <li className='flex gap-3 items-center'>
                                <i className="fa-solid fa-briefcase"></i>
                                <a href='#portfolio' onClick={()=>setshow(false)}>Portfolio</a>
                            </li>
                            <li className='flex gap-3 items-center'>
                                <i className="fa-solid fa-message"></i>
                                <a href='#contact' onClick={()=>setshow(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                ):null
            }
        </div>
    </div>
  )
}

export default Navbar