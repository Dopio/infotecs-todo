import './ListToDo.css'

let ListToDo = ({ todo, setToDo }) => {



    let deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id!==id);
        setToDo(newTodo);
    };

    return (
        <div className='taskToDo__list'>
            {
                todo.map(item => (
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <button onClick={() => deleteTodo(item.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ListToDo;