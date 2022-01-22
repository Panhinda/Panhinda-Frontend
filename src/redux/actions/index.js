import axios from 'axios';


export const fetchPosts = () => {
    console.log("fetch post action creator")
    //redux thunk should be used to return a function with the 
    return ((dispatch) => {

        dispatch({ type: "FETCH_POST_LIST" });
        axios.get(process.env.REACT_APP_ACTIVE_BACKEND_URL+`/getAllPosts`, {
            headers: {
                'Access-Control-Allow-Origin': process.env.REACT_APP_ACTIVE_BACKEND_URL,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("posts fetched", res)
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res })
        }

        ).catch((err) => {
            dispatch({ type: 'FETCH_POSTS_FAILED', payload: err })
        })
    })

}

export const fetchTypes = () => {
    console.log("fetch post types action creator")
    //redux thunk should be used to return a function with the 
    return ((dispatch) => {

        dispatch({type:"FETCH_TYPE_LIST"});
        axios.get(process.env.REACT_APP_ACTIVE_BACKEND_URL+`/getAllPostTypes`,{
            headers:{
                'Access-Control-Allow-Origin': process.env.REACT_APP_ACTIVE_FRONTEND_URL,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("types fetched", res.data.payload)
            dispatch({ type: 'FETCH_TYPES_SUCCESS', payload: res.data.payload })
        }

        ).catch((err) => {
            dispatch({ type: 'FETCH_TYPES_FAILED', payload: err })
        })
    })

}

export const getAuthorList = () => {
    console.log("get Authors List action creator")
    //redux thunk should be used to return a function with the 
    return ((dispatch) => {

        dispatch({type:"FETCH_AUTHOR_LIST"});
        axios.get(process.env.REACT_APP_ACTIVE_BACKEND_URL+`/allAuthors`,{
            headers:{
                'Access-Control-Allow-Origin': process.env.REACT_APP_ACTIVE_FRONTEND_URL,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("authors fetched", res.data.payload)
            dispatch({ type: 'FETCH_AUTHOR_LIST_SUCCESS', payload: res.data.payload })
        }

        ).catch((err) => {
            dispatch({ type: 'FETCH_AUTHOR_LIST_FAILED', payload: err })
        })
    })

}

export const selectedPost = (postId) => {
    console.log("selected Post action", postId)

    return ((dispatch) => {

        dispatch({type:"SELECTED_POST"})
        axios.get(process.env.REACT_APP_ACTIVE_BACKEND_URL+`/getPost/${postId}`,{
            headers:{
                'Access-Control-Allow-Origin': process.env.REACT_APP_ACTIVE_FRONTEND_URL,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log("selected post fetched", res)
            dispatch({ type: 'SELECTED_POST_SUCCESS', payload: res })
        }).catch((err) => {
            console.log(err)
            dispatch({ type: 'SELECTED_POST_FAILED', payload: err })

        })
    })
    
}


export const predictionResultV2 = (text)=>{
    console.log("predictionResultV2",text)

}

export const newPost = (newpost) => {
    console.log("Create post action creator", newpost)
    //redux thunk should be used to return a function with the 
    return ((dispatch) => {

        dispatch({type:"CREATE_POST"});
        axios.post(process.env.REACT_APP_ACTIVE_BACKEND_URL+`/createPost`,newpost,{
            headers:{
                'Access-Control-Allow-Origin': process.env.REACT_APP_ACTIVE_FRONTEND_URL,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("posts fetched", res)
            dispatch({ type: 'CREATE_POST_SUCCESS', payload: res })
        }

        ).catch((err) => {
            dispatch({ type: 'CREATE_POST_FAILED', payload: err })
        })
    })

}

export const loginAction = (loginUser) => {
    console.log("Login user  action creator", loginUser)
    //redux thunk should be used to return a function with the 
    return ((dispatch) => {

        dispatch({ type: "USER_LOGIN" });
        axios.post(`http://localhost:3000/login`, loginUser, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("logged user fetched", res)
            if (res.data.statusCode === 200)
                dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res })

            else {

                dispatch({ type: 'USER_LOGIN_FAILED', payload: res })
                //errors like user not found or password didnt match
            }
        }

        ).catch((err) => {
            dispatch({ type: 'USER_LOGIN_FAILED', payload: err })
            //errors in the request.
        })
    })

}

