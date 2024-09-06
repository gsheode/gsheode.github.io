import React, { useState } from "react";
import arrowImage from '../images/icon-arrow.svg'
import { useGeoLocationData } from "./hooks.tsx";
const LandingPage = () => {
    const [triggerSearch, setTriggerSearch] = useState(false);
    const { data } = useGeoLocationData()
    console.log(data)
    const handleSearch = () => {
        setTriggerSearch(true);
    }
    return (
        <>
            <input type='search' ></input>
            <button onClick={handleSearch}><img src={arrowImage} alt="Arrow image" /></button>
        </>
    );
}

export default LandingPage;