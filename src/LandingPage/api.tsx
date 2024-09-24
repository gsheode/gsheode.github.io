import axios, { AxiosResponse } from 'axios';
// Define the structure of the location data
interface Location {
    country: string;
    region: string;
    timezone: string;
}

// Define the structure of the ASN (Autonomous System Number) data
interface ASN {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
}

// Define the structure of the API response
export interface GeoLocationResponse {
    ip: string;
    location: Location;
    domains: string[];
    as: ASN;
    isp: string;
}

export const getGeoLocation = async ({ formValue }): Promise<GeoLocationResponse> => {
    try {
        const res: AxiosResponse<GeoLocationResponse> = await axios.get('https://geo.ipify.org/api/v2/country,city', {
            params: {
                apiKey: 'at_x9FJNySec36fHSMVIi4zOgWXIXgXG',
                ipAddress: formValue,
            }
        });
        return res.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}
