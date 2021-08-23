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
        process.env.REACT_APP_ACTIVE_BACKEND_URL+"/apitextgenrnnjson",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": process.env.REACT_APP_ACTIVE_FRONTEND_URL,
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
                      <h1>පන්හිඳ - සිංහල පද ගලපමු - පළමු පිටපත</h1>
                    </div>
                    <div>
                      <div className="layer3-cover"> 
                      පළමු පිටපත සදහා සහය : 
                      <br/>
                      fushenkao - https://github.com/fushenkao/Sinhala-Lyrics-Gen ,
                      <br/>
                       minimaxir - https://github.com/minimaxir/textgenrnn
                       <br/>
                       පසුතලය : කැටපත් පවුර, සීගිරිය (Sigiri Graffiti) http://thenationaltrust.lk/wp-content/uploads/2018/06/nds-nt-sigiriya.pdf
                       <br/>
                      වෙනස්කම් වල ඉතිහාසය : https://ksankalpa.blogspot.com/2021/02/panhidalyrics-chages-log.html
                      

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
