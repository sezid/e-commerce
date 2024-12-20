import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <h1 className='text-3xl dark:text-white'>DAPPER</h1>
            <p className='dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

        <div className='dark:text-white'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 dark:text-white'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 dark:text-white'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600 dark:text-white'>
                <li>+880-1775289400</li>
                <li>dapperquery@dapper.com</li>
            </ul>
        </div>

        

      </div>
    
        <div>
            <hr />
            <p className='py-5 text-sm text-center dark:text-white'> Copyright 2024@dapper.com - All Right Reserved.</p>
        </div>


    </div> 
  )
}

export default Footer
