import React from 'react'
import img from '../../assets/about.jpg'
const About = () => {
  return (
    <div className='mt-[100px] flex flex-col gap-[30px]'>
        <div className='w-full flex-col gap-0 flex items-center'>
            <h1 className='text-black text-[24px] font-[500] md:text-[28px]'>About Me</h1>
            <h1 className='text-[14px]'>My Introduction</h1>
        </div>

        <div className='flex items-center justify-center'><div className='flex gap-[40px] items-center'>

            <div className='w-[200px] h-[200px] md:w-[240px] md:h-[300px]'>
                <img className='w-full h-full object-cover rounded-[30px]' src={img}/>
            </div>

            <div className='flex flex-col gap-[20px] w-[640px]'>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1 items-center w-[80px] p-2 bg-red-600'>
                        <h1>hi</h1>
                    </div>
                    <div className='flex flex-col gap-1 items-center w-[80px] p-2 bg-red-600'>
                        <h1>hi</h1>
                    </div>
                    <div className='flex flex-col gap-1 items-center w-[80px] p-2 bg-red-600'>
                        <h1>hi</h1>
                    </div>
                </div>

                <h1>I am a passionate frontend web developer seeking a challenging role to apply technical skills and creativity to solve problems. Proficient in HTML5, CSS, JavaScript, React.js, React Native, Redux toolkit and DSA. I strive to create visually appealing and interactive user interfaces. I excel in writing clean and optimized code. I am confident in my ability to contribute to any project or team I am part of.
                </h1>

                <div className='bg-gray-800 w-[170px] flex items-center justify-center py-[6px] rounded-[20px] hover:bg-gray-700 hover:cursor-pointer'>
                    <h1 className='text-white'>Download CV</h1>
                </div>
            </div>
        </div></div>
    </div>
  )
}

export default About