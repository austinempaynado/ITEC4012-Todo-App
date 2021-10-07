import PropTypes from "prop-types";

export const Todo = (props) =>{
    return(
        <div className="todo">
            {/* JSX can display variable inside text */}
            <p className="todo-text">{props.text}</p>
            <p className="todo-date">{props.date}</p>
            <button className="todo-complete">Complete</button>
            <button className="todo-delete">Remove</button>
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