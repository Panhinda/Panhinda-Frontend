import './components/shared components/header/header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/shared components/header/header';

function App() {

  return (
    
    <div className="app">
        <h2>Welcome to panhinda!</h2>

      <div className="login-container">
      <div class="form-group">
      <input type="text" className="form-control item" placeholder="email"/>
      </div>
      <div class="form-group">
      <input type="text" className="form-control item" placeholder="email"/>
      </div>
      <input type="button" className="form-control item" value="submit"/>
    </div>
  
    </div>

  );
}

export default App;
