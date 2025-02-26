import './footer.css'
import bgfooter from '../../assets/footer/bg-footer.png'
const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='bg-footer'>
          <img src={bgfooter} alt="bg-img-footer" />
        </div>
        <div className='txt-footer'>
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
              <p className='small-credits'>desarrollo web: k-hroma</p>
              <p className='small-credits'>diseño web: rofuks</p>
            </div>
          </div>
        </div>
      </div>
    </>
)
}


export { Footer }