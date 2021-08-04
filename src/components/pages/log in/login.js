import React, { Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom';


class login extends Component {

    

    render() {
        return (

            <div className="app">
                <h2>Welcome to panhinda!</h2>

                <div className="login-container">
                    <div className="login-group">
                    <div className="form-group">
                        <input type="text" className="form-control item" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" placeholder="password" />
                    </div>
                    <Link to="/dashboard">
                    <input type="button" className="form-control item" value="submit"/ >
                    </Link>
                   
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default login;