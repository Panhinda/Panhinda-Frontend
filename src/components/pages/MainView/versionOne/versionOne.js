import React from "react";
import Version1 from "./../../textgenrnn/textgenrnn";

import Header from "./../Nav/nav";

function LandingPage() {
  return (
    <div className="app-container">
      <Header />
      <div className="banner">
        <Version1 />
      </div>
    </div>
  );
}

export default LandingPage;
