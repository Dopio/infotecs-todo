import { useState } from 'react';
import './App.css';
import AddToDo from './Components/addToDo';
import EditingToDo from './Components/editingToDo';
import ListToDo from './Components/listToDo';
import SearchToDo from './Components/searchToDo';

function App() {

  const [todos, setToDo] = useState([
    {
      id: 1,
      title: "abc",
      description: "How can i do it? Ez",
      active: false,
    },
    {
      id: 2,
      title: "ghj",
      description: "useState and useReducer plz!",
      active: true,
    },
  ]);

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='body_wrapper'>
      <div className='taskToDo_body'>
        <div className='todoLeft__title'>todo list</div>
        <SearchToDo todos={todos} setToDo={setToDo} />
        <ListToDo todos={todos} setToDo={setToDo} />
        <div className='adddTodo__wrapper'> {/* Оболочка необходима для выделения крайнего элемента flex конструкции и привязки к полу*/}
          {/* <AddToDo todos={todos} setToDo={setToDo} /> */}
        </div>
      </div>
      {/* <EditingToDo todos={todos} setToDo={setToDo} /> */}
    </div>
  );
}

export default App;
