import Header from "./components/Header/Header";
import InputWrapper from "./components/InputWrapper/InputWrapper";
import TasksWrapper from "./components/TasksWrapper/TasksWrapper";
import {Outlet, useLocation} from "react-router-dom";


function Layout({handleAllDone,
                    handleAddTask,
                    handleChangeStatus,
                    handleDeleteTask,
                    setFilter,
                    handleDeleteAllTasks,
                    handleEditTask,
                    tasks,
                    setTasks,
                    filter}) {
    const location = useLocation();
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
                <Outlet key={location.pathname}/>
        </>
    );
}

export default Layout;