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
            <div className="banner-layerOne">
              <h1>පන්හිඳ - සිංහල පද ගලපමු 2</h1>
            </div>

            <div className="banner-layerTwo">
              <div className="form-area">
                <div>
                  <div>
                    <div className="input_btn">
                      <div class="col-12 col-sm-6 col-md-8">
                        <label>
                          {/* <span className="input-label">word:</span> */}
                          <input
                            className="user_input"
                            type="text"
                            ref={(input) => (this.inputtext = input)}
                            placeholder="කැමති ආරම්භක වචන(ය)"
                          />
                        </label>

                        <button
                          className="button"
                          onClick={this.submit}
                          type="submit"
                        >
                          <span>පද ගැළපීම </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-8">
                    <div className="textarea-output">
                      <label>
                        {/* Content: */}

                        <textarea
                          type="text"
                          ref={(input) => (this.content = input)}
                          placeholder="යෝජිත පද..."
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layer3-cover">
              <div className="col-12 col-sm-6 col-md-6 layer-3">
                about the version
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
