import { GeoLocationResponse, getGeoLocation } from "./api.tsx"
import { useQuery } from "react-query";


export const useGeoLocationData = ({ enabled, formValue }) => {
    return useQuery<GeoLocationResponse, Error>(['GeoLocation'], () => getGeoLocation({ formValue }), { enabled })
}