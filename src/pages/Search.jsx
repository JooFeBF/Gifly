import SearchCss from './Search.module.css'
import Gif from '../components/Gif'

import useGifs from '../hooks/useGifs'

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
