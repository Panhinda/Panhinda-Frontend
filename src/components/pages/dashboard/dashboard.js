import React, { Component } from 'react';
import './dashboard.scss';
import Header from '../../shared components/header/header';

class dashboard extends Component {
    render() {
        return (
            <div className ="container1">
                <Header/>
                <h5>Welcome to Panhinda!</h5>
            </div>
        );
    }
}

export default dashboard;