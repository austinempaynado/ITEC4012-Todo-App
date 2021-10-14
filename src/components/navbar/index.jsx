// JSX Returns the template or HTML element
// Want to use the router so page doesn't refresh
// Lastly export the component, so we can import it in the app and place it on a specific 'page'

import {
    NavLink
} from 'react-router-dom';

import "./styles.css";


export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {/* create links pages that link to the home page */}
                <li>
                    {/* to means when clicked go to ... */}
                    {/* We want it to match slash without anything after it, we don't want the content to display on other routes that have a slash as well*/}
                    <NavLink exact={true} activeClassName="nav-selected" to="/"> My To-do Tasks</NavLink>

                </li>
                <li>
                    {/* When we click on the link, we want the style will be active using activeClassName*/}
                    <NavLink activeClassName="nav-selected" to="/new">
                    Add New To-do
                    </NavLink>
                </li>
            </ul>
        </nav> //className is the same as class
    );
}