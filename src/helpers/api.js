export async function getAllTasksAPI(signal) {
    const response = await fetch('http://localhost:3001/tasks', {signal});
    return await response.json();
}

export async function addTaskAPI(task){
    const response = await fetch('http://localhost:3001/tasks',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    return await response.json();
}