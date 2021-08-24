import React, { Component } from "react";
import "./tpu.scss";
import axios from "axios";
import Footer from "./../../shared components/footer/footer";
//import { connect } from 'react-redux';
//import { predictionResultV2 } from '../../../redux/actions'

class tpu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //console.log(process.env.REACT_APP_ACTIVE_BACKEND_URL);
    // console.log(process.env.REACT_APP_ACTIVE_BACKEND_TPU_URL);
  }

  submit = (event) => {
    event.preventDefault();
    console.log("submit", this.inputtext.value);
    const data = {
      input: this.inputtext.value,
    };

    axios
      .post(
        process.env.REACT_APP_ACTIVE_BACKEND_TPU_URL + "/apiTPUJSON",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin":
              process.env.REACT_APP_ACTIVE_FRONTEND_URL,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.content.value = res.data.output;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Screens">
        <div className="BANNER">
          <div className="banner-shade">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 main-div">
                  <div style={{ width: "33%" }}>
                    <div style={{ width: "1190px", paddingLeft: "70px" }}>
                      <h1>පන්හිඳ - සිංහල පද ගලපමු-දෙවන පිටපත</h1>
                    </div>
                    <div>
                      <div
                        style={{ wordBreak: "break-all" }}
                        className="layer3-cover"
                      >
                        about the version
                      </div>
                    </div>
                  </div>
                  <div className="second-side" style={{ width: "63%" }}>
                    <div>
                      <input
                        className="user_input"
                        type="text"
                        ref={(input) => (this.inputtext = input)}
                        placeholder="කැමති ආරම්භක වචන(ය)"
                      />
                      <button
                        className="button"
                        onClick={this.submit}
                        type="submit"
                      >
                        <span>පද ගැළපීම </span>
                      </button>
                    </div>

                    <div>
                      <textarea
                        type="text"
                        ref={(input) => (this.content = input)}
                        placeholder="යෝජිත පද..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default tpu;
