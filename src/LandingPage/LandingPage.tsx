import React, { useState } from "react";
import { useGeoLocationData } from "./hooks.tsx";
import './LandingPage.scss';
import headerImage from '../images/pattern-bg-desktop.png';
import arrowImage from '../images/icon-arrow.svg';
import "leaflet/dist/leaflet.css";
import LeafletMap from './LeafletMap.tsx';

const LandingPage = () => {
    const [triggerSearch, setTriggerSearch] = useState(false);
    const { data, isLoading } = useGeoLocationData({ enabled: triggerSearch })
    console.log(isLoading, data)
    const handleSearch = () => {
        setTriggerSearch(true);
    }
    return (
        <>
            <div className='landing-page-container'>
                <div className="image-column">
                    <div className='header-image'>
                        <img src={headerImage} alt={'headerImage'}></img>
                    </div>

                    <input type='search' ></input>
                    <button onClick={handleSearch}>
                        <img src={arrowImage} alt="Arrow image" />
                    </button>
                </div>

            </div>
            <LeafletMap />
        </>
    );
}

export default LandingPage;