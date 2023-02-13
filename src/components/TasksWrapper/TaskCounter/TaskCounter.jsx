import './TaskCounter.scss'

function TaskCounter({tasks}) {
    const taskCount = tasks.filter((task) => !task.status).length;
    if (taskCount === 1) {
        return (
            <span className="taskCounter">
            {`1 item left`}
        </span>
        );
    } else {
        return (
            <span className="taskCounter">
            {`${taskCount} items left`}
        </span>
        );
    }
}

export default TaskCounter;