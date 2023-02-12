import {useEffect, useState} from "react";
import {Link, resolvePath, useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import {deleteTaskAPI, getTaskAPI} from "../../helpers/api";


function Details() {
    const [task, setTask] = useState([]);
    const [modal, setModal] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getTaskAPI(id).then(setTask);
    }, []);

    function toggleModal() {
        setModal(!modal);
    }

    async function handleDeleteTask() {
        await deleteTaskAPI(id);
        navigate('/');
    }

    return (
        <div>
            {modal ? (
                <>
                    <h2>{task.name} Are you sure?</h2>
                    <button onClick={toggleModal}>Cancel</button>
                    <button onClick={handleDeleteTask}>Confirm Delete</button>
                </>
            ) : (
                <>
                    <h1>{task.name}</h1>
                    <span>Created at: {moment(new Date(task.createAt), "YYYY-MM-DD").fromNow()}</span><span>{task.status}</span>
                    <p>{task.description}</p>
                    <Link to={`/details/${id}/edit`}>Edit</Link>
                    <button onClick={toggleModal}>Delete</button>
                </>
            )}
        </div>
    );
}

export default Details;