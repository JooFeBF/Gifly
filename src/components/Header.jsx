import { useState } from 'react'

import { Link } from 'jf-router'

import searchIcon from '../assets/icons8-search.svg'
import HeaderCss from './Header.module.css'

export default function Header () {
  const [search, setSearch] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <header className={HeaderCss.Header}>
      <nav>
        <Link to='/' className={HeaderCss['home-link']}>Gifly</Link>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} placeholder='cats gifs, dogs gifs...' />
          <Link to={`/search/${search}`}>
            <img src={searchIcon} alt='search icon' />
          </Link>
        </form>
      </nav>
    </header>
  )
}
