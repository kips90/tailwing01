import React from 'react'
import bg40 from "../images/bg40.jpg"

function Home() {

  const bg = {
    background: `url(${bg40}) no-repeat`,
    backgroundPosition: "right",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:'100vh'
  }


  return (
    <div className="flex items-center justify-center" style={bg}>
      <div className='flex justify-center flex-col'>
        <h1 className='text-white text-center text-6xl my-3'>Welcom to moringa</h1>
        <h1 className='text-white text-center text-3xl my-3'>Join us</h1>
        <div className='mx-auto'>
          <button className='bg-red-600 px-6 py-2 rounded-xl text-2xl text-white'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Home