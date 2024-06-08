import React from 'react'
import img from '../../assets/about.jpg'
const ProjectCard = (props) => {
  return (
    <div className='w-[270px] h-[370px] border-gray-400 border-[2px] rounded-[25px] p-3 flex flex-col gap-3 items-center'>
        <img className='w-[95%] h-[70%] rounded-[25px]' src={img}/>
        <h1 className='text-black font-[500] text-[20px]'>{props.name}</h1>
        <div className='flex gap-5'>
            <div className='border-gray-400 border-[1px] py-2 px-3 rounded-[25px] hover:border-black hover:cursor-pointer'>
                <a href={props.github} target='_blank'><h1 className='text-black'>GitHub</h1></a>
            </div>
            <div className='border-gray-400 border-[1px] py-2 px-3 rounded-[25px] hover:border-black hover:cursor-pointer'>
                <a href={props.live} target='_blank'><h1 className='text-black'>Live Demo</h1></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard