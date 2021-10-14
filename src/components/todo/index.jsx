import PropTypes from "prop-types";
import React, {useState, useEffect} from 'react';

import {GoTrashcan, GoCheck} from 'react-icons/go';

import './styles.css'

export const Todo = (props) =>{
    //State can be a completed state or non completed state, we use useState for this
    const [isComplete, setIsComplete] = useState(false);

    //Fires when the component first loads and sets the property, basically an initialize function
    useEffect(()=>{
        setIsComplete(props.isComplete);
    }, [props.isComplete])

    const toggleCompleteTodo = () => {
        setIsComplete(!isComplete);
    }

    return(
        //separate class names with a space here, so it's class = todo and class =  props.color
        <div className={`todo ${props.color}`} style={isComplete ? {opacity: 0.2} : {}}>
            {/* JSX can display variable inside text */}
            <div>
                <p className="todo-text">{props.text}</p>
                <p className="todo-date">{props.date}</p>
            </div>

            <div className="todo-btns">
                <button className="todo-complete" onClick={toggleCompleteTodo}>
                    <GoCheck className="todo-icon" style={{fontSize: "35px"}}/>
                </button>
                <button className="todo-delete">
                    <GoTrashcan className="todo-icon" style={{fontSize:"35px"}}/>
                </button>
            </div>

        </div>
    )
}

Todo.propTypes = {
    //in order to display properly a string proptype is required
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string,
    //can have default values for non required props
    priority: PropTypes.bool,
    isComplete: PropTypes.bool.isRequired

}

Todo.defaultProps = {
    text: "",
    date: "",
    color: "gray",
    priority: false,
    isComplete: false
}