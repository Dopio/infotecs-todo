import React, { useState } from 'react'
import { TodoAddingBlock } from '../TodoAddingBlock/TodoAddingBlock'
import { DeleteTodo } from '../todoPreview/DeleteTodo/DeleteTodo'
import { EditTodos } from '../todoPreview/EditTodo/EditTodo'
import { SaveTodo } from '../todoPreview/SaveTodo/SaveTodo'
import classes from './TodoList.module.css'

/* Список Todo */
export const TodoList = ({
  state,
  handleDeleteTodo,
  handleSaveTodo,
  titleValue,
  setTitleValue,
  handleSetActiveTodo,
  descriptionValue,
  setDescriptionValue,
  handleAddTodo
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [edit, setEdit] = useState(false)

  const editTaskHandler = (id, title, description) => {
    setEdit(id)
    setTitleValue(title)
    setDescriptionValue(description)
  }

  const onSaveTodo = (id) => {
    handleSaveTodo(titleValue, descriptionValue, id)
    setEdit(false)
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
                  handleSaveTodo={() => onSaveTodo(item.id)}
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
      <TodoAddingBlock handleAddTodo={handleAddTodo} />
    </div>
  )
}
