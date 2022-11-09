import React from 'react'
import dBackground from '../assets/home/background-home-desktop.jpg'
import tBackground from '../assets/home/background-home-tablet.jpg'
import mBackground from '../assets/home/background-home-mobile.jpg'
import HomeComponent from '../components/HomeComponent'

const Home = ({sethash}) => {
  sethash('#/')
  return (
    <div className='w-full h-screen'>
        <img className='hidden dp:block w-full h-full' alt='background' src={dBackground} />
        <img className='hidden md:block dp:hidden w-full h-full' src={tBackground} alt='background' />
        <img className='md:hidden  w-full h-full' src={mBackground} alt='background' />
        <HomeComponent/>
    </div>
  )
}

export default Home