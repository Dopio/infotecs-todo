import React, { useState } from 'react'
import { TodoAddingBlock } from '../todoAddingBlock/TodoAddingBlock'
import { DeleteTodo } from '../todoPreview/deleteTodo/DeleteTodo'
import { EditTodos } from '../todoPreview/editTodo/EditTodo'
import { SaveTodo } from '../todoPreview/saveTodo/SaveTodo'
import { TodoSearch } from '../todoSearch/TodoSearch'
import classes from './TodoList.module.css'

/* const filterTodo = (tasks, searchValue) => {
  if (!searchValue) {
    return tasks
  }
  console.log(tasks)
  return tasks.filter((task) => {
    return task.title.toLowerCase().includes(searchValue.toLowerCase())
  })
} */

export const TodoList = ({
  state,
  handleAddTodo,
  handleDeleteTodo,
  handleSaveTodo
}) => {
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(null)
  /* const filtredtasks = filterTodo(tasks, searchValue) */

  const editTaskHandler = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  return (<>

    {<div className={classes.tasks__list}>{/* todo Preview для каждого из функций */}
      <div className={classes.taskList__title}>
        task list
      </div>
      <TodoSearch state={state}/>
      {
        state.todos.map(item => (
          <div className={classes.tasks__list_item} key={item.id}>
            {edit === item.id
              ? <>
                <input
                  className={classes.task__item_input}
                  value={value}
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                />
                <SaveTodo
                  handleSaveTodo={handleSaveTodo}
                  title={value}
                  itemId={item.id}
                  setEdit={setEdit}
                />
              </>
              : <>
                <div className={classes.task__item_title}>{item.title}</div>
                <DeleteTodo
                  handleDeleteTodo={handleDeleteTodo}
                  itemId={item.id}
                />
                <EditTodos
                  editTaskHandler={editTaskHandler}
                  title={item.title}
                  itemId={item.id}
                />
              </>
            }
          </div>
        ))
      }
      <TodoAddingBlock handleAddTodo={handleAddTodo} />
    </div>}
  </>
  )
}
