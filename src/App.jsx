import Search from './pages/Search.jsx'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import { useState, useEffect } from 'react'
import { NAVIGATION_EVENTS } from './constants/constants.js'

export const navigate = (href) => {
  window.history.pushState({}, '', href)
  const pushStateEvent = new Event(NAVIGATION_EVENTS.PUSH_STATE)
  window.dispatchEvent(pushStateEvent)
}

export default function App () {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENTS.PUSH_STATE, handlePathChange)
    window.addEventListener('popstate', handlePathChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENTS.PUSH_STATE, handlePathChange)
      window.removeEventListener('popstate', handlePathChange)
    }
  }, [])

  return (
    <div className='App'>
      <Header />
      {path === '/search' && <Search />}
      {path === '/' && <Home />}
    </div>
  )
}
