import { combineReducers } from 'redux';

const initialState = {
    posts: [],
    selectedPost: {},
    isLoading: false,
    hasError: false,
    error: "",
    createPostError: "",
    postTypes: [],
    authorList: [],
   

};


const initialUserState = {
    loggedUser: {
        isLoading: false,
        hasError: false,
        error: {},
        user: {}

    }
}

const postReducer = (state = initialState, action) => {
    console.log("Action in reducer", action.payload)
    switch (action.type) {
        case "FETCH_POST_LIST":
            return Object.assign({}, state, {
                isLoading: true,
                hasError: false
            })
        /*   case "FETCH_POSTS_SUCCESS":
              let data = action.payload
              console.log("data", data.data.payload)
              return ({
                  ...state,
                  isLoading: false,
                  hasError: false,
                  posts: [...data.data.payload]
              }
              ) */

        case "FETCH_POSTS_SUCCESS":
            let data = action.payload
            console.log("data", data.data.payload)
            return Object.assign
                ({}, state, {
                    isLoading: false,
                    hasError: false,
                    posts: [...data.data.payload]
                }
                )
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
                isLoading: 0,
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
        case "FETCH_TYPE_LIST":
            return Object.assign({}, state, {
                isLoading: true,
                hasError: false,
                // error:action.payload

            })
        case "FETCH_TYPES_SUCCESS":
            console.log("Fetch type success", action.payload)
            return Object.assign({}, state, {
                isLoading: false,
                postTypes: action.payload,
                // error:action.payload

            })
        case "FETCH_TYPES_FAILED":
            return Object.assign({}, state, {
                isLoading: true,
                hasError: false,
                // error:action.payload

            })
        case "FETCH_AUTHOR_LIST":

            return Object.assign({}, state, {
                isLoading: true,
                hasError: false,
                // error:action.payload

            })
        case "FETCH_AUTHOR_LIST_SUCCESS":

            return Object.assign({}, state, {
                isLoading: false,
                authorList: action.payload,
                // error:action.payload

            })
        case "FETCH_AUTHOR_LIST_FAILED":

            return Object.assign({}, state, {
                isLoading: false,
                hasError: true,
                error: action.payload

                // error:action.payload

            })





        default:
            return state

    }







    return [{ title: "Hp1", id: 1, author: {}, content: "post contenybuuwbwud" },
    { title: "Hp2", id: 2, author: {}, content: "post contenybuuwbwud" },
    { title: "Hp3", id: 3, author: {}, content: "post contenybuuwbwud" },
    { title: "Hp4", id: 4, author: {}, content: "post contenybuuwbwud" },

]

}

const userReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case "USER_LOGIN":
            return Object.assign({}, state, {
                loggedUser: {
                    isLoading: true,
                    hasError: false
                }
            })
        case "USER_LOGIN_SUCCESS":
            return Object.assign({}, state, {
                loggedUser: {
                    isLoading: false,
                    user: {...action.payload.data.result}
                }


            })
        case "USER_LOGIN_FAILED":
            return Object.assign({}, state, {

                loggedUser: {
                    isLoading: false,
                    hasError:true,
                    error: action.payload.data
                }

            })
            default:
                return state


    }

}

export default combineReducers({
    posts: postReducer,
    user: userReducer
    //selectedPost:selectedPostReducer
})