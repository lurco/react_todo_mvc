import './Tasks.scss'
import Task from "./Task/Task";
function Tasks({tasks, filter, handleChangeStatus, handleDeleteTask, handleEditTask}) {
    return (
        <ul>
            {tasks
                .filter((task) => filter === 'all' ? true : task.status === filter)
                .map((task) => (<Task
                                    handleChangeStatus={handleChangeStatus}
                                    handleDeleteTask={handleDeleteTask}
                                    task={task}
                                    tasks={tasks}
                                    key={task.id}
                                    handleEditTask={handleEditTask}
                    />)
                )}
        </ul>);
}

export default Tasks;