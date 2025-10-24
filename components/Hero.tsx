import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MyButton from './ui/MyButton';

const Hero = () => {
  return (
    <div className='flex justify-center px-5'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Site Web dynamique</h2>
            <TextGenerateEffect className='text-center text-[40px] text-blue-100 md:text-5xl lg:text-6xl' words="Bonjour, Moi c'est Youssef, Développeur FullStack" />
            <p className="text-white text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex molestiae eos consectetur excepturi, libero odio. Aperiam, tempora suscipit ipsam autem fugiat, delectus consequuntur iste officiis ratione facilis enim? Suscipit.</p>
            <a href="#About" className='p-5'>
                <MyButton title='A propos' />
            </a>
        </div>        
      
    </div>
  )
}

export default Hero
