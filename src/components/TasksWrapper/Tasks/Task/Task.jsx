import './Task.scss'

function Task({task, handleChangeStatus, handleDeleteTask, handleEditTask}) {
    const {name, id, status} = task;

    return (
        <li key={id}
            className={'task' + (task.status ? ' task--done' : '')}>
            <span className={`task__status-btn task__status-btn--${status}`} onClick={() => handleChangeStatus(task)}></span>
            <span className='task__name'
                  contentEditable='true'
                  onBlur={(event) => handleEditTask(event, task)}>{task.name}</span>
            <span className='task__delete-btn' onClick={() => handleDeleteTask(task)}>x</span>
        </li>
    );
}

export default Task;