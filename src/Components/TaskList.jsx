import { useState } from 'react';
import './TaskList.scss';


const filterTodo = (tasks, searchValue) => {
    if (!searchValue) {
        return tasks;
    }
    console.log(tasks)
    return tasks.filter((task) => {
        return task.title.toLowerCase().includes(searchValue.toLowerCase());
    });
};


let TaskList = ({ tasks, setTasks, /* searchValue */ }) => {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    /*  const filtredtasks = filterTodo(tasks, searchValue); */


    let deleteTaskHandler = (id) => {
        let newTask = [...tasks].filter(item => item.id !== id);
        setTasks(newTask);
    };

    let editTaskHandler = (id, title) => {
        setEdit(id);
        setValue(title);
    };

    let saveTaskHandler = (id) => {
        let newTask = [...tasks].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        });
        setTasks(newTask);
        setEdit(null);
    };



    return (
        <div className='tasks__list'>
            {
                tasks.map(item => (
                    <div className='tasks__list_item' key={item.id}>
                        {edit === item.id ?
                            <>
                                <input
                                    className='task__item_input'
                                    value={value}
                                    type="text" onChange={(e) => setValue(e.target.value)}
                                />
                                <button
                                    className="button touch save"
                                    onClick={() => saveTaskHandler(item.id)}
                                />
                            </>
                            :
                            <>
                                <div className='task__item_title'>{item.title}</div>
                                <button
                                    className="button touch delete"
                                    onClick={() => deleteTaskHandler(item.id)}
                                />
                                <button
                                    className="button touch edit"
                                    onClick={() => editTaskHandler(item.id, item.title)}
                                />
                            </>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default TaskList;