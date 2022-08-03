import { useState } from 'react';
import './App.css';
import AddToDo from './Components/addToDo';
import ListToDo from './Components/listToDo';
import SearchToDo from './Components/searchToDo';

function App() {

const [todo, setToDo] = useState([
  {
    id: 1,
    title: "first todo",
    status: true,
  },
  {
    id: 2,
    title: "second todo",
    status: true,
  },
  {
    id: 3,
    title: "third todo",
    status: true,
  },
]);

  return (
    <body>
      <div className='body_wrapper'>
        <div className='taskToDo_body'>
          <SearchToDo />
          <ListToDo todo={todo} setToDo={setToDo}/>
          <AddToDo todo={todo} setToDo={setToDo}/>
        </div>
        <div className='editingToDo_body'>

        </div>
      </div>
    </body>
  );
}

export default App;
