import './InputTask.scss'
function InputTask({handleAllDone, handleAddTask, handleInput, value}) {
    return (
        <input className='inputTask' type="text" value={value} onChange={handleInput} onKeyUp={handleAddTask}
               placeholder='What needs to be done'/>
    );
}

export default InputTask;