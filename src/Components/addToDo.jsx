import { useState } from 'react';
import './AddToDo.css';
import { v4 as uuidv4 } from 'uuid';

let AddToDo = ({ todo, setToDo }) => {

    const [value, setValue] = useState('');

    let saveTodo = () => {
        setToDo(
            [
                ...todo,
                { id: uuidv4(), title: value, status: true }
            ]
        );
        setValue('');
    };

    return (
        <div className='taskToDo__addNew'>
            <input
                type="text"
                placeholder='Add new Todo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={saveTodo}>+</button>
        </div>
    );
};

export default AddToDo;