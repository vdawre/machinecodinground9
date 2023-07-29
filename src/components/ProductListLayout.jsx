import React from 'react'
import { useGlobalContext } from '../dataContext'
import VideoCard from './VideoCard'
import { useParams } from 'react-router-dom'

const CategorytListLayout = () => {
    const { videosDb, activeCategory } = useGlobalContext()
    
    const {categoryName} = useParams()

    const foundVideos = videosDb.filter((video) => video.category === categoryName )

    console.log(categoryName)

  return (
    <div className='hStack wrap px py' >
        {
            foundVideos.map((video, index) => {
                return <VideoCard data={video} key={index} /> 
            })
        }
    </div>
  )
}

export default CategorytListLayout