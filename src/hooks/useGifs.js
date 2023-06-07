import { useState, useEffect } from 'react'

import gifsMock from '../mocks/gifsMock.json'

export default function useGifs () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setGifs(gifsMock.data.map(gif => ({
      title: gif.title,
      image: gif.images.downsized.url,
      height: gif.images.downsized.height,
      width: gif.images.downsized.width,
      id: gif.id
    })))
  }, [])

  return { gifs, setGifs }
}
