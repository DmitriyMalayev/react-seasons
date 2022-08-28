import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null  };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (successCallback) => console.log(successCallback),
      (errorCallBack) => console.log(errorCallBack)
    );

    return <div>Latitude</div>;
  }
}

root.render(<App />);

/*
React.Component 
  Also a class
  It allows us to borrow additional methods for our App
State
  Only useable with Class components 
  Can be used with Functional Components through the use of hooks
  State is a JS object that contains data relevant to a singular component
  Updating state on a component causes the component to rerender 
  State must be initialized when a component is created 
setState
  The only way to update state is by using the function setState
constructor
  The first function that is called everytime an instance of the class is created. 
super
  reference to the parent's contruction function 
*/
