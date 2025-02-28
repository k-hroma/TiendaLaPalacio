import './footer.css'
import bgfooter from '../../assets/footer/bg-footer.png'
import { Links } from '../../utils/Links.jsx'
const Footer = () => {

  return (
    <>
        <section className='footer-container'>
          <div className='bg-footer'>
            <img width='1280px' height='614px' src={bgfooter} alt="bg-img-footer" />
          </div>
          <div className='right-text'>
            <div>
              <p>Libros:</p>
              <p>Usados</p>
              <p>Recomendados</p>
              <p>Novedaeds</p>
            </div>
            <div>
              <p>Escritorxs</p>
              <p>Nosotrxs</p>
              <p>Contacto</p>
              <p>-</p>
              <p>Tienda</p>
            </div>
          </div>
          <div className='credits-texts'>
            <p className='cr-text'>@lapalaciolibros. Copyright - All rights reserved</p>
            <div className='small-credits-container'>
              <Links className='small-credits' url="https://k-hroma.github.io/Portfolio/pages/index.html" text="desarrollo web: k-roma" newTag="true"></Links>
              <Links className='small-credits' url="https://www.behance.net/rociofuks" text="diseño web: rofuks" newTag="true"></Links>
            </div>
          </div>
        </section>
    </>
)
}

export { Footer }