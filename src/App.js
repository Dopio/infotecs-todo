import './App.css';
import AddToDo from './Components/addToDo';
import ListToDo from './Components/listToDo';
import SearchToDo from './Components/searchToDo';

function App() {
  return (
    <body>
      <div className='body_wrapper'>
        <div className='taskToDo_body'>
          <SearchToDo />
          <ListToDo />
          <AddToDo />
        </div>
        <div className='editingToDo_body'>

        </div>
      </div>
    </body>
  );
}

export default App;
