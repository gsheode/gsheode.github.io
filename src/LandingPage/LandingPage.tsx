import React, { useEffect, useRef, useState } from "react";
import { useGeoLocationData } from "./hooks.tsx";
import './LandingPage.scss';
import headerImage from '../images/pattern-bg-desktop.png';
import arrowImage from '../images/icon-arrow.svg';
import "leaflet/dist/leaflet.css";
import LeafletMap from "./LeafletMap.tsx";
import { InformationBanner } from "./InformationBanner.tsx";

const LandingPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const { data } = useGeoLocationData({ formValue: searchValue })
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSearch = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // const ipAddress = formData.get('ipAddress') as string;
        const ipAddress = inputRef.current?.value;
        setSearchValue(ipAddress as string);
        if (inputRef.current)
            inputRef.current.value = '';
    }


    return (
        <>
            <div className='landing-page-container'>
                <div className="image-column">
                    <div className='header-image '>
                        <img src={headerImage} alt={'headerImage'}></img>
                        <form onSubmit={handleSearch} className="input-field">
                            <input name="ipAddress"
                                ref={inputRef}
                                placeholder="Search for any IP address or domain"  ></input>
                            <button type="submit" >
                                <img src={arrowImage} alt="Arrow image" />
                            </button>
                        </form>
                    </div>

                </div>
                {data && <InformationBanner data={data} />}

            </div>
            <LeafletMap data={data} />
        </>
    );
}

export default LandingPage;