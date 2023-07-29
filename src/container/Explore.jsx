import React from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../dataContext'
import VideoCard from '../components/VideoCard'

const Explore = () => {
  const { videosDb , query, setQuery } = useGlobalContext()

  const printAllVideos = () => videosDb.map((video, index) => <VideoCard data={video} key={index} />)

  const filteredVideos = videosDb.filter((video) => video.title.toLowerCase().includes(query))
  const displayFilteredVideos = () => filteredVideos.map((video, index) => <VideoCard data={video} key={index} />)

  return (
    <div className='hStack nowrap'>
      <Navbar />
      <div className='vStack'>
        <SearchBar />
        <div className='hStack px py wrap'>
        {
          query.length === 0 ? printAllVideos() : displayFilteredVideos()
        }
        </div>
      </div>
    </div>
  )
}

export default Explore