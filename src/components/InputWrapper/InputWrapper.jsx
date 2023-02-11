import ToggleStatuses from "./ToggleStatuses/ToggleStatuses";
import InputTask from "./InputTask";
import './InputWrapper.scss'

function InputWrapper({handleAllDone, handleAddTask, handleInput, value}) {
    return (
        <div className='inputWrapper'>
        <ToggleStatuses
            handleAllDone={handleAllDone}
        />
        <InputTask
            value={value}
            handleInput={handleInput}
            handleAddTask={handleAddTask}
        />
        </div>
    );
}

export default InputWrapper;