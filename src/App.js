import React from 'react'
import 'normalize.css/normalize.css'
import 'reset-css/reset.css'
// import TaskEditing from './components/TaskEditing';
// import TaskList from './components/TaskList';
// import TaskSearch from './components/TaskSearch';
import { Layout } from './shared/Layout/Layout'
import { TodoListContainer } from './features/todo-list/containers/TodoListContainer'

export const App = () => {
  return <Layout>
    <TodoListContainer />
  </Layout>

  //   return (
  //     <div className='todo__body'>
  //       <div className='taskList__body_wrapper' >
  //         <div className='taskList__title'>task list</div>
  //         <TaskSearch tasks={tasks} setTasks={setTasks} />
  //         <TaskList tasks={tasks} setTasks={setTasks} />
  //         <div className='taskAdd__wrapper'> {/* Оболочка необходима для выделения крайнего элемента flex конструкции и привязки к полу*/}
  //           <TaskAdd tasks={tasks} setTasks={setTasks} />
  //         </div>
  //       </div>
  //       <div className='taskDescription__body_wrapper'>
  //         <TaskEditing tasks={tasks} />
  //       </div>
  //     </div>
  //   );
}
