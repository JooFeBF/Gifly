import searchGifs from '../services/searchGifs'

import { useState, useEffect } from 'react'

export default function useGifs ({ search }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const gifsFetch = searchGifs({ search })
    gifsFetch.then(gifsFetch => {
      setGifs(gifsFetch.data.map(gif => ({
        title: gif.title,
        image: gif.images.original.url,
        height: gif.images.original.height,
        width: gif.images.original.width,
        id: gif.id
      })))
    }).catch(err => console.error(err))
  }, [search])

  return { gifs, setGifs }
}
