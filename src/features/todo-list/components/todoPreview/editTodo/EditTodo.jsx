import React from 'react'
import clsx from 'clsx'
import classes from './EditTodo.module.css'

export const EditTodos = ({
  editTaskHandler,
  itemId,
  title,
  handleSetActiveTodo,
  description
}) => {
  return (
    <button
      className={clsx(classes.button, classes.touch, classes.edit)}
      onClick={() => editTaskHandler(itemId, title, description) & handleSetActiveTodo(itemId)}
    />
  )
}
