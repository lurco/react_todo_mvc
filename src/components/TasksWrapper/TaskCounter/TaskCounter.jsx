import './TaskCounter.scss'
function TaskCounter({tasks}) {
    return (
        <span>
            {tasks.filter((task) => !task.status).length}
            {` item${tasks.filter((task) => !task.status).length === 1 ? '' : 's'}`} left
        </span>
    );
}

export default TaskCounter;