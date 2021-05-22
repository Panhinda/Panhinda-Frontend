import './components/shared components/header/header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/shared components/header/header';
import Login from "./components/pages/log in/login";
import Dashboard from "./components/pages/dashboard/dashboard"
import {BrowserRouter, Route} from 'react-router-dom';

function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Route path="/" exact component ={Login}/>
      <Route path="/dashboard" exact component ={Dashboard}/>
      
      </BrowserRouter>
    </div>

  );
}

export default App;
