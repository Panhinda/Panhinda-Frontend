import { combineReducers } from 'redux';

const initialState = {
    posts: [],
    selectedPost: {},
    isLoading: false,
    hasError: false,
    error: "",
    createPostError:""

};

const postReducer = (state = initialState, action) => {
    console.log("Action in reducer", action.payload)
    switch (action.type) {
        case "FETCH_POST_LIST":
            return Object.assign({}, state, {
                isLoading: true,
                hasError: false
            })
        case "FETCH_POSTS_SUCCESS":
            return Object.assign({}, state, {
                isLoading: false,
                hasError: false,
                posts: action.payload
            })
        case "FETCH_POSTS_FAILED":
            return Object.assign({}, state, {
                isLoading: false,
                hasError: true,
                error: action.payload

            })
        case "SELECTED_POST":
            return Object.assign({}, state, {
                isLoading: true,
                hasError: false
            })
        case "SELECTED_POST_SUCCESS":
            return Object.assign({}, state, {
                isLoading: false,
                hasError: false,
                selectedPost: action.payload
            })
        case "SELECTED_POST_FAILED":
            return Object.assign({}, state, {
                isLoading: false,
                hasError: true,
                error: action.payload

            })
        case "CREATE_POST":
            return Object.assign({}, state, {
                isLoading: true,
                hasError: false,
                // error:action.payload

            })
        // CREATE_POST_SUCCESS

        case "CREATE_POST_SUCCESS":
            return Object.assign({}, state, {
                isLoading: false,
                hasError: false,
                selectedPost: action.payload
            })
            //CREATE_POST_FAILED
            case "CREATE_POST_FAILED":
                return Object.assign({}, state, {
                    isLoading: false,
                    hasError: true,
                    createPostError: action.payload
    
                })    



        default:
            return state

    }

/*
    return [{title:"Hp1", id :1, author:{}, content:"post contenybuuwbwud"},
    {title:"Hp2", id :2, author:{}, content:"post contenybuuwbwud"},
    {title:"Hp3", id :3, author:{}, content:"post contenybuuwbwud"},
    {title:"Hp4", id :4, author:{}, content:"post contenybuuwbwud"},


]*/

}


export default combineReducers({
    posts: postReducer,
    //selectedPost:selectedPostReducer
})