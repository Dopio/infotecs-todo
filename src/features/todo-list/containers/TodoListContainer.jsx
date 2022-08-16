import React, { useReducer, useState } from 'react'
import { TodoList } from '../components/TodoList/TodoList'
import { reducer, initialState } from './store'
import { addTodo, deleteTodo, editTodo, saveTodo } from './actions'
import { TodoEditingArea } from '../../todo-editingArea/TodoEditingArea'

export const TodoListContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleSaveTodo = (title, description, id) => {
    dispatch(saveTodo(title, description, id))
  }

  const handleSetActiveTodo = (id) => {
    dispatch(editTodo(id))
  }

  return <>
    <TodoList
      state={state}
      handleDeleteTodo={handleDeleteTodo}
      handleSaveTodo={handleSaveTodo}
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      handleSetActiveTodo={handleSetActiveTodo}
      descriptionValue={descriptionValue}
      setDescriptionValue={setDescriptionValue}
      handleAddTodo={handleAddTodo}
    />
    <TodoEditingArea
      state={state}
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      setDescriptionValue={setDescriptionValue}
      descriptionValue={descriptionValue}
    />
  </>
}
