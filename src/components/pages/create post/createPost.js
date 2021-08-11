import React, { Component } from 'react';
import './createPost.scss'
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { newPost } from '../../../redux/actions';
import { toast } from "react-toastify";



const validationSchema = Yup.object().shape({

    title: Yup.string().required(),
    postType: Yup.string().required(),
    author: Yup.string().required(),
    content: Yup.string().required()

});

const initialValues = {

    title: "",
    postType: "",
    author: "",
    content: ""
};

class createPost extends Component {


    componentDidUpdate(prevProps) {

        if (prevProps.posts.isLoading && !this.props.posts.isLoading) {
            if (!this.props.hasError) {
                toast.success("Post Created Successfully!")

            }
            else {
                toast.error("Error!")

            }
        }
    }

    onSave = (values, errors) => {

        const post = {
            user_id: "1",
            title: values.title,
            type: values.postType,
            author: values.author,
            content: values.content
        }
        console.log("errors", errors)
        this.props.newPost(post)


    }
    render() {
        return (
            <div className="container">

                <div className="card-header"><h1>Create Posts</h1></div>

                <div className="card card-statistics custom-card-bottom">

                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Formik

                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, errors) => { this.onSave(values, errors) }}
                        >
                            {({ values, errors, handleChange, handleSubmit, setFieldValue, resetForm }) => {
                                return (
                                    <>
                                        <div className="form-group">
                                            <label>Title:</label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control"
                                                /* ref={input => this.title = input} */
                                                /* onChange={handleChange} */
                                                value={values.title}
                                                onChange={handleChange}
                                                placeholder="Title"
                                            />
                                            <p className="text-danger">{errors.title} </p>
                                        </div>
                                        <div className="form-group">
                                            <label>Type:</label>

                                            <input
                                                type="text"
                                                name="postType"
                                                className="form-control"
                                                value={values.postType}
                                                onChange={handleChange}
                                                placeholder="Type"
                                            />
                                            <p className="text-danger">{errors.postType} </p>
                                        </div>
                                        <div className="form-group">
                                            <label>Author:</label>

                                            <input
                                                type="text"
                                                name="author"
                                                className="form-control"
                                                //ref={input => this.author = input}
                                                value={values.author}
                                                onChange={handleChange}
                                                placeholder="Author"
                                            />
                                            <p className="text-danger">{errors.author} </p>
                                        </div>


                                        <div className="form-group">
                                            <label>Content:</label>

                                            <textarea
                                                type="text"
                                                name="content"
                                                className="form-control"
                                                value={values.content}
                                                onChange={handleChange}
                                                //ref={input => this.content = input} 
                                                rows="13"
                                                placeholder="Content"
                                            >
                                            </textarea>
                                            <p className="text-danger">{errors.content} </p>
                                        </div>
                                        <div className="col-1">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="button" class="btn btn-dark" onClick={handleSubmit}>{this.props.posts.isLoading ? <div class="spinner-border text-info" role="status">

                                                    </div> : "Create"}</button>
                                                </div>
                                                <div className="col-6">
                                                    <button type="button" class="btn btn-secondary"
                                                        onClick={() => {

                                                            resetForm();
                                                        }}

                                                    >Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>


                                );



                            }}



                        </Formik>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => {

    console.log("Redux store", state)
    return {

        posts: state.posts

    };

}

export default connect(mapStateToProps, { newPost })(createPost);
