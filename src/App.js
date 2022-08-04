import { useState } from 'react';
import './App.css';
import AddToDo from './Components/addToDo';
import EditingToDo from './Components/editingToDo';
import ListToDo from './Components/listToDo';
import SearchToDo from './Components/searchToDo';

function App() {

  const [todo, setToDo] = useState([
    {
      id: 1,
      title: "Create todo App",
      description: "How can i do it?\nEz",
      active: false,
    },
    {
      id: 2,
      title: "Learn react hooks",
      description: "useState and useReducer plz!",
      active: true,
    },
  ]);

  return (
    <div className='body_wrapper'>
      <div className='taskToDo_body'>
        <div className='todoLeft__title'>todo list</div>
        <SearchToDo />
        <ListToDo todo={todo} setToDo={setToDo} />
        <div className='adddTodo__wrapper'> {/* Оболочка необходима для выделения крайнего элемента flex конструкции и привязки к полу*/}
          <AddToDo todo={todo} setToDo={setToDo} />
        </div>
      </div>
      <EditingToDo todo={todo} setToDo={setToDo} />
    </div>
  );
}

export default App;
