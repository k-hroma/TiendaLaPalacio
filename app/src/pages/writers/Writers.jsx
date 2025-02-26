import { Layout } from "../../layout/Layout.jsx"
import { Link } from "react-router-dom"
import bannerwriters from '../../assets/writers/banner.png'
import './writers.css'

const Writers = () => { 
  return (
    <Layout>
      <article className="writers-section">
        <section className="writers-container">
          <div className="txt-writers-header-container">
            <p className="txt-writers">Escriotres recomendados</p>
            <Link className="link-writers" to='/'>Ver más escritorxs +</Link>
          </div>
          <div className="txt-writers-container">
            <p>Donna Haraway<span>Ensayo</span></p>
            <p>Ioshua<span>Poesía</span></p>
            <p>Ursula Le Guin<span>Ciencia Ficción</span></p>
            <p>Mark Fisher<span>Ensayo</span></p>
            <p>Pedro Lemebel<span>Literatura</span></p>
            <p>José Sbarra<span>Literatura</span></p>
            <p>Paul Preciado<span>Ensayo</span></p>
            <p>Alejandra Pizarnik<span>Poesía</span></p>
            <p>Rosario Bléfari<span>Literatura</span></p>
          </div>
        </section>
        <section className="banner-container">
          <img src={ bannerwriters } alt="banner-writers" />

        </section>
      </article>
    </Layout>
)
}

export { Writers }