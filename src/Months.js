import React from "react";
import Swiper from "react-id-swiper";
import Month from "./Month";
import MonthlyData from "./MonthlyData";
import "swiper/css/swiper.css";

class Months extends React.Component {
    state = {
        params: {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
            // pagination: {
            //     el: ".swiper-pagination",
            //     type: "bullets",
            //     clickable: true
            // }
        },
        months: []
    };

    componentDidMount() {
        let months = [];
        for (const month of MonthlyData) {
            months.push(
                <div className="month" key={month.Name}>
                    <Month
                        Name={month.Name}
                        AvgHigh={month.AvgHigh}
                        AvgLow={month.AvgLow}
                    />
                </div>
            );
        }
        this.setState({ months });
    }
    render() {
        return <Swiper {...this.state.params}>{this.state.months}</Swiper>;
    }
}

export default Months;
