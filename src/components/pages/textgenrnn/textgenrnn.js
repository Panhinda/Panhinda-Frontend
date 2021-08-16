import React, { Component } from 'react';
import './textgenrnn.scss'
import axios from 'axios';
import Footer from "../../shared components/footer/footer"
//import { connect } from 'react-redux';
//import { predictionResultV2 } from '../../../redux/actions'



class textgenrnn extends Component {


    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
      
    }

   submit = (event) => {
        event.preventDefault();
        console.log('submit');
        const data = {
            'input': this.inputtext.value
        }

        axios.post(process.env.ACTIVE_BACKEND_URL+'/apitextgenrnnjson',data ,{
            headers:{
                'Access-Control-Allow-Origin': process.env.ACTIVE_FRONTEND_URL,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res);
            this.content.value= res.data.output;
        }).catch((err) => {
            console.log(err);
        });
    }  

    render() {
        return (
            <div className="Screens">
                <div className="BANNER">
                    <div className="banner-shade">
                
                    <div className="banner-layerOne"><h1>පන්හිඳ - සිංහල පද ගලපමු 1</h1></div>

                    <div className="banner-layerTwo">

                            <div className="form-area">
                                <div>
                                    <div>
                                    <div className="input_btn">
                                    <label>
                                        {/* <span className="input-label">word:</span> */}
                                    <input
                                        className="user_input"
                                        type="text"
                                        ref={input => this.inputtext = input}
                                        placeholder="කැමති ආරම්භක වචන(ය)"
                                    />
                                     </label>
                                  
                                    <div>
                                    <button className="button" onClick={this.submit} type="submit"><span>පද ගැළපීම  </span></button>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="textarea-output">
                                                <label>
                                                    {/* Content: */}
                                                
                                                <textarea
                                                    type="text"
                                                    ref={input => this.content = input}
                                                    placeholder="යෝජිත පද..."
                                                />
                                                </label>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    </div>
                    </div>
                    <Footer/>   
            </div>
    

        );
    }
}

export default textgenrnn;