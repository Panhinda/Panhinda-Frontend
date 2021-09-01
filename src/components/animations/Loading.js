import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Loading.css";
function App() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Loading.json"),
    });
  }, []);

  return (
    <div className="loader">
      <div className="Container-loader" ref={container}></div>
    </div>
  );
}

export default App;
