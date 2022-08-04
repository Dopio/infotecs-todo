import { useEffect, useState } from 'react';
import './SearchToDo.css'

let SearchToDo = ({ todos, setToDo }) => {

    const filterTodo = (searchValue) => {
        const newTodos = [...todos]
        if (!searchValue) {
            return newTodos;
        }
        console.log(newTodos)
        return newTodos.filter((todo) => {
            return todo.title.toLowerCase().includes(searchValue.toLowerCase());
        });
    };

    /* const filterTodo = todo.filter(to => {
        return to.title.toLowerCase().includes(searchValue.toLowerCase());
    }); */

    useEffect(() => {
        const filteredTodo = filterTodo(searchValue);
        setToDo(filteredTodo);
    }, [searchValue]);

    return (
        <div className='taskToDo__search'>
            <input
                className='taskToDo__search_input'
                type="text"
                placeholder='Search todo'
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
};

export default SearchToDo;