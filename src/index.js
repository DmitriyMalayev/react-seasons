import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (successCallback) => console.log(successCallback),
      (errorCallBack) => console.log(errorCallBack)
    );

    return <div>Latitude</div>;
  }
}

root.render(<App />);

