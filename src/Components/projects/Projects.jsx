import React, { useState } from 'react'
import { projects } from '../../projectsdata'
import { useDispatch, useSelector } from 'react-redux'
import { changeprojects } from '../../store/Projectslice'
import ProjectCard from './ProjectCard'
const Projects = () => {
    const uniquecategories = [...new Set(projects.map((elem)=>{
        return elem.category
    }))]
    const [clicked,setclicked] = useState('React');
    const dispatch = useDispatch();
    const arr = useSelector((state)=>state.projectlist.data);
    console.log(arr)
  return (
    <div id='portfolio' className='mt-[50px]'>
        <div className='flex flex-col items-center'>
            <h1>Browse My Recent</h1>
            <h1 className='text-black text-[24px] font-[500]'>Projects</h1>
        </div>

        <div className='flex items-center justify-center mt-4'><div className='flex gap-3'>
            {
                uniquecategories.map((elem,idx)=>{
                    return (
                        <div onClick={()=>{setclicked(elem); dispatch(changeprojects(elem))}} className={`border-black ${clicked===elem?"bg-black text-white":null} text-black font-[500] border-[1px] py-1 px-3 rounded-[20px] hover:bg-black hover:text-white hover:cursor-pointer`} key={idx}>{elem}</div>
                    )
                })
            }
        </div></div>

        <div className='flex items-center justify-center mt-5'><div className='grid grid-cols-1 md:grid-cols-3'>
            {
                arr.map((elem,idx)=>{
                    return <ProjectCard name={elem.name} github={elem.githubrepo} live={elem.live} key={idx}/>
                })
            }
        </div></div>

        {/* <ProjectCard/> */}
    </div>
  )
}

export default Projects