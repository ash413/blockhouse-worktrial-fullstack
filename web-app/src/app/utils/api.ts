import axios from "axios";

export interface cryptoData {
    id: string,
    name: string,
    current_price: number
}

export const fetchCryptoData = async (): Promise<cryptoData[]> => {
    const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano'
    );
    return response.data;
}