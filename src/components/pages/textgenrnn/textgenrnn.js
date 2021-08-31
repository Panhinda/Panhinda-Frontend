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
        process.env.REACT_APP_ACTIVE_BACKEND_URL + "/apitextgenrnnjson",
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
        <div className="BANNER1">
          <div className="banner-shade">
            <div className="container">
              <div className="row">
                <div className="col col-sm-12 main-head txtcolor">
                  <h2>සිංහල පද ගලපමු-පලමු පිටපත</h2>
                </div>
              </div>{" "}
              <div className="row row-details">
                <div className="col-xl-5 col-lg-4 layer3-cover txtcolor">
                  <h3>පළමු පිටපත සදහා සහය : </h3>
                 <div>fushenkao : <a href="https://github.com/fushenkao/Sinhala-Lyrics-Gen" target="_blank" rel="noreferrer">Sinhala-Lyrics-Gen</a>
                  </div> 
                  <div> minimaxir :<a href="https://github.com/minimaxir/textgenrnn" target="_blank" rel="noreferrer">textgenrnn</a> </div> 
   {/*                <div>පසුතලය : කැටපත් පවුර, සීගිරිය (Sigiri Mirror Wall)</div> 
                  <div><a href="http://thenationaltrust.lk/wp-content/uploads/2018/06/nds-nt-sigiriya.pdf" target="_blank" rel="noreferrer">thenationaltrust.lk</a> 
                  </div> */}
                  <div>පසුතලය : බ්‍රාහ්මී නොවන සංකේත</div> 
                  <div><a href="https://sanskaravinivida.wordpress.com/2020/06/03/%E0%B6%BD%E0%B6%9A%E0%B7%8A%E0%B6%AF%E0%B7%92%E0%B7%80-%E0%B6%BD%E0%B7%9A%E0%B6%9B%E0%B6%B1-%E0%B7%80%E0%B7%92%E0%B6%B4%E0%B7%8A%E0%B6%BD%E0%B7%80%E0%B6%BA/" target="_blank" rel="noreferrer">ලක්දිව ලේඛන විප්ලවය</a> 
                  </div> 
                  <div>
                  වෙනස්කම් වල ඉතිහාසය :</div> 
                  <div>
                  <a href="https://sankalpayak.medium.com/%E0%B7%83%E0%B7%92%E0%B6%82%E0%B7%84%E0%B6%BD-%E0%B6%B4%E0%B6%AF-%E0%B6%9C%E0%B6%BD%E0%B6%B4%E0%B6%B8%E0%B7%94-change-log-528f41be0193" target="_blank" rel="noreferrer">Kanchana Sankalpa</a> 
                  </div>
                </div>

                <div className="col-xl-7 col-lg-8   second-side txtcolor">
                  <div className="row">
                    <div className="col-12 col-sm-8">
                      <input
                        className="txtcolor"
                        className="user_input"
                        type="text"
                        ref={(input) => (this.inputtext = input)}
                        placeholder="කැමති ආරම්භක වචන(ය)"
                      />
                    </div>
                    <div className="col-12 col-sm-4 txtcolor ">
                      <button
                        className=" button-one"
                        onClick={this.submit}
                        type="submit"
                      >
                        <span className="txtcolor">පද ගැළපීම </span>
                      </button>
                    </div>
                  </div>

                  <div className="col-12 t-area txtcolor">
                    <textarea
                      className="txtcolor"
                      type="text"
                      ref={(input) => (this.content = input)}
                      placeholder="යෝජිත පද..."
                    />
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

export default textgenrnn;
