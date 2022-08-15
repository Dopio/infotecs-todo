/** action-creator добавления todo */
export const addTodo = (todo) => ({
  type: 'add-todo',
  todo
})

export const deleteTodo = (id) => ({
  type: 'delete-todo',
  id
})

export const saveTodo = (title, description, id) => ({
  type: 'save-todo',
  title,
  description,
  id
})

export const editTodo = (id) => ({
  type: 'edit-todo',
  id
})
