import React, { Component } from 'react';
import './createPost.scss'
class createPost extends Component {
    render() {
        return (
            <div className="container">
                Create Posts
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 grid-margin stretch-card">
                <div className="card-header "><h1>Create Posts</h1></div>
                    <div className="card card-statistics custom-card-bottom">
                        
                        </div>
                        <label
                            htmlFor="riskLevel"
                            style={{
                              color: "grey",
                              fontSize: 12,
                              fontWeight: "500",
                            }}
                          >
                            Title:
                            </label>
                        </div>
            </div>
        );
    }
}

export default createPost;
