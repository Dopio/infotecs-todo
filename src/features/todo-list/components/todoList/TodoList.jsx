import React, { useState } from 'react'
import { DeleteTodo } from '../todoPreview/deleteTodo/DeleteTodo'
import { EditTodos } from '../todoPreview/editTodo/EditTodo'
import { SaveTodo } from '../todoPreview/saveTodo/SaveTodo'
import classes from './TodoList.module.css'

export const TodoList = ({
  state,
  handleDeleteTodo,
  handleSaveTodo,
  titleValue,
  setTitleValue,
  edit,
  setEdit,
  handleSetActiveTodo,
  descriptValue,
  setDescriptValue
}) => {
  const [searchValue, setSearchValue] = useState('')

  const editTaskHandler = (id, title, description) => {
    setEdit(id)
    setTitleValue(title)
    setDescriptValue(description)
  }

  return (
    <div className={classes.tasks__list}>
      <div className={classes.taskList__title}>
        task list
      </div>
      <div className={classes.task__search}>
        <input
          className={classes.task__search_input}
          type="text"
          value={searchValue}
          placeholder='Search task'
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {state.todos.filter((item) => {
        if (searchValue === '') {
          return item
        } else if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return item.title
        } else return null
      })
        .map(item => (
          <div className={classes.tasks__list_item} key={item.id}>
            {edit === item.id
              ? <>
                <div className={classes.task__item_title}>{item.title}</div>
                <SaveTodo
                  handleSaveTodo={handleSaveTodo}
                  title={titleValue}
                  itemId={item.id}
                  setEdit={setEdit}
                  descriptValue={descriptValue}
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
                  handleSetActiveTodo={handleSetActiveTodo}
                  title={item.title}
                  itemId={item.id}
                  description={item.description}
                />
              </>
            }
          </div>
        ))
      }
    </div>
  )
}
