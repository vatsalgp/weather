import React from "react";

const Month = ({ Name, AvgHigh, AvgLow }) => {
    return (
        <div className="ui card">
            <div className="content">{Name}</div>
            <div className="content">
                High: {AvgHigh}
                <br />
                Low: {AvgLow}
            </div>
        </div>
    );
};

export default Month;
