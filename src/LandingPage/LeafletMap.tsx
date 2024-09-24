import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from '../images/icon-location.svg';
import { Icon } from "leaflet";
import { useMap } from 'react-leaflet/hooks'

const LeafletMap = ({ data }) => {
    const lat = data?.location ? data?.location?.lat : 51.505;
    const lng = data?.location ? data?.location?.lng : -0.09;

    const mapRef = useRef(null);

    const position = [lat, lng]
    const customIcon = new Icon({
        iconUrl: locationIcon,
        iconSize: [30],
    });


    return (<>
        {data && (<MapContainer center={position} zoom={13} ref={mapRef} style={{ height: "100vh", width: "100vw" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater position={position} />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    {position[0]}
                    <br />
                    {position[1]}

                </Popup>
            </Marker>
        </MapContainer >
        )}
    </>
    )
}

const MapUpdater = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        map.flyTo(position, 13, { animate: true });
    }, [position, map])
    return null;
}

export default LeafletMap;