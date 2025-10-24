import React from 'react'
import data from '../data/projects'
import { HoverEffect } from './ui/CardHoverEffect'



const Projects = () => {
  return (
    <>
    <div className='py-20 text-center text-[40px] leading-snug tracking-wide font-bold text-blue-100 md:text-5xl lg:text-6xl '>
      <h1 className=''>
        Quelque Selection de {' '}
        <span className='text-purple-500'>Mes Projets </span>
      </h1>
    </div>
    <HoverEffect items={data} />
    </>
  )
}

export default Projects
