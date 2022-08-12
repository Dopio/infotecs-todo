import React from 'react'

export const TodoEditingArea = ({ tasks }) => {
  return (
    <div className='taskEditing__wrapper'>
      <div className='taskEditing__title'>
        just do it
      </div>
      <div className='task__title'>
        {tasks.map(item => (
          <div key={item.id}>
            {item.active ? <div>{item.title}</div> : <></>}
          </div>
        ))}
      </div>
    </div>
  )
}
