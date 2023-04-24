import React from 'react'

function About() {
  return (
    <div className='px-10 py-10   '>
      <div className=" block justify-between rounded-xl bg-orange-300 shadow-lg lg:flex ">
        <div className="lg:w-[50%] p-10">
            <h1 className='font-bold font-poppins text-4xl lg:text-5xl'>About Us</h1>
            <p className='font-sfpro font-normal text-lg pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="flex justify-center">
            <img src="https://doodleipsum.com/500/outline?i=a2d8cae38a2eebf6610c56b6d4750cda" alt="" />
        </div>
      </div> 
    </div>
  )
}

export default About