import headerbg from '../../assets/header/fondo/header-fondo.png'
import bgtxt from '../../assets/header/menu-flotante/fondo.png'
import menubar from '../../assets/header/menu-icons/menu-lines.png'
import queerbar from '../../assets/header/menu-icons/menu-star.png'
import storebar from '../../assets/header/menu-icons/menu-store.png'
import './header.css'
const Header = () => { 
  
  return (
    <>
      <div className='container-headerbackground'>
        <img className='header-bg' src={headerbg} alt="bg-la-palacio" />
        <img className='bg-txt' src={bgtxt} alt="text-header" />
        <div className='btns-containers'>
          <button className='menu-bar'><img src={menubar} alt="menu-icon" width='27px' height='15px' /></button>
          <div className='right-menu-bar'>
            <button className='queer-bar'><img src={queerbar } alt="queer-icon" width="25" height="22" /></button>
            <button className='store-bar'><img src={storebar } alt="stor-icon" width="25" height="22"  /></button>
          </div>
        </div>
      </div>
    </>
  
)
}

export { Header }