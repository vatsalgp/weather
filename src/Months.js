import React from "react";
import Swiper from "react-id-swiper";
import Month from "./Month";
import MonthlyData from "./MonthlyData";
import "swiper/css/swiper.css";

const params = {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
};

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

const Months = () => <Swiper {...params}>{months}</Swiper>;

export default Months;
