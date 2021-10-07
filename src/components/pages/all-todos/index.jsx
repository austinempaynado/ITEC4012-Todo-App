import "./styles.css";
import { Todo } from "../../todo/index";

export const AllToDosPage = () =>{
    return(
        <div>
            <Todo text="Walk my dog" date="10/10/2021" color="blue">
            </Todo>

            <Todo text="Buy laundry detergent" date="10/10/2021" color="blue">
            </Todo>

            <Todo text="Go to the gym" date="10/10/2021" color="red">
            </Todo>
        </div>
    )
}