import { GifGridItem } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';


interface Props {
    category:string
}

export const GifGrid = ({ category }:Props) => {
    
    const {images, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3>{ category }</h3>
        {isLoading && <p>Loading...</p>}
        <div className="card-grid">
            {
                images.map( image => (
                    <GifGridItem key={image.id} {...image} />
                ))
            }
        </div>
    </>
    )
}
