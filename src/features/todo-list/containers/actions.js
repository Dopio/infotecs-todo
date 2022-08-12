/** action-creator добавления todo */
export const addTodo = (todo) => ({
  type: 'add-todo',
  todo
})

export const deleteTodo = (id) => ({
  type: 'delete-todo',
  id
})

export const saveTodo = (title, id) => ({
  type: 'save-todo',
  title,
  id
})
