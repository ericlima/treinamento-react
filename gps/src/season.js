import React from 'react';

const GetSeason = (lat,month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? "summer":"winter"
    } else {
        return lat > 0 ? "winter":"summer"
    }

}

const SeasonDisplay = props => {

    const season = GetSeason(props.lat, new Date().getMonth());

    const text = season === "summer" ? "go to the beach":"it's cold!"

    const icon = season === "summer" ? "sun":"snowflake"

    return 
        <div>
            <i className={}/>
        { text }
        </div>

}

export default SeasonDisplay;