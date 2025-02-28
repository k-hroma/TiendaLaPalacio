import { Header } from "../components/header/Header.jsx"
import { Footer } from '../components/footer/Footer.jsx'
import { useEffect } from "react"
import { preLoadImages } from "../utils/preloadImages.jsx"
import './layout.css'
const Layout = ({ children }) => { 
  useEffect(() => {
    preLoadImages()
   }, []);

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