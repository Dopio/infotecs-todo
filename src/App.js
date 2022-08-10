import { useState } from 'react';
import './App.css';
import TaskAdd from './Components/TaskAdd';
import TaskEditing from './Components/TaskEditing';
import TaskList from './Components/TaskList';
import TaskSearch from './Components/TaskSearch';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "How can i do it? Ez",
      active: false,
    },
    {
      id: 2,
      title: "Learning",
      description: "useState and useReducer plz!",
      active: true,
    },
  ]);


  return (
    <div className='todo__body'>
      <div className='taskList__body_wrapper' >
        <div className='taskList__title'>task list</div>
        <TaskSearch tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <div className='taskAdd__wrapper'> {/* Оболочка необходима для выделения крайнего элемента flex конструкции и привязки к полу*/}
          <TaskAdd tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
      <div className='taskDescription__body_wrapper'>
        <TaskEditing tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
