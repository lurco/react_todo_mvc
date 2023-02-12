export async function getAllTasksAPI(signal) {
    const response = await fetch('http://localhost:3001/tasks', {signal});
    return await response.json();
}

export async function addTaskAPI(task) {
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

export async function deleteTaskAPI(taskID) {
    const response = await fetch(`http://localhost:3001/tasks/${taskID}`, {method: 'DELETE'});

    return await response.json();
}

export async function changeStatusAPI(taskID, status) {
    const response = await fetch(`http://localhost:3001/tasks/${taskID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status})
    });

    return await response.json();
}

export async function getTaskAPI(id) {
    const response = await fetch(`http://localhost:3001/tasks/${id}`);
    return await response.json();
}

export async function editTaskAPI(task){
    const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    return await response.json();
}