import { Header } from "../components/header/Header.jsx"
import { Footer } from '../components/footer/Footer.jsx'

const Layout = ({children}) => { 
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        {/* Renderizar contenido dinámico */}
        <h1>{ children }</h1>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export { Layout }