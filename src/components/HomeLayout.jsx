import React from 'react'
import { useGlobalContext } from '../dataContext'
import CategoryCard from './CategoryCard'

const HomeLayout = () => {
    const { categoriesDb } = useGlobalContext()

  return (
    <div className='hStack wrap px py' >
        {
            categoriesDb.map((category, index) => {
                return <CategoryCard data={category} key={index} /> 
            })
        }
    </div>
  )
}

export default HomeLayout