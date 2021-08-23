import React from "react";
//import Version1 from "./../../textgenrnn/textgenrnn";
import Version2 from "./../../tpu/tpu";

import Header from "./../Nav/nav";

function LandingPage() {
  return (
    <div className="app-container">
      <Header />
      <div className="banner">
        <Version2 />
      </div>
    </div>
  );
}

export default LandingPage;
