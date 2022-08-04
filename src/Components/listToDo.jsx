import { useState } from 'react';
import './ListToDo.scss'

let ListToDo = ({ todo, setToDo }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    let deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id);
        setToDo(newTodo);
    };

    let editTodo = (id, title) => {
        setEdit(id);
        setValue(title);
    };

    let saveTodo = (id) => {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        })
        setToDo(newTodo);
        setEdit(null);
    };

    return (
        <div className='taskToDo__list'>
            {
                todo.map(item => (
                    <div className='taskToDo__list_item' key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                                    <button onClick={() => saveTodo(item.id)}>Save</button>
                                </div>
                                :
                                <div>{item.title}</div>
                        }
                        <button class="btn btn-delete" onClick={() => deleteTodo(item.id)}>
                            <span class="mdi mdi-delete mdi-24px"></span>
                            <span class="mdi mdi-delete-empty mdi-24px"></span>
                            <span>Delete</span>
                        </button>
                        <button onClick={() => editTodo(item.id, item.title)}>Edit todo</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ListToDo;