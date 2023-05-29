import { navigate } from '../App'
import searchIcon from '../assets/icons8-search.svg'
import HeaderCss from './Header.module.css'

export default function Header () {
  const handleSubmit = event => {
    event.preventDefault()
    navigate('/search')
    console.log(event.target[0].value)
  }

  return (
    <header className={HeaderCss.Header}>
      <nav>
        <a href='/' className={HeaderCss['home-link']}>Gifly</a>
        <form action='submit' onSubmit={handleSubmit}>
          <input type='text' placeholder='cats gifs, dogs gifs...' />
          <button>
            <img src={searchIcon} alt='search icon' />
          </button>
        </form>
      </nav>
    </header>
  )
}
