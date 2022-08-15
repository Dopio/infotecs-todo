import React, { useReducer, useState } from 'react'
import { TodoList } from '../components/todoList'
import { reducer, initialState } from './store'
import { addTodo, deleteTodo, editTodo, saveTodo } from './actions'
import { TodoEditingArea } from '../../todo-editingArea/todoEditingAreaDescription/TodoEditingAreaDescription'

export const TodoListContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [titleValue, setTitleValue] = useState('')
  const [descriptValue, setDescriptValue] = useState('')
  const [edit, setEdit] = useState(null)

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

  console.log(state.todos)
  return <>
    <TodoList
      state={state}
      handleAddTodo={handleAddTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleSaveTodo={handleSaveTodo}
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      edit={edit}
      setEdit={setEdit}
      handleSetActiveTodo={handleSetActiveTodo}
      descriptValue={descriptValue}
      setDescriptValue={setDescriptValue}
    />
    <TodoEditingArea
      state={state}
      handleAddTodo={handleAddTodo}
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      edit={edit}
      setDescriptValue={setDescriptValue}
      descriptValue={descriptValue}
    />
  </>
}
