import { Header } from "../components/header/Header.jsx"
import { Footer } from '../components/footer/Footer.jsx'
import './layout.css'
const Layout = ({children}) => { 
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        { children }
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export { Layout }