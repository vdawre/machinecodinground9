import React from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../dataContext'
import VideoCard from '../components/VideoCard'

const WatchLater = () => {
  const { watchLater, setWatchLater } = useGlobalContext()
  return (
    <div className='hStack nowrap'>
      <Navbar />
      <div className='vStack px py'>
      <p className='h4'>Watchlater</p>
      {
        watchLater.map((video, index) => <VideoCard data={video} key={index} />)
      }
      </div>
    </div>
  )
}

export default WatchLater