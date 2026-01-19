import React from 'react'
import './CategoryBar.css'

const CategoryBar = ({list, handleClick}) => {
  return (
   <>
   <ol className='category-bar'>
    {
        list.map(
            (item,index)=>(<li onClick={()=>handleClick(item)} key={index}>{item}</li>)
        )
    }
   </ol>
   </>
  )
}

export default CategoryBar