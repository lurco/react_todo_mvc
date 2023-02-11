import './TasksWrapper.scss'
import Tasks from "./Tasks/Tasks";
import TaskCounter from "./TaskCounter/TaskCounter";
import TaskFilters from "./TaskFilters/TaskFilters";
import ClearCompleted from "./ClearCompleted/ClearCompleted";

function TasksWrapper({tasks, filter, handleChangeStatus, handleDeleteTask, setFilter, handleDeleteAllTasks, handleEditTask}) {
    return (
        <div className='tasksWrapper'>
            <Tasks
                tasks={tasks}
                filter={filter}
                handleChangeStatus={handleChangeStatus}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
            />
            <div className='tasksOptions'>
                <TaskCounter
                    tasks={tasks}
                />
                <TaskFilters
                    setFilter={setFilter}
                    filter={filter}
                />
                <ClearCompleted
                    handleDeleteAllTasks={handleDeleteAllTasks}
                    tasks={tasks}
                />
            </div>
        </div>
    );
}

export default TasksWrapper;