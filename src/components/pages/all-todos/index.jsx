import "./styles.css";
import { Todo } from "../../todo/index";

export const AllToDosPage = () =>{

    const todos = [
        {text: "Walk my dog", date: "10/10/2021", color: "blue", isComplete: false},
        {text: "Workout", date: "10/10/2021", color: "red", isComplete: false},
        {text: "Do assignment", date:"10/10/2021", color:"red", isComplete:true},
        
    ];

    return(
        <div className="todos-container"> 
        {/* How we map through a list of items, usually an API call, but here we're just using an array */}
            {todos.map((todo) => <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}/>)}
        </div>
    )
}