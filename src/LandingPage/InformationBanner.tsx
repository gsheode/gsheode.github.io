import React from "react"

export const InformationBanner = ({ data }) => {

    return (<div className="information-banner-container">
        <div className="information-banner-column">
            <div className='information-banner-header'>{'IP Address'}</div>
            <div className="information-banner-info">{data?.ip}</div>
        </div>
        <div className="information-banner-column">
            <div className='information-banner-header'>{'Location'}</div>
            <div className="information-banner-info">{data?.location?.region} </div>
        </div>
        <div className="information-banner-column">
            <div className='information-banner-header'>{'Time Zone'}</div>
            <div className="information-banner-info">{data?.location?.timezone}</div>
        </div>
        <div className="information-banner-column">
            <div className='information-banner-header'>{'ISP'}</div>
            <div className="information-banner-info">{data?.isp}</div>
        </div>
    </div >)

}