import React, { Component } from 'react';
import './dashboard.css';
import Header from '../../shared components/header/header';
import Createpost from "../create post/createPost";
import axios from 'axios';
import { post } from 'jquery';


class dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
   
  componentDidMount()
  {
   /*  axios. get('https://jsonplaceholder.typicode.com/posts')  */
    axios.get('http://localhost:3000/getAllPosts') 
    
    .then(response=>{
      console.log(response)
      this.setState({posts:response.data.payload})
    })
    .catch(error=>{
      console.log(error)
    })
  }
    render() {
      const{posts}=this.state// destructuring
        return (
            <div className ="container1">
                <Header/>
                <Createpost/>
                    
                <div>
                <hr/>
                </div>
                <div>
                  list of posts
                  {
                    /* posts.length? */
                    posts.map(post=>
                      <div key={post.id}>
                         <table>
  <tr>
    <th>Post ID</th>
    <th>Content</th>
    <th>Type</th>

  </tr>
  <tr>
    <td>{post.id}</td>
    <td>{post.type}</td>
    <td> {post.content}</td>
  
  </tr>
  </table>
                        
                        
                        </div>)/* :null */
                  }
     {/*            <table>
  <tr>
    <th>Post ID</th>
    <th>Title</th>
    <th>Content</th>
    <th>Type</th>

  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
          */}       </div>

            </div>
            
        );
    }
}

export default dashboard;