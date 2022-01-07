import React, { Component } from 'react';
import './ViewPost.scss';
import Header from '../../shared components/header/header';
import { connect } from 'react-redux';
import Media from "react-bootstrap/Media";
import thumbnail from '../../../assets/NoImageAvailable.jpg';
import { selectedPost } from '../../../redux/actions'

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
         selectedPost:""
        };
      }

      componentDidMount(){
       console.log("COMPONENT DID MOUNT",this.props.match?.params.postID)
        this.props.selectedPost(this.props.match?.params.postID)
      }
    
    render() {
      console.log("TEST",this.props.match?.params.postID)
        console.log("View post class", this.props.postSelected.selectedPost.data.data?.title)
        return (
            <div className="view-post-container">
              <div className="row">
                    <div className="col-4"><button onClick={()=>{this.props.history.goBack()}}>Back</button></div>
                </div>
                <Header/>
                <div className="card-container">
              <div className="card card-statistics custom-card-bottom grid-margin">
              <div className="card-header ">
                <div className="row">
                    <div className="card_head-container">
                    <div className="col-4">
                    <Media>
                      <img
                        width="250px"
                        height="150px"
                        className="mr-3"
                        src={thumbnail}
                        alt="Generic placeholder"
                      />
                      </Media>

                    </div>
                     <div className="col-8">
                    <h1>{this.props.postSelected.selectedPost.data?.data?.title}</h1>
                    <h6>{`Type : ${this.props.postSelected.selectedPost.data?.data?.type}`}</h6>
                    <h6>Author:</h6>

                    </div> 
                    
                    </div>

                </div>

                
              </div>
              <div className="card-body"></div>
                <div className="row d-flex">
                    <div className="content-container">
                    <h4>Content:</h4>
                    <p>{this.props.postSelected.selectedPost.data?.data?.content}</p> 
                    </div>
                </div>
                <div className="row">
                <div className="content-container">  
                <h4>Custom Attributes:</h4>
                </div>
                </div>

              </div>
              
              </div>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
console.log("redux state in ViewPost",state)
return{
    postSelected:state.posts
}
}
export default  connect(mapStateToProps,{selectedPost})(ViewPost);