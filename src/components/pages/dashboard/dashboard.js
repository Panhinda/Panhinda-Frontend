import React, { Component } from 'react';
import './dashboard.css';
import Header from '../../shared components/header/header';
import Createpost from "../create post/createPost";

class dashboard extends Component {
    render() {
        return (
            <div className ="container1">
                <Header/>
                <Createpost/>
                    
                <div>
                <hr/>
                </div>
                <div>
                <table>
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
                </div>

            </div>
            
        );
    }
}

export default dashboard;