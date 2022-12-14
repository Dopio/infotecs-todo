import React from 'react'
import clsx from 'clsx'
import classes from './SaveTodo.module.css'

/* Сохранение отредактированной Todo */
export const SaveTodo = ({ handleSaveTodo }) => {
  return (
    <button
      className={clsx(classes.button, classes.touch, classes.save)}
      onClick={handleSaveTodo}
    />
  )
}
