import { GeoLocationResponse, getGeoLocation } from "./api.tsx"
import { useQuery } from "react-query";


export const useGeoLocationData = () => {
    return useQuery<GeoLocationResponse, Error>(['GeoLocation'], () => getGeoLocation())
}