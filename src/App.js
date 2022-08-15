import React from 'react'
import 'normalize.css/normalize.css'
import 'reset-css/reset.css'
import { Layout } from './shared/Layout/Layout'
import { TodoListContainer } from './features/todo-list/containers/TodoListContainer'

export const App = () => {
  return <Layout>
    <TodoListContainer />
  </Layout>
}
