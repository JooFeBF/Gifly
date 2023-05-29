import { useEffect, useState } from 'react'

import gifsMock from '../mocks/gifsMock.json'
import SearchCss from './Search.module.css'
import Gif from '../components/Gif'
import { NAVIGATION_EVENTS } from '../constants/constants'

function useGifs () {
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

export default function Search () {
  const { gifs, setGifs } = useGifs()

  return (
    <main className={SearchCss.main}>
      <h1>Search</h1>
      <ul className={SearchCss['gifs-grid']}>
        {
          gifs.map(({ title, image, id, height, width }) =>
            <Gif key={id} title={title} image={image} height={height} width={width} />
          )
        }
      </ul>
    </main>
  )
}
