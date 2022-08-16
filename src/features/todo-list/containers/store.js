/* Начальные данные */
export const initialState = {
  todos: [
    {
      id: 1,
      title: 'Lorem Ipsum is simply dummy text of the printing.',
      description: 'How can i do it? Ez',
      active: false
    },
    {
      id: 2,
      title: 'Learning',
      description: 'useState and useReducer!',
      active: false
    }
  ]
}

/* Логика взаимодействия с данными */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo':
      return {
        ...state,
        todos: action.todo.title !== '' ? [...state.todos, action.todo] : state.todos
      }
    case 'delete-todo':
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id)
      }
    case 'save-todo':
      return {
        ...state,
        todos: state.todos.map(item => (
          item.id === action.id
            ? { ...item, title: action.title, description: action.description, active: false }
            : item
        ))
      }
    case 'edit-todo':
      return {
        ...state,
        todos: state.todos.map(item => (
          item.id === action.id
            ? { ...item, active: true }
            : { ...item, active: false }
        ))
      }
    default:
      return state
  }
}
