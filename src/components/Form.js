import React from 'react';
import './Form.css';

const Form = (props) => (
    /* Bootstrap was used bellow */
    <form className="Form" onSubmit={props.addTask}>
        <div>
            <input type="text" name="input" 
                onChange={props.input} 
                value={props.value} 
                placeholder={props.placeholder} 
                className={props.error ? "form-control is-invalid " : "form-control"}
            />
            <div className="invalid-feedback bg-dark p-2">Task required</div>
            <button type="submit" className="btn btn-success btn-block mt-2">Add</button>
        </div>
    </form>
);

export default Form;