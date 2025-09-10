import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt='' className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
            Forever is your go-to destination for curated fashion essentials.
Stay connected—subscribe to our newsletter for exclusive deals and style updates.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 76809-02843</li>
                <li>Forevern@gmail.com</li>
            </ul>
        </div>
        <div>
            <hr>
            </hr>
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved</p>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
