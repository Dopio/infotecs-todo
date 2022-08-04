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
    <body>
      <div className='body_wrapper'>
        <div className='taskToDo_body'>
          <SearchToDo />
          <ListToDo todo={todo} setToDo={setToDo} />
          <AddToDo todo={todo} setToDo={setToDo} />
        </div>
        <EditingToDo todo={todo} setToDo={setToDo}/>
      </div>
    </body>
  );
}

export default App;
