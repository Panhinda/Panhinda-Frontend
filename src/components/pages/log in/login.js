import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import { connect } from 'react-redux';
import { loginAction } from '../../../redux/actions';



class Login extends Component {


    constructor(props) {

        super(props);
        this.state = {

            username: "",
            password: ""
        }

    }

    login = () => {
        let { username, password } = this.state
        console.log("username", username);

        console.log("passWord", password);


        this.props.loginAction({ username, password })
        console.log("logges user reducer", this.props.loggedUser);
    }

    componentDidUpdate(prevProps) {

        console.log("User in LOGIN page", this.props.user)

         if (prevProps.user.loggedUser.isLoading && !this.props.user.loggedUser.isLoading) {
            if (!this.props.user.loggedUser.hasError) {
                toast.success("Log in Successfully!")
                this.props.history.push(
                    `/dashboard`
                );

            }
            else { 
                toast.error("Error!")

            }
        }
    }

    render() {
        return (

            <div className="app">
                <h2>Welcome to panhinda!</h2>

                <div className="login-container">
                    <div className="login-group">
                        <div className="form-group">
                            <input type="text" className="form-control item" placeholder="email" onChange={(e) => { this.setState({ username: e.target.value }) }} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control item" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </div>
                        {/*  <Link to="/dashboard"> */}
                        <input type="button" className="form-control item" value="submit" onClick={() => this.login()} />
                        {/*  </Link> */}

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log("Redux store  in Log in", state)

    return{
        user:state.user
    }
}

export default connect(mapStateToProps,{loginAction})(Login);




{/* const mapStateToProps = (state) => {

    

console.log("Redux store  in Log in", state)

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  i
return {

    posts: "oooo",
    user:state.loggedUser

};

}

export default connect(mapStateToProps, {loginAction})(Login); */}