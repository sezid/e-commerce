import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault(); //to prevent reload of page when form submitted
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now to Get 20% OFF</p>
      <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form onSubmit={onSubmitHandler} className='w-1/2 sm:1-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Your Email' required/>
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter
