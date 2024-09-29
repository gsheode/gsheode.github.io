import { GeoLocationResponse, getGeoLocation } from "./api.tsx"
import { useQuery } from "react-query";


export const useGeoLocationData = ({ formValue }) => {
    return useQuery<GeoLocationResponse, Error>([formValue], () => getGeoLocation({ formValue }))
}