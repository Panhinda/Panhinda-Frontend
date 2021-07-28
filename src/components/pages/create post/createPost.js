import React, { Component } from 'react';
import './createPost.scss'
import axios from 'axios';

class createPost extends Component {

    // state = {
    //     user_id: 1,
    //     title: '',
    //     content: '',
    //     type: '',
    //     author: ''
    // }

    submit = (event) => {
        event.preventDefault();
        const obj = {
            title: this.title.value,
            content: this.content.value,
            type: this.type.value,
            author: this.author.value,
            user: this.id.value
        }

        axios.post('http://localhost:3000/createPost',obj).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">

                    <div className="card-header"><h1>Create Posts</h1></div>

                    <div className="card card-statistics custom-card-bottom">

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <form onSubmit={this.submit}>
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        ref={input => this.title = input}
                                        placeholder="Title"
                                    />
                                    <label>Content:</label>

                                    <input
                                        type="text"
                                        ref={input => this.content = input}
                                        placeholder="Content"
                                    />
                                    <label>Type:</label>

                                    <input
                                        type="text"
                                        ref={input => this.type = input}
                                        placeholder="Type"
                                    />
                                    <label>Author:</label>

                                    <input
                                        type="text"
                                        ref={input => this.author = input}
                                        placeholder="Author"
                                    />
                                    {/* should remove this */}
                                    <label>User Id:</label>

                                    <input
                                        type="text"
                                        ref={input => this.id = input}
                                        placeholder="Id"
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                    </div>

            </div>
        );
    }
}

export default createPost;
