import React, { useReducer } from 'react'
import { TodoList } from '../components/todoList'
/* import { TodoEditingArea } from '../../todo-editingArea/todoEditingAreaTitle/TodoEditingAreaTitle' */
import { reducer, initialState } from './store'
import { addTodo, deleteTodo, saveTodo } from './actions'

export const TodoListContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleSaveTodo = (title, id) => {
    dispatch(saveTodo(title, id))
  }

  console.log(state.todos)
  return <>
    <TodoList
      state={state}
      handleAddTodo={handleAddTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleSaveTodo={handleSaveTodo}
    />
    {/* <TodoEditingArea state={state}/> */}
  </>
}
