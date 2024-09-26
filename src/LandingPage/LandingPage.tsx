import React, { useState } from "react";
import { useGeoLocationData } from "./hooks.tsx";
import './LandingPage.scss';
import headerImage from '../images/pattern-bg-desktop.png';
import arrowImage from '../images/icon-arrow.svg';
import "leaflet/dist/leaflet.css";
import LeafletMap from "./LeafletMap.tsx";
import { InformationBanner } from "./InformationBanner.tsx";

const LandingPage = () => {
    const [triggerSearch, setTriggerSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const { data } = useGeoLocationData({ enabled: triggerSearch, formValue: searchValue })
    const handleSearch = () => {
        setTriggerSearch(true);
    }
    const handleInputChange = (ev) => {
        setSearchValue(ev.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter')
            handleSearch();
    }
    return (
        <>
            <div className='landing-page-container'>
                <div className="image-column">
                    <div className='header-image '>
                        <img src={headerImage} alt={'headerImage'}></img>
                        <div className="input-field">
                            <input type='search' onKeyDown={handleEnter} onChange={handleInputChange} placeholder="Search for any IP address or domain"  ></input>
                            <button onClick={handleSearch}>
                                <img src={arrowImage} alt="Arrow image" />
                            </button>
                        </div>
                    </div>

                </div>
                {data && <InformationBanner data={data} />}

            </div>
            <LeafletMap data={data} />
        </>
    );
}

export default LandingPage;