import { useEffect, useState } from 'react';
import './TaskSearch.css'

let TaskSearch = ({ tasks, setTasks }) => {

    const [searchValue, setSearchValue] = useState('');

    const filterTodo = (searchValue) => {
        const newTasks = [...tasks]
        if (!searchValue) {
            return newTasks;
        }
        console.log(newTasks)
        return newTasks.filter((task) => {
            return task.title.toLowerCase().includes(searchValue.toLowerCase());
        });
    };

    useEffect(() => {
        const filteredTodo = filterTodo(searchValue);
        setTasks(filteredTodo);
    }, [searchValue]);

    return (
        <div className='task__search'>
            <input
                className='task__search_input'
                type="text"
                placeholder='Search task'
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
};

export default TaskSearch;