import React from 'react'
import clsx from 'clsx'
import classes from './DeleteTodo.module.css'

/* Удаление Todo */
export const DeleteTodo = ({ handleDeleteTodo, itemId }) => {
  return (
    <button
      className={clsx(classes.button, classes.touch, classes.delete)}
      onClick={() => handleDeleteTodo(itemId)}
    />
  )
}
