import { Datum, Gifs } from '../interfaces';

interface JSONResponse{
    data: Datum[]
}

export const getGifsApi = async(category:string): Promise<Gifs[]> => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=m3bu7NP4EBs6rxrqBLcLpLed8BH8VmGr&q=${category}&limit=20`;

    const resp = await fetch(url);

    const {data}:JSONResponse = await resp.json();

    const gifs  = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }));

    return gifs
}