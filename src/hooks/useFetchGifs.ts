import { useState, useEffect } from 'react';
import { getGifsApi } from '../helpers/getGifsApi';
import { Gifs } from '../interfaces/gifs';


export const useFetchGifs = (category:string) => {
  
    const [images, setImages] = useState<Gifs[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getGifs = async() => {
        const newGifs = await getGifsApi(category);
        setImages(newGifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getGifs();
    }, [category])


    return {
        images,
        isLoading
    }

}
