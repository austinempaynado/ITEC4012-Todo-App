import {useForm} from 'react-hook-form';
import { Input } from '../input-field';
import { v1 as uuidv1} from 'uuid';
import {useContext} from 'react'
import {TodosContext} from '../../context/todos-context'
import "./styles.css"
//use it to going to places in our app programatically
import {useHistory} from 'react-router-dom'

export const NewTodoForm = () =>{

    //register allows us to register our input fields
    //handleSubmit called at the very end when all form values are valid
    //formState: if there's invalid inputs it will throw an error
    const todoContext = useContext(TodosContext);
    //routing is tracked by a history object, react will keep track of this
    let history = useHistory();

    const {register, handleSubmit, formState: {errors}}=useForm(); 

    const onSubmit = (data) =>{
        const todo = data

        //add unique id to the todo
        todo.id = uuidv1();

        // default status of false
        todo.isComplete = false; 

        // add the todo to the global state/context
        todoContext.addTodo(todo);
        console.log("Added new todo", todo);

        //navigate to the home page
        history.push("/");
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type = "text"
                name = "title"
                label = "Todo (e.g. Do Laundry)"
                errors = {errors}
                register = {register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength:{
                            value: 3,
                            message: "Please enter at least 3 characters"
                        }
                    }
                }
                required
            />

            <Input  
                type = "date"
                name = "date"
                label = "Due Date"
                errors = {errors}
                register = {register}
                validationSchema={
                        {
                        required: "Date is required",
                        }
                    }
                required
            />

            <input type="submit" />
        </form>
    )
}