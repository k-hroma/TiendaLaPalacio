
import bgfooter from '../assets/footer/bg-footer.png'
import headerbg from '../assets/header/fondo/header-fondo.png'
import bgtxt from '../assets/header/menu-flotante/fondo.png'
import menubar from '../assets/header/menu-icons/menu-lines.png'
import queerbar from '../assets/header/menu-icons/menu-star.png'
import storebar from '../assets/header/menu-icons/menu-store.png'
import menunavbar from '../assets/header/menu-icons/menu-open.png'
import queeropen from '../assets/header/menu-icons/menu queer.png'


const preLoadImages = () => {
  const images = [bgfooter, headerbg, bgtxt, menubar, queerbar, storebar, menunavbar, queeropen]
  images.forEach((srcImg) => {
    const newImg = new Image();
    newImg.src = srcImg

  });
};

export  {preLoadImages }