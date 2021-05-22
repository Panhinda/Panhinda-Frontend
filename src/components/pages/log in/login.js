import React, { Component } from 'react';
import './login.css';

class login extends Component {

    

    render() {
        return (

            <div className="app">
                <h2>Welcome to panhinda!</h2>

                <div className="login-container">
                    <div className="login-group">
                    <div class="form-group">
                        <input type="text" className="form-control item" placeholder="email" />
                    </div>
                    <div class="form-group">
                        <input type="password" className="form-control item" placeholder="pasword" />
                    </div>
                    <input type="button" className="form-control item" value="submit" />
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default login;