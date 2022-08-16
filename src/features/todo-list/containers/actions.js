/** action-creator добавления todo */
export const addTodo = (todo) => ({
  type: 'add-todo',
  todo
})

/** action-creator удаления todo */
export const deleteTodo = (id) => ({
  type: 'delete-todo',
  id
})

/** action-creator сохранения todo */
export const saveTodo = (title, description, id) => ({
  type: 'save-todo',
  title,
  description,
  id
})

/** action-creator режима редактирования todo */
export const editTodo = (id) => ({
  type: 'edit-todo',
  id
})
