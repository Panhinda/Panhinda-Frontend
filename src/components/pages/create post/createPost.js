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
                        <div className="col-11">

                        <label
                            htmlFor="Title"
                            
                          >
                            Title:
                            </label>
                            <div className="row">
                            <input
                              type="text"
                              name="Title"
                              className="form-control"
                              id="formGroupExampleInput"
                              //onChange={handleChange}
                              //disabled={true}
                              //value={}
                              placeholder="Post Title"
                            />

                            </div>
                        </div>
                   

                        </div>
                       

                        </div>
            </div>
        );
    }
}

export default createPost;
