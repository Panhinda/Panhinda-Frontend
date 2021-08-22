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
  componentDidMount() {}

  submit = (event) => {
    event.preventDefault();
    console.log("submit");
    const data = {
      input: this.inputtext.value,
    };

    axios
      .post(
        "https://sinhala-lyrics-gen-backend-py3.herokuapp.com/apiTPUJSON",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin":
              "https://sinhala-lyrics-gen-backend-py3.herokuapp.com",
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
                  <div style={{ width: "690px", paddingLeft: "70px" }}>
                    <h1>පන්හිඳ - සිංහල පද ගලපමු 2</h1>
                  </div>
                  <div style={{ width: "690px" }}>
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
                  <div style={{ width: "690px" }}>
                    <textarea
                      type="text"
                      ref={(input) => (this.content = input)}
                      placeholder="යෝජිත පද..."
                    />
                  </div>

                  <div style={{ width: "690px" }}>
                    <div className="layer3-cover">about the version</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default tpu;
