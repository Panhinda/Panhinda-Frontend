import React, { Component } from 'react';
import './dashboard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../shared components/header/header';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../redux/actions'


class dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.fetchPosts()

    }

    selectView(post_id){

        console.log("View more!,post id:",post_id)
        this.props.history.push(
            `dashboard/viewPost/${post_id}`
          );
    }

    render() {
        console.log("props")
        console.log(this.props)
        return (
            <div className="container1">
                <Header />
                <h5>Welcome to Panhinda!</h5>

                <table className="table table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">post_is</th>
                            <th scope="col">title</th>
                            <th scope="col">content</th>
                            <th scope="col">created_by</th>
                            <th scope="col">more...</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.isLoading ? (<div class="spinner-border text-info" role="status">

                        </div>) : this.props.posts?.posts?.data?.payload.map(post => (
                            <tr>

                                <td>{`${post.post_id}`}</td>
                                <td>{`${post.title}`}</td>
                                <td>{`${post.content || ""}`}</td>
                                <td>{`${post.author || ""}`}</td>
                                <td><button type="button" class="btn btn-success" onClick ={()=>this.selectView(post.post_id)}>View</button>
                                    <button type="button" class="btn btn-info">edit</button>
                                    <button type="button" class="btn btn-danger">delete</button></td>
                            </tr>
                        )



                        )} 
                    </tbody>
                </table>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(dashboard); //connect returns a function and 