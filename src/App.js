import "./components/shared components/header/header";
import "./components/shared components/footer/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavBar from './components/shared components/header/header';
import Login from "./components/pages/log in/login";

import Dashboard from "./components/pages/dashboard/dashboard";
import CreatePost from "./components/pages/create post/createPost";
import ViewPost from "./components/pages/viewPost/ViewPost";
import { BrowserRouter, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Ver2 from "./components/pages/MainView/versionTwo/versionTwo";
import Ver1 from "./components/pages/MainView/versionOne/versionOne";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Route path="/" exact component={Ver1} />
        <Route path="/versiontwo" exact component={Ver2} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/createPost" exact component={CreatePost} />
        <Route path="/dashboard/viewPost/:postID" exact component={ViewPost} />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
