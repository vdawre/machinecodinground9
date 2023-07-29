import React, { useState } from 'react'
import { useGlobalContext } from '../dataContext'
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io'
import Navbar from '../components/Navbar'

const Playlist = () => {
  const { playlist, setPlaylist } = useGlobalContext()
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ data, setData ] = useState([])

  const handleAddPlaylist = (e) => {
    e.preventDefault();
    setPlaylist([...playlist,
      {
        name: name,
        description: description,
        data: [],
      },
    ])
  }

  return (
    <div className='hStack nowrap'>
      <Navbar />
      <div className='vStack px py'>
        <h1>Your Playlists</h1>
        {
          isModalOpen ? <IoIosCloseCircleOutline className='icons' onClick={() => setIsModalOpen(!isModalOpen)}/> : <IoIosAddCircleOutline className='icons' onClick={() => setIsModalOpen(!isModalOpen)}/>
        }
        {
          isModalOpen && 
          <form>
            <div className='form-section'>
            <input type='text' value={name} placeholder='Name' onChange={(event) => setName(event.target.value)}/>
            <input type='text' value={description} placeholder='Description' onChange={(event) => setDescription(event.target.value)}/>
            <button className='btn' type='submit' onClick={handleAddPlaylist}>Add Playlist</button>
            </div>
          </form>
        }
        {
          playlist.map((item, index) => <div className='playlist-card px py' key={index}>
            <img src='https://source.unsplash.com/random/?person' className='playlist-image'/>
            <p className='h4'>
              {item.name}
            </p>
            <p className='subtitle'>{item.description}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Playlist