import { useState } from 'react';
import './AddToDo.css';
import { v4 as uuidv4 } from 'uuid';

let AddToDo = ({ todo, setToDo }) => {

    const [value, setValue] = useState('');

    let saveTodo = () => {
        setToDo(
            [
                ...todo,
                { id: uuidv4(), title: value, status: true, active: false },
            ]
        );
        setValue('');
    };

    return (
        <div className='taskToDo__addNew'>
            <div className='addNewTodo__input_wrapper'>
                <input
                    className='addNewTodo__input'
                    type="text"
                    placeholder='New Todo'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="wrap">
                <button onClick={saveTodo} className="button">
                    <span className='button__text'>+</span>
                </button>
            </div>
        </div>
    );
};

export default AddToDo;