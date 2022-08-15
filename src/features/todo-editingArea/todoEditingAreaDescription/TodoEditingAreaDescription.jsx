import React from 'react'
import { TodoAddingBlock } from '../../todo-list/components/todoAddingBlock/TodoAddingBlock'
import classes from './TodoEditingAreaDescription.module.css'

export const TodoEditingArea = ({
  state,
  handleAddTodo,
  titleValue,
  setTitleValue,
  setDescriptValue,
  descriptValue
}) => {
  return (
    <div className={classes.editingArea__wrapper}>
      <div className={classes.taskList__title}>
        just do it!
      </div>
      {state.todos.map((item) => (
        <div className={classes.editingItem__wrapper} key={item.id}>
          {item.active === true
            ? <>
              <div className={classes.editArea__input_wrapper}>
                <input
                  className={classes.editArea__input}
                  value={titleValue}
                  type="text"
                  onChange={(e) => setTitleValue(e.target.value)}
                />
              </div>
              <div className={classes.task__description}>
                <textarea
                  className={classes.textArea__description}
                  cols="30"
                  rows="10"
                  value={descriptValue}
                  onChange={(e) => setDescriptValue(e.target.value)}
                />
              </div>
            </>
            : <></>
          }
        </div>
      ))
      }

      <TodoAddingBlock handleAddTodo={handleAddTodo} />
    </div >
  )
}
