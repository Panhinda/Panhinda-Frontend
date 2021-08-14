import React, { Component } from 'react';
import './tpu.scss'
import axios from 'axios';
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

        axios.post('https://sinhala-lyrics-gen-backend-py3.herokuapp.com/apiTPUJSON',data ,{
            headers:{
                'Access-Control-Allow-Origin': 'https://sinhala-lyrics-gen-backend-py3.herokuapp.com',
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
            <div className="container">
                    <div className="card-header"><h1>පන්හිඳ - සිංහල පද ගලපමු</h1></div>

                    <div className="card card-statistics custom-card-bottom">

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <form onSubmit={this.submit}>
                                    <label>word:</label>
                                    <input
                                        type="text"
                                        ref={input => this.inputtext = input}
                                        placeholder="word"
                                    />
                                    <label>Content:</label>

                                    <input
                                        type="text"
                                        ref={input => this.content = input}
                                        placeholder="Content"
                                    />
                                    <button type="submit">Prediction</button>
                                </form>
                            </div>
                    </div>

            </div>
        );
    }
}

export default Home;
