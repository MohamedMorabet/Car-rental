"use client";

import Image from '@/node_modules/next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const hundleScroll = () => {

  }


  return (
    <div className='hero'>
      <div className='flex-1 pt-63 padding-x'>
        <h1 className='hero__title'>
          Find, book, or rent a car — quickly and easily !
        </h1>

        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          hundleClick={hundleScroll} />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
      <div className='hero__image-overlay'>


      </div>
    </div>
  )
}

export default Hero