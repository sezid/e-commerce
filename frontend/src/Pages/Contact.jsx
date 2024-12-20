import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../Components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col jusitfy-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600 dark:text-white'>Our Store</p>
          <p className='text-gray-500 dark:text-white'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500 dark:text-white'>Tel: (+880) 1775289400 <br />Email: admin@dapper.com</p>
          <p className='font-semibold text-xl text-gray-600 dark:text-white'>Careers at Dapper</p>
          <p className='text-gray-500 dark:text-white'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 text-sm py-4 transition-all duration-500 dark:text-black dark:border-white dark:bg-white'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact
