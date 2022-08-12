import React from 'react'

export const TodoEditingArea = ({ tasks }) => {
  return (
    <div className='task__description'>
      {tasks.map(item => (
        <div key={item.id}>
          {item.active ? <div>{item.description}</div> : <></>}
        </div>
      ))}
    </div>
  )
}
