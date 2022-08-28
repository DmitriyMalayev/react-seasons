import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (successCallback) => console.log(successCallback),
    (errorCallBack) => console.log(errorCallBack)
  );

  return <div></div>;
};

root.render(<App />);
