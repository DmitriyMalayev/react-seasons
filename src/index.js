import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (successCallback) =>
        this.setState({ latitude: successCallback.coords.latitude }),
      (errorCallBack) => this.setState({ errorMessage: errorCallBack.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay latitude={this.state.latitude} />;
      //Taking state and passing it as a prop to a child
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
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
