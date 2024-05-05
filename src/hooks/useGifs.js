import searchGifs from '../services/searchGifs'

import { useState, useEffect } from 'react'

export default function useGifs ({ search }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const gifsFetch = searchGifs({ search })
    gifsFetch.then(gifsFetch => {
      setGifs(gifsFetch.data.map(gif => ({
        title: gif.title,
        image: gif.images.fixed_height_downsampled.url,
        height: gif.images.fixed_height_downsampled.height,
        width: gif.images.fixed_height_downsampled.width,
        id: gif.id
      })))
    }).catch(err => console.error(err))
  }, [search])

  return { gifs, setGifs }
}
