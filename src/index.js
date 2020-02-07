import React from "react";
import ReactDOM from "react-dom";
import Months from "./Months";
import "./index.css";

const App = () => {
    return (
        <div className="ui container" align="center">
            <div id="heading">
                <h1 align="center"> Monthly Weather</h1>
            </div>
            <div id="content">
                <Months />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
