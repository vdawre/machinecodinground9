import React from 'react'
import Navbar from '../components/Navbar'
import '../style.css'
import HomeLayout from '../components/HomeLayout'

const Home = () => {
  return (
    <div className='hStack nowrap'>
      <Navbar />
      <HomeLayout />
    </div>
  )
}

export default Home