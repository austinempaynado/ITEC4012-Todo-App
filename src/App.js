import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index'
import { AllToDosPage} from './components/pages/all-todos/index'
import { NewToDoPage} from './components/pages/new-todo/index'

function App() {
  return (
    <div className="App">
      {/* Declare router and display */}
      <Router>
        {/* want to display the nav consistently throughout the website/app */}
        <Navbar/>
        {/* Use a switch to switch between different routes */}
        <Switch>
          {/* Routes are basically pages */}
          {/* slash doesn't go to a specific page, it's sort of like the landing/home page */}
          <Route exact path ="/">
            {/* Replace the div with the actual component */}
            <AllToDosPage></AllToDosPage>
          </Route>
          {/* When going to this page we're going to make a new item */}
          <Route exact path ="/new">
            {/* Replace the div with the actual component */}
            <NewToDoPage></NewToDoPage>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
