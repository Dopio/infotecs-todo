import './EditingToDo.css'

let EditingToDo = ({ todo, setToDo }) => {


    return (
        <div className='editingToDo__wrapper'>
            <div className='editingToDo__body_title'>
                just do it
            </div>
            <div className='editingToDo__body'>
                <div className='todo__title'>
                    {todo.map(item => (
                        <div key={item.id}>
                            {item.active ?
                                <div>
                                    <div>{item.title}</div>
                                    <div>{item.description}</div>
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                    ))}

                </div>
            </div>
            <div className='todo__description'>

            </div>
        </div>
    );
};

export default EditingToDo;