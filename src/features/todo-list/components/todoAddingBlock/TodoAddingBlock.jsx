import React, { useState } from 'react'
import './TodoAddingBlock.css'

export const TodoAddingBlock = ({ handleAddTodo }) => {
  const [value, setValue] = useState('')

  return (
    <div className='taskAdd__wrapper'>
      <div className='taskAdd__input_wrapper'>
        <input
          className='taskAdd__input'
          type="text"
          placeholder='New Task'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="taskAdd__button_wrapper">
        <button
          onClick={() => handleAddTodo({
            title: value,
            id: +String(performance.now()).replace('.', '') + Date.now(),
            description: '',
            active: false
          }) & setValue('')}
          className="button">
          <span className='taskAdd__buttonText'>+</span>
        </button>
      </div>
    </div>
  )
}
