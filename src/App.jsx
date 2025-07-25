import { Search } from 'react-bootstrap-icons'
import './App.css'
import Account from './components/Account'
import FilmRow from './components/FilmRow'
import Hero from './components/Hero'
import MyFooter from './components/MyFooter'
import MyNav from './components/MyNav'
import Profile from './components/Profile'


function App() {

  return (
    <>  
    <MyNav/>  
    <Hero/> 
     <FilmRow query ='Matrix' h4='I titoli del momento' num='5'/>
    <FilmRow query ='Blade' h4='Perchè ti è piaciuto Matrix' num='6'/>
    <FilmRow query ='Cube' h4='Continua a guardare' num='2'/> 
    {/* <Account user='Cane Grande' email='CatZilla470@proton.me' plan='Premium'/>
    <Profile user='Cane Grande'/> */}
    <MyFooter/>
    </>
  )
}

export default App
