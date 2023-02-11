import './TaskFilters.scss'
function TaskFilters({setFilter, filter}) {
    return (
        <div className='filter-btns__wrapper'>
            <span className={'filter-btns' + (filter === 'all' ? ' filter-btns--active' : '')} onClick={() => setFilter('all')}>All</span>
            <span className={'filter-btns' + (!filter ? ' filter-btns--active' : '')} onClick={() => setFilter(false)}>Active</span>
            <span className={'filter-btns' + (filter !== 'all' && filter ? ' filter-btns--active' : '')} onClick={() => setFilter(true)}>Completed</span>
        </div>
    );
}

export default TaskFilters;