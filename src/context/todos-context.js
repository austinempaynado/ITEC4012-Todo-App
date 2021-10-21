import React, {useState} from 'react';

//can only have one export default, which means that when you import it, you can name it whatever you want.
export const TodosContext = React.createContext({

    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {}

});

// update one todo item status
export const TodosContextProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos);
    }

    //deleteTodo
    const deleteTodo = (todoId) => {
        let oldTodos = todos;

        //find index location by the id property
        const todoIndex = todos.findIndex (
            (todo) => {
                //check every Id, but only find the one that was completed
                return(todo.id == todoId)
            }
        );

        if (todoIndex !== -1){
            //only removes one item the todos using its location, splicing it
            oldTodos.splice(todoIndex, 1);

            //... is kind of like copying it from scratch or creating a new array entirely
            // pulls out everything from the array and puts it into a new array, just a way to copy an array to force a refresh
            setTodos([...oldTodos]);

        }
    }

    //updateTodo
    const updateTodo = (todoId, isComplete) => {
        //so we don't work with the state directly, what happens if we do?
        let oldTodos = todos;

        //find index location by the id property
        const todoIndex = todos.findIndex (
            (todo) => {
                //check every Id, but only find the one that was completed
                return(todo.id == todoId)
            }
        );

        if (todoIndex !== -1){
            //update one item by index location in array
            oldTodos[todoIndex].isComplete = isComplete;

            //update the todos
            setTodos(oldTodos);
        }

    }


    return(
        <TodosContext.Provider value = {{todos: todos, addTodo: addTodo, updateTodo: updateTodo, deleteTodo: deleteTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}
