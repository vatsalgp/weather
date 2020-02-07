import React from "react";

const Month = ({ Name, AvgHigh, AvgLow }) => {
    return (
        <div className="ui card">
            <div className="content" id="name">
                {Name}
            </div>
            <div className="content" id="temp">
                <div id="high">High: {AvgHigh}</div>
                <div id="low">Low: {AvgLow}</div>
            </div>
        </div>
    );
};

export default Month;
