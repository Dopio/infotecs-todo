import { useState } from 'react';
import './TaskAdd.css';

let TaskAdd = ({ tasks, setTasks }) => {

    const [value, setValue] = useState('');

    let saveTodo = () => {
        setTasks(
            [
                ...tasks,
                { id: Math.random().toString(), title: value, status: true, active: false },
            ]
        );
        setValue('');
    };

    return (
        <div className='taskAdd__wrapper'>
            <div className='taskAdd__input_wrapper'>
                <input
                    className='taskAdd__input'
                    type="text"
                    placeholder='New Task'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="taskAdd__button_wrapper">
                <button onClick={saveTodo} className="button">
                    <span className='taskAdd__buttonText'>+</span>
                </button>
            </div>
        </div>
    );
};

export default TaskAdd;