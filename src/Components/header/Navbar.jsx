import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [show,setshow] = useState(false);
  return (
    <div className='relative'><div className='flex items-center justify-between px-[40px] md:px-[100px] py-3 overflow-hidden backgroundcolor'>
        <h1 className='text-[21px] font-[500]'>Rohit</h1>

        <div><div className='toshownonmobile'>
            <ul className='grid md:grid-cols-5 gap-x-8'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div></div>
        {show===true?(<i onClick={()=>setshow(false)} className="fa-solid fa-x"></i>):<i onClick={()=>setshow(true)} className="fa-solid fa-bars desktop"></i>}
    </div>
        <div className='mobileshown absolute top-[550px]'>
            {
                show===true?(
                    <div className='bg-gray-200 w-screen p-2'>
                        <ul className='grid grid-cols-3 gap-y-4 text-[18px]'>
                            <li className='flex flex-col items-center'>
                                <i className="fa-solid fa-house"></i>
                                <a>Home</a>
                            </li>
                            <li className='flex flex-col items-center'>
                                <i className="fa-solid fa-address-card"></i>
                                <a>About</a>
                            </li>
                            <li className='flex flex-col items-center'>
                                <i className="fa-solid fa-file"></i>
                                <a>Skills</a>
                            </li>
                            <li className='flex flex-col items-center'>
                                <i className="fa-solid fa-briefcase"></i>
                                <a>Portfolio</a>
                            </li>
                            <li className='flex flex-col items-center'>
                                <i className="fa-solid fa-message"></i>
                                <a>Contact</a>
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