import React from 'react'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import { useGlobalContext } from '../dataContext'
import WatchLater from '../container/WatchLater'
import { useNavigate, useParams } from 'react-router-dom'

const VideoCard = ({data}) => {
  const navigate = useNavigate()

  const { title, views, creator, thumbnail } = data

  const { setWatchLater, watchLater} = useGlobalContext()

  const isVideoPresent = watchLater.findIndex((video) => video._id === data._id)

  const handleAddToWatchLater = () => {
    if(isVideoPresent === -1){
        setWatchLater([...watchLater, data] )
    } else {
        alert("item already present")
    }}

    const handleRemoveFromWatchLater = () => {
    if(isVideoPresent != -1){
        const filterData = watchLater.filter((video) => video._id != data._id )
        setWatchLater(filterData)
    }}

  return (
    <div className='video-card' id={data._id} >
      <div className='overlay' >
        {isVideoPresent === -1  && <GrAdd className='icons' onClick={handleAddToWatchLater} />}
        {isVideoPresent !== -1 && <GrSubtract className='icons' onClick={handleRemoveFromWatchLater} /> }
      </div>
        <img src={thumbnail} onClick={() => navigate(`/video/${data._id}`)}/>
        <h4>{title}</h4>
        <p className="card-subtitle">{creator} | {views} views</p>
    </div>
  )
}

export default VideoCard