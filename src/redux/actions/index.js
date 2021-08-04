import axios from 'axios';


export const fetchPosts =() =>{
    console.log("fetch post action creator")
//redux thunk should be used to return a function with the 
    return((dispatch) =>{

        dispatch({type:"FETCH_POST_LIST"});
        axios.get(`http://localhost:3000/getAllPosts`,{
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log("posts fetched",res)
            dispatch({type:'FETCH_POSTS_SUCCESS',payload: res})
        }

        ).catch((err)=>{
            dispatch({type:'FETCH_POSTS_FAILED',payload:err})
        })
    })  
      
}

export const selectedPost = (postId)=>{
    console.log("selected Post action",postId)

    return((dispatch)=>{

        dispatch({type:"SELECTED_POST"})
        axios.get(`http://localhost:3000/getPost/${postId}`,{
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            console.log("selected post fetched",res)
            dispatch({type:'SELECTED_POST_SUCCESS',payload: res})
        }).catch((err)=>{
            dispatch({type:'SELECTED_POST_FAILED',payload:err})

        })
    })

    
}

