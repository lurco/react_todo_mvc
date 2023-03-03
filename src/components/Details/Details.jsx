import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import {deleteTaskAPI, getTaskAPI} from "../../helpers/api";
import './Details.scss';


function Details(setTasks, tasks) {
    const [task, setTask] = useState([]);
    const [modal, setModal] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getTaskAPI(id).then(setTask);
    }, []);

    async function toggleModal() {
        setModal(!modal);
    }

    async function handleDeleteTask() {
        await deleteTaskAPI(id);
        setTasks(tasks.filter((task) => task.id !== id));
        navigate('/');
    }

    return (
        <div className="overlay">
            <div className="details__wrapper">
                {modal ? (
                    <>
                        <div className="modal__lbl">Are you sure you want to delete task:</div>
                        <div className="modal__hdl">"{task.name}"?</div>
                        <div className="modal__btns">
                            <button className="modal__cancel" onClick={toggleModal}>Cancel</button>
                            <button className="modal__confirm" onClick={handleDeleteTask}>Confirm delete</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="details__top">
                            <span className="details__hdl-lbl">Task name:</span>
                            <span className="details__hdn">
                                {task.name}
                            </span>
                            <Link
                                className="details__exit"
                                to="/">
                                x
                            </Link>
                        </div>

                        <span className="details__createAt">
                            <span className="details__createAt-lbl">
                                Created at:
                            </span>
                            {` ${moment(new Date(task.createAt), "YYYY-MM-DD").fromNow()}`}
                        </span>

                        <span className="details__status">
                            <span className="details__status-lbl">
                        Completion status:
                            </span>
                            {task.status ? ' completed' : ' in progress'}
                    </span>

                        <span className="details__desc-lbl">
                            Description (optional):
                        </span>
                        <p className="details__desc">
                            {task.description}
                        </p>

                        <div className="details__btns">
                            <Link to={`/details/${id}/edit`} className="details__edit">
                                Edit
                            </Link>
                            <Link to={false} onClick={toggleModal} className="details__del">
                                Delete
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Details;