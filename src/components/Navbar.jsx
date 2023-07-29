import React from 'react'
import '../style.css'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineExplore, MdPlaylistAdd, MdWatchLater } from 'react-icons/md'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="vStack px py navbar">
      <div onClick={()=>navigate("/")} className='nav-links'><AiFillHome className="icons " /><Link to="/">Home</Link></div>
      <div onClick={()=>navigate("/explore")} className='nav-links'><MdOutlineExplore className="icons " /><Link to="/">Explore</Link></div>
      <div onClick={()=>navigate("/playlist")} className='nav-links'><MdPlaylistAdd className="icons "/><Link to="/">Playlist</Link></div>
      <div onClick={()=>navigate("/watch-later")} className='nav-links'><MdWatchLater className="icons "/><Link to="/">Watch Later</Link></div>
    </div>
  )
}

export default Navbar