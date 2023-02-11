import {useState} from "react";
import Header from "./components/Header/Header";
import InputWrapper from "./components/InputWrapper/InputWrapper";
import TasksWrapper from "./components/TasksWrapper/TasksWrapper";

function* genId() {
    let id = 0;

    while (true) {
        yield id;
        id++;
    }
}

const nextId = genId();

function App() {

    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    function handleInput(event) {
        setValue(event.target.value);
    }

    function handleAddTask(event) {
        if (event.key === 'Enter') {
            setTasks([...tasks, {
                id: nextId.next().value,
                name: value,
                status: false,
            }]);
            setValue('');
        }
    }

    function handleChangeStatus(task) {
        task.status = !task.status;
        setTasks([...tasks]);
    }

    function handleEditTask(event, taskEdited) {
        taskEdited.name = event.target.innerText;
        setTasks(tasks.map((task) => task.id === taskEdited.id ? taskEdited : task));
    }

    function handleDeleteTask(taskToRemove) {
        setTasks(tasks.filter((task) => task !== taskToRemove));
    }

    function handleDeleteAllTasks() {
        setTasks(tasks.filter((task) => !task.status));
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
                handleInput={handleInput}
                value={value}
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
