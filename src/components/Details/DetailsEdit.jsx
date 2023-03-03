import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTaskAPI, editTaskAPI} from "../../helpers/api";
import {Formik} from "formik";
import moment from "moment";

function DetailsEdit() {
    const [task, setTask] = useState({});
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getTaskAPI(id).then((data) => {
            setTask({...data, createAt: moment(data.createAt).format('yyyy-MM-DD hh:mm')});
            console.log({...data, createAt: data.createAt});
        })
    }, [])

    return (
        <div className="overlay">
            <div className="details__wrapper">
                {!Object.keys(task).length ? (
                    <h3>Loading...</h3>
                ) : (
                    <Formik
                        initialValues={{description: '', ...task}}
                        validate={(values) => {
                            const errors = {};

                            if (values.name.length < 3) {
                                errors.name = 'Tasks should have at least 3 characters!'
                            }
                            return errors;
                        }}
                        onSubmit={async (values, {isSubmitting}) => {
                            await editTaskAPI({...task, ...values, id: task.id})
                            navigate(`/details/${task.id}`);
                        }}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              errors,
                              touched,
                              isSubmitting
                          }) => (
                            <form onSubmit={handleSubmit} className="details__form">
                                <input
                                    type='text'
                                    name='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className="form__name"
                                />
                                {errors.name && touched.name && errors.name}

                                <input
                                    type='datetime-local'
                                    name='createAt'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.createAt}
                                    className="form__date"
                                />
                                {errors.createAt && touched.createAt && errors.createAt}

                                <textarea
                                    name='description'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    className="form__desc"
                                />
                                {errors.description && touched.description && errors.description}

                                <button type="submit" disabled={isSubmitting} className="form__submit">
                                    Update
                                </button>
                            </form>
                        )}
                    </Formik>
                )}</div>
        </div>
    );
}

export default DetailsEdit;