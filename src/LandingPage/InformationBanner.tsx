import React from "react"

export const InformationBanner = ({ data }) => {

    return (<div>
        {data?.ip}
        {data?.isp}
        {data?.location?.region}
        {data?.location?.timezone}
    </div>)

}