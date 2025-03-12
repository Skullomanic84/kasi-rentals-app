"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        fill
        priority
        alt="kasi rentals platform hero section"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 transform -translate-x-1/2  -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12 ">
          <h1 className="text-5xl font-black uppercase text-white mb-4 leading-[1.2]">
            Start your journey to finding the perfect place to call home
          </h1>
          <p className="text-base text-white mb-8">
            Find the perfect place to call home with Kasi Rentals tailored to fit your lifestyle and needs !. We have a wide range of properties to choose from.
          </p>

          {/* search input */}
          <div className='flex justify-center'>
            <Input 
            type='text'
            placeholder='Search for a property by city, neighbourhood, or address' 
            value='search query'
            onChange={(e) => console.log(e.target.value)}
            className='w-full max-w-lg rounded-none rounded-l-full border-none bg-white h-12'
            />
            <Button 
            onClick={() => console.log('search button clicked')}
            className='bg-secondary-500 text-white rounded-none rounded-r-full border-none hover:bg-secondary-600 h-12'
            >
              Search
            </Button>          
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero