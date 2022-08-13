import React, { useState } from 'react'
import classes from './TodoSearch.module.css'

export const TodoSearch = ({ state }) => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className={classes.task__search}>
      <input
        className={classes.task__search_input}
        type="text"
        value={searchValue}
        placeholder='Search task'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {state.todos.filter((item) => {
        if (searchValue === '') {
          return null
        } else if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return item.title
        } else return null
      }).map((item, key = item.id) => {
        return (
          <div className='title' key={key}>
            {item.title}
          </div>
        )
      })}
    </div>
  )
}
