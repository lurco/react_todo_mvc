import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import InputWrapper from "./components/InputWrapper/InputWrapper";
import TasksWrapper from "./components/TasksWrapper/TasksWrapper";
import {addTaskAPI, getAllTasksAPI} from "./helpers/api.js";

function App() {

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const controller = new AbortController();
        getAllTasksAPI(controller.signal).then(setTasks);

        return () => {
            controller.abort();
        }
    }, []);

    async function deleteTaskAPI(taskID) {
        const response = await fetch(`http://localhost:3001/tasks/${taskID}`, {method: 'DELETE'});

        return await response.json();
    }

    async function handleAddTask(value) {
        const task = await addTaskAPI({name: value, status: false});
        setTasks([...tasks, task]);
    }

    function handleChangeStatus(task) {
        task.status = !task.status;
        setTasks([...tasks]);
    }

    function handleEditTask(event, taskEdited) {
        taskEdited.name = event.target.innerText;
        setTasks(tasks.map((task) => task.id === taskEdited.id ? taskEdited : task));
    }

    async function handleDeleteTask(taskToRemove) {
        await deleteTaskAPI(taskToRemove.id);
        setTasks(tasks.filter((task) => task !== taskToRemove));
    }

    async function handleDeleteAllTasks() {
        const filteredTasks = [];

        for (const task of tasks) {
            if (task.status) {
                await deleteTaskAPI(task.id);
            } else {
                filteredTasks.push(task);
            }
        }

        setTasks(filteredTasks);
    }

    function handleAllDone() {
        let done = tasks.every((task) => task.status === true);
        setTasks(tasks.map((task) => ({...task, status: !done})));
    }

    // CONTENT ========================================================================

    return (
        <>
            <Header/>
            <InputWrapper
                handleAllDone={handleAllDone}
                handleAddTask={handleAddTask}
            />
            <TasksWrapper
                tasks={tasks}
                filter={filter}
                handleChangeStatus={handleChangeStatus}
                handleDeleteTask={handleDeleteTask}
                setFilter={setFilter}
                handleDeleteAllTasks={handleDeleteAllTasks}
                handleEditTask={handleEditTask}
            />
        </>
    );
}

// CONTENT =========================================================================
export default App;
