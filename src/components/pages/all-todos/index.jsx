import "./styles.css";
import { Todo } from "../../todo/index";
import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../../context/todos-context";

export const AllToDosPage = () =>{
    const [todoElements, setTodoElements] = useState()

    const todosContext = useContext(TodosContext);

    useEffect(()=>{
        //use to tap into the component's lifecycle
        //gonna store JSX in here
        
        const todoElems = todosContext.todos.map((todoObject) => {
            return(
                <Todo
                    key={todoObject.id}
                    text={todoObject.title}
                    date={todoObject.date}
                    isComplete={todoObject.isComplete}
                    todoId={todoObject.id}>
                </Todo>
            )
        })
        setTodoElements(todoElems);
    }, [todosContext.todos])
    return(
        <div className="todos-container"> 
        {/* How we map through a list of items, usually an API call, but here we're just using an array */}
            {todoElements}
        </div>
    )
}