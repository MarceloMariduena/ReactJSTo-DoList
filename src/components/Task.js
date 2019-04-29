import React from 'react';
import './Task.css';

const Task = (props) => {
    return (
      <div className="Tasks">
        <li>
          {props.task}
          <button onClick={props.remove} className="btn btn-sm btn-danger float-right"> x </button>
        </li>
      </div>
    );
  };

export default Task;