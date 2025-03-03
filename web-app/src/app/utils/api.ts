import axios from "axios";

export interface cryptoData {
    id: string;
    name: string;
    image?: string;
    current_price: number;
    symbol: string;
    market_cap?: number;
}

export const fetchCryptoData = async (): Promise<cryptoData[]> => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL as string);
        return response.data;
    } catch (error) {
        //error handling
        if (axios.isAxiosError(error)) {
            if (error.response) {
                //request made, server responds with status code that falls out of range 2xx
                console.error("API error response:", error.response.status, error.response.data);
                
                //rate limiting
                if (error.response.status === 429) {
                    console.error("rate limit exceeded. please try again later.");
                }
            } else if (error.request) {
                //request made - no response received
                console.error("API no response:", error.request);
            } else {
                //something happened in setting up request that triggered error
                console.error("API request setup error:", error.message);
            }
        } else {
            console.error("unexpected error:", error);
        }
    }

    //return empty array or cached data as fallback
    return [];
}