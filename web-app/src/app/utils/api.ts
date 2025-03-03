import axios from "axios";

export interface cryptoData {
    id: string,
    name: string,
    current_price: number
}

export const fetchCryptoData = async (): Promise<cryptoData[]> => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL as string);
    return response.data;
}