import React from 'react'
import { skillsdata } from '../../data/skills'
import TemplateSkill from '../TemplateSkill'

const Skills = () => {
    const frontendskills = skillsdata.filter((elem)=>{
        return elem.category==="Frontend"
    })
    const backendskills = skillsdata.filter((elem)=>elem.category==="Backend");
  return (
    <div id='skills' className='mt-[40px] md:mt-[100px]'>

        <div className='flex flex-col items-center'>
            <h1>Explore My</h1>
            <h1 className='text-black font-[500] text-[24px]'>Skills</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-6 items-center justify-center mt-3 md:mt-[30px]'>
            <div className='w-[77%] h-[250px] md:w-[40%] border-gray-200 border-[2px] rounded-[10px]'>
                <h1 className='text-center font-[500] md:text-[22px] text-[18px] mt-2'>Frontend Development</h1>
                <div className='flex items-center justify-center mt-3 md:mt-5'>
                    <div className='grid grid-cols-2 md:gap-x-[120px]'>
                        {
                            frontendskills.map((elem,idx)=>{
                                return <TemplateSkill skill={elem.skill} level={elem.level} key={idx}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-[77%] h-[250px] md:w-[40%] border-gray-200 border-[2px] rounded-[10px]'>
                <h1 className='text-center font-[500] md:text-[22px] text-[18px] mt-2'>Backend Development</h1>
                <div className='flex items-center justify-center mt-3 md:mt-5'>
                    <div className='grid grid-cols-2 md:gap-x-[150px]'>
                        {
                            backendskills.map((elem,idx)=><TemplateSkill skill={elem.skill} level={elem.level} key={idx}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills