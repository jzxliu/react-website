import React from 'react';
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "#fff",
        "0.5": "#fff",
        "1.0": "#fff"
    },
    shadowBlur: 10,
    barThickness: 2
})
const Loading = () => {
    return (
        <TopBarProgress/>
    );
};

export default Loading;