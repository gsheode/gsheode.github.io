import { GeoLocationResponse, getGeoLocation } from "./api.tsx"
import { useQuery } from "react-query";


export const useGeoLocationData = ({ enabled }) => {
    return useQuery<GeoLocationResponse, Error>(['GeoLocation'], () => getGeoLocation(), { enabled })
}