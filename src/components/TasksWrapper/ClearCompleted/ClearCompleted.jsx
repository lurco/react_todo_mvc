import './ClearCompleted.scss'

function ClearCompleted({handleDeleteAllTasks, tasks}) {
    return (
        <>
    <span className={!!tasks.filter((task) => task.status).length ? 'clear-completed' : 'clear-completed clear-completed--hidden'}
        onClick={handleDeleteAllTasks}>Clear Completed</span>
        </>
    );
}

export default ClearCompleted;