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