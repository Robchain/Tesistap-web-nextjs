'use client'
import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import imagen_uno from '../../public/images/wood-nature-sun-forest.jpg'
import imagenDos from '../../public/images/img2.jpeg'
import imagentres from '../../public/images/img3.jpeg'

export const Slides = () => {
  return (
    <Carousel  className=' w-full h-52 md:h-96' /*style={{height:'24rem'}} */ slideInterval={5000}>
    <Image src={imagenDos} alt='uno'/>
    <Image src={imagen_uno} alt='dos'/>
    <Image src={imagentres} alt='tres'/>
  </Carousel>
  )
}
