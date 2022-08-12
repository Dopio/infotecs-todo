import React from 'react'
import clsx from 'clsx'
import classes from './SaveTodo.module.css'

export const SaveTodo = ({ handleSaveTodo, setEdit, title, itemId }) => {
  return (
    <button
      className={clsx(classes.button, classes.touch, classes.save)}
      onClick={() => handleSaveTodo(title, itemId) & setEdit(null)}
    />
  )
}