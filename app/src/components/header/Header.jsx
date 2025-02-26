import headerbg from '../../assets/header/fondo/header-fondo.png'
import bgtxt from '../../assets/header/menu-flotante/fondo.png'
import menubar from '../../assets/header/menu-icons/menu-lines.png'
import queerbar from '../../assets/header/menu-icons/menu-star.png'
import storebar from '../../assets/header/menu-icons/menu-store.png'
import menunavbar from '../../assets/header/menu-icons/menu-open.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => { 
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickClose = () => { 
    setOpen(false)
  }
  
  return (
    <>
      <div className='container-headerbackground'>
        <img className='header-bg' src={headerbg} alt="bg-la-palacio" />
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
            <button className='queer-bar'>
              <img src={queerbar } alt="queer-icon" width="25" height="22" />
            </button>
            <button className='store-bar'>
              <img src={storebar } alt="store-icon" width="25" height="22"  />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
