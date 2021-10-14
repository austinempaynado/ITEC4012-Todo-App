import {useForm} from 'react-hook-form';
import { Input } from '../input-field';
import "./styles.css"

export const NewTodoForm = () =>{

    //register allows us to register our input fields
    //handleSubmit called at the very end when all form values are valid
    //formState: if there's invalid inputs it will throw an error
    const {register, handleSubmit, formState: {errors }}=useForm(); 
    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit()}>
            {/* add input fields */}
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
                name = "dateofTodo"
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