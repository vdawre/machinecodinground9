import React from 'react'
import { useGlobalContext } from '../dataContext'

const SearchBar = () => {
    const { setQuery } = useGlobalContext()

    const handleQuery = (event) => {
        setQuery(event.target.value)
    }

  return (
    <div className='searchbar px py'>
        <input type='search' onChange={handleQuery} placeholder='Search video' />
    </div>
  )
}

export default SearchBar