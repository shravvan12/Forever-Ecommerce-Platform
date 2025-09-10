import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/newsletterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}></Title>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img  className="w-full md:max-w-[450px]" src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is your trusted online store for everyday essentials and trendsetting products. With a focus on quality, speed, and simplicity, we aim to make your shopping experience effortless and enjoyable — every single time</p>
        <p>At Forever, we believe great shopping shouldn’t cost the planet. That’s why we bring you responsibly curated products and sustainable choices without compromising style or quality. Shop smart. Shop sustainably. Shop Forever.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at <strong>Forever</strong> is to empower the modern shopper with a platform that's fast, fun, and always in fashion. We’re here to help you discover the best products, hottest trends, and exclusive deals — all in one place and delivered with care.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Asuurance</b>
          <p className='text-gray-600'>At <strong>Forever</strong>, we stand by the quality of every product we offer. Our team carefully curates and checks each item so that you receive only the best — because you deserve nothing less.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>At <strong>Forever</strong>, we make shopping simple. With an easy-to-use platform, fast delivery, and reliable support, everything you need is just a few clicks away — anytime, anywhere</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We’re here for you — always. At <strong>Forever</strong>, we pride ourselves on fast, friendly, and reliable customer support that makes your experience truly exceptional</p>
        </div>

       

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
