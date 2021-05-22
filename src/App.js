import './components/shared components/header/header'
import "./components/shared components/footer/footer"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/shared components/header/header';
import Login from "./components/pages/log in/login";
import Dashboard from "./components/pages/dashboard/dashboard"
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/shared components/footer/footer';

function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <NavBar/>
      
      <Route path="/" exact component ={Login}/>
      <Route path="/dashboard" exact component ={Dashboard}/>
      
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
