import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../dataContext'
import ReactPlayer from 'react-player'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import { MdPlaylistAdd, MdPlaylistRemove } from 'react-icons/md'

const SingleVideo = () => {
    const { _id } = useParams()

    const { videosDb, playlist, setPlaylist } = useGlobalContext()
    const { setWatchLater, watchLater} = useGlobalContext()

    const clickedVideo = videosDb.find((video) => video._id === Number(_id) )

    const isVideoPresent = watchLater.findIndex((video) => video._id === Number(_id))
    const isVideoPresentPlaylist = playlist.findIndex((video) => video._id === Number(_id))
  
    const handleAddToWatchLater = () => {
        if(isVideoPresent === -1){
            setWatchLater([...watchLater, clickedVideo] )
        } else {
            alert("item already present")
        }}
  
    const handleRemoveFromWatchLater = () => {
        if(isVideoPresent != -1){
            const filterData = watchLater.filter((video) => video._id != Number(_id) )
            setWatchLater(filterData)
        }}

    const handleAddToPlaylist = () => {
        if(isVideoPresentPlaylist === -1){
            setPlaylist([...playlist, clickedVideo] )
        } else {
            alert("item already present")
        }}
    
    const handleRemoveFromPlaylist = () => {
        if(isVideoPresentPlaylist != -1){
            const filterData = playlist.filter((video) => video._id != Number(_id) )
            setPlaylist(filterData)
        }}


    

  return (
    <div className='hStack nowrap'>
      <Navbar />
      <div className='vStack '>
        <ReactPlayer url={clickedVideo.src} controls={true} height="400px"/>
        <div className='hStack video-section' style={{ gap:"12px"}}>
            <img src="https://source.unsplash.com/random/?person" className='avatar' />
            <h4>{clickedVideo.title}</h4>
            <div className='hStack' style={{ gap:"12px"}}>
            {isVideoPresent === -1  && <GrAdd className='icons' onClick={handleAddToWatchLater} />}
            {isVideoPresent !== -1 && <GrSubtract className='icons' onClick={handleRemoveFromWatchLater} /> }
            {isVideoPresentPlaylist === -1  && <MdPlaylistAdd className='icons' onClick={handleAddToPlaylist} />}
            {isVideoPresentPlaylist !== -1 && <MdPlaylistRemove className='icons' onClick={handleRemoveFromPlaylist} /> }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleVideo