import ToggleStatuses from "./ToggleStatuses/ToggleStatuses";
import InputTask from "./InputTask";
import './InputWrapper.scss'

function InputWrapper({handleAllDone, handleAddTask}) {
    return (
        <div className='inputWrapper'>
        <ToggleStatuses
            handleAllDone={handleAllDone}
        />
        <InputTask
            handleAddTask={handleAddTask}
        />
        </div>
    );
}

export default InputWrapper;