import axios from "axios";
import { FetchGalleryPhotosResponse } from '../components/App/App.types';

const API_KEY = '2FxY9_bMgTNJHZipZqCqc4Lrq5Vam3EaOF4uDCKGFpU';
axios.defaults.baseURL = "https://api.unsplash.com/";


axios.defaults.headers.common = {
    Authorization: `Client-ID ${API_KEY}`,
    'Accept-Version': 'v1',
};

axios.defaults.params = {
    orientation: 'landscape',
    per_page: 10,
};

const fetchData = async (query: string,
	page: number) : Promise<FetchGalleryPhotosResponse> => {

        const response = await axios.get(`/search/photos`, {
            params: {
            query,
            page,
            },
        });
        return response.data;

};


export default fetchData;