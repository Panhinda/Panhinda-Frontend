import React, { Component } from 'react';
import './tpu.scss'
import axios from 'axios';
import Footer from "./../../shared components/footer/footer"
//import { connect } from 'react-redux';
//import { predictionResultV2 } from '../../../redux/actions'



class Home extends Component {


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

        axios.post('https://sinhala-lyrics-gen-front.herokuapp.com/apiTPUJSON',data ,{
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3000',
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
                
                    <div className="banner-layerOne"><h1>පන්හිඳ - සිංහල පද ගලපමු</h1></div>

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
                                        placeholder="Enter The Word You want to predict"
                                    />
                                     </label>
                                  
                                    <div>
                                    <button className="button" onClick={this.submit} type="submit"><span>Prediction </span></button>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="textarea-output">
                                                <label>
                                                    {/* Content: */}
                                                
                                                <textarea
                                                    type="text"
                                                    ref={input => this.content = input}
                                                    placeholder="Predicted Will be display here...."
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

export default Home;
