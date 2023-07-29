import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryCard = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className='category-card' name={data.category} onClick={() => navigate(`/${data.category}`)}>
        <img src={data.thumbnail} />
        <h4>{data.category}</h4>
    </div>
  )
}

export default CategoryCard