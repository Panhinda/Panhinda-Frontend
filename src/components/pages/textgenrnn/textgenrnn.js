import React, { Component } from "react";
import "./textgenrnn.scss";
import axios from "axios";
import Footer from "../../shared components/footer/footer";

class textgenrnn extends Component {
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
    //process.env.ACTIVE_BACKEND_URL+
    axios
      .post(
        "https://sinhala-lyrics-gen-backend.herokuapp.com/apitextgenrnnjson",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": process.env.ACTIVE_FRONTEND_URL,
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
        <div className="BANNER1">
          <div className="banner-shade">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 main-div">
                  <div style={{ width: "33%" }}>
                    <div style={{ width: "690px", paddingLeft: "70px" }}>
                      <h1>පන්හිඳ - සිංහල පද ගලපමු 1</h1>
                    </div>
                    <div>
                      <div className="layer3-cover">about the version</div>
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
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default textgenrnn;
