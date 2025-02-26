import headerbg from '../../assets/header/fondo/header-fondo.png'
import bgtxt from '../../assets/header/menu-flotante/fondo.png'
import menubar from '../../assets/header/menu-icons/menu-lines.png'
import queerbar from '../../assets/header/menu-icons/menu-star.png'
import storebar from '../../assets/header/menu-icons/menu-store.png'
import menunavbar from '../../assets/header/menu-icons/menu-open.png'
import queeropen from '../../assets/header/menu-icons/menu queer.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => { 
  const [open, setOpen] = useState(false)
  const [openQueer, setOpenQueer] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickClose = () => { 
    setOpen(false)
  }

  const handleClickQueerOpen = () => { 
    setOpenQueer(true)
  }

  const handleClickQueerClose = () => { 
    setOpenQueer(false)
  }
  
  return (
    <>
      <div className='container-headerbackground'>
        <div className='bg-img-container'>
        <img className='header-bg' src={headerbg} alt="bg-la-palacio" />
        </div>
        <div className='moving-container'>
          <img className='bg-txt' src={bgtxt} alt="text-header" />
          <img className='bg-txt' src={bgtxt} alt="text-header" />
          <img className='bg-txt' src={bgtxt} alt="text-header" />
        </div>
        <div className='btns-containers'>
          {open === true &&
          <div className='menu-navBar'>
            <button onClick={handleClickClose} className='open-bar'>
              <img src={menunavbar} alt="open-menu-icon" width='28px' height='18px' />
            </button>
            <div className='links-container'>
              <Link className='links-sub-menu-open' to='/'>Home</Link>
                <Link className='links-menu-open' to='/store'>Libros</Link>
                <div className='sub-links-container'>
                <Link className='links-sub-menu-open' to='/store'>Usados</Link>
                <Link className='links-sub-menu-open' to='/store'>Recomendados</Link>
                <Link className='links-sub-menu-open' to='/store'>Novedades</Link>
                </div>
                <Link className='links-menu-open' to='/writers'>Escritorxs</Link>
                <Link className='links-menu-open' to='/contact'>Nosotrxs</Link>
                <Link className='links-menu-open' to='/store'>Tienda</Link>
                <Link className='links-menu-open' to='/contact'>Contacto</Link>
            </div>
          </div>
          }
          <div className='left-menu-bar'>
            <button onClick={handleClickOpen} className='menu-bar'>
              <img src={menubar} alt="menu-icon" width='27px' height='15px' />
            </button>
          </div>
          <div className='right-menu-bar'>
            {openQueer === true &&
              <div className='queer-container'>
                <div className='queer-open-bar'>
                  <img src={ queeropen } alt="icon-menu-queer-open" width='25px' height='25px' onClick={handleClickQueerClose} />
                  <p>Queer y orgullosxs</p>
                </div>
                <p className='queer-txt'>
                {"somos personas queer,\nleemos libros queer, y también nos\nguiamos por lo queer en un sentido\nmás amplio: celebramos otras formas\nde pensar y desafiamos las normas\npatriarcales, tradicionales, machistas\ny hegemónicas."}
                </p>
              </div>}
            <button onClick={handleClickQueerOpen} className='queer-bar'>
              <img src={ queerbar } alt="queer-icon" width="25" height="22" />
            </button>
            <button className='store-bar'>
              <Link to='/store'>
              <img src={ storebar } alt="store-icon" width="25" height="22"  />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
