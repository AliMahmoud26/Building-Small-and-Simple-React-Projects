import React, { useState } from 'react'

const Categories = ({categories, filterItems}) => {
    const [activeCategory, setActiveCategory] = useState('all');
  return (
    <div className='btn-container'>
        {
            categories.map((category, id) => {
                return (
                    <button 
                    type='button' 
                    key={id}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => {filterItems(category); setActiveCategory(category)}}
                    >{category}</button>
                )
            })
        }
    </div>
  )
}

export default Categories