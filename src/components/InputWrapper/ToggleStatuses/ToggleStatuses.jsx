import './ToggleStatuses.scss'
function ToggleStatuses({handleAllDone}) {
    return (
        <i className='toggleStatuses' onClick={handleAllDone}>
        </i>
    );
}

export default ToggleStatuses;