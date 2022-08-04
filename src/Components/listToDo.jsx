import { useState } from 'react';
import './ListToDo.scss';


const filterTodo = (todos, searchValue) => {
    if (!searchValue) {
        return todos;
    }
    console.log(todos)
    return todos.filter((todo) => {
        return todo.title.toLowerCase().includes(searchValue.toLowerCase());
    });
};


let ListToDo = ({ todos, setToDo, searchValue }) => {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const filtredTodos = filterTodo(todos, searchValue);


    let deleteTodo = (id) => {
        let newTodo = [...todos].filter(item => item.id !== id);
        setToDo(newTodo);
    };

    let editTodo = (id, title) => {
        setEdit(id);
        setValue(title);
    };

    let saveTodo = (id) => {
        let newTodo = [...todos].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        });
        setToDo(newTodo);
        setEdit(null);
    };

    return (
        <div className='taskToDo__list'>
            {
                filterTodo.map(item => (
                    <div className='taskToDo__list_item' key={item.id}>
                        {
                            edit === item.id ?
                                <>
                                    <input className='taskToDo__item_input' type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                                    <button className="button touch save" onClick={() => saveTodo(item.id)}></button>
                                </>
                                :
                                <>
                                    <div className='taskToDo__item_title'>{item.title}</div>
                                    <button className="button touch delete" onClick={() => deleteTodo(item.id)}></button>
                                    <button className="button touch edit" onClick={() => editTodo(item.id, item.title)}></button>
                                </>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default ListToDo;