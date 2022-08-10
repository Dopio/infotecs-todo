import './TaskEditing.css'

let TaskEditing = ({ tasks }) => {


    return (
        <div className='taskEditing__wrapper'>
            <div className='taskEditing__title'>
                just do it
            </div>
            <div className='taskEditing__body'>
                <div className='task__title'>
                    {tasks.map(item => (
                        <div key={item.id}>
                            {item.active ? <div>{item.title}</div> : <></>}
                        </div>
                    ))}
                </div>
            </div>
            <div className='task__description'>
                {tasks.map(item => (
                        <div key={item.id}>
                            {item.active ? <div>{item.description}</div> : <></>}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TaskEditing;