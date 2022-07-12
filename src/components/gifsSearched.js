
import ListOfGifs from './Gif';


function Gifs({gifs, loading}) {

  if (loading) return <h1>Loading...</h1>
  return(
    <>
      {
        gifs.map(gif => <ListOfGifs key={gif.id} title={gif.title} url={gif.url} id={gif.id}/>)
      }
    </>
  )
}

export default Gifs;