import { Gifs } from "../interfaces/gifs"


export const GifGridItem = ({title, url}:Gifs) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
