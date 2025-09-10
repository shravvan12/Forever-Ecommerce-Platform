import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler=(e)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800' >Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>
        Be the first to know about sales, specials, and subscriber-only perks.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' required></input>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
