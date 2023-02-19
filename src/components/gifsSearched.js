
import ListOfGifs from './Gif';


function Gifs({gifs}) {

  return(
    <>
      {
        gifs.map(gif => <ListOfGifs key={gif.id} title={gif.title} url={gif.url} id={gif.id}/>)
      }
    </>
  )
}

export default Gifs;