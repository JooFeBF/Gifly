import Search from './pages/Search.jsx'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import { Router, Route } from 'jf-router'

export default function App () {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route path='/' Component={Home} />
        <Route path='/search/:query' Component={Search} />
      </Router>
    </div>
  )
}
