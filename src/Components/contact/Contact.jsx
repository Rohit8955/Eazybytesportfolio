import React from 'react'
import ContactSection1 from './ContactSection1'
import ContactSection2 from './ContactSection2'

const Contact = () => {
  return (
    <div id='contact' className='mt-[50px] md:mt-[100px]'>
        <div className='flex flex-col items-center'>
            <h1 className='text-black font-[500] text-[24px] '>Contact Me</h1>
            <h1>Get in touch</h1>
        </div>

        <div className='flex md:flex-row flex-col gap-4 mt-[20px]'>
            <ContactSection1/>
            <ContactSection2/>
        </div>
    </div>
  )
}

export default Contact