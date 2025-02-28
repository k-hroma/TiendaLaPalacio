import { Layout } from "../../layout/Layout.jsx"
import { Link } from "react-router-dom"
import { ContactForm } from "../../components/form/Form.jsx"
import bannercontact from '../../assets/contact/bg-img-contact.png'
import './contact.css'

const Contact = () => { 
  return (
    <Layout>
      <section className="contact-container">
        <div className="form-container">
          <p className="txt-form-big">
        { "si el libro que buscás no está en el catálogo,\n dejános tu consulta y a la brevedad te responderemos"}</p>
          <ContactForm/>
        </div>
        <div className="contact-img-des">
          <div className="bg-img-contact">
            <img height='733px' src={bannercontact} alt="banner-contact" />
          </div>
          <div className="decription-container">
            <p className="txt-color txt-pad-8">
              {"somos una librería digital de libros nuevos y usados\n recomendados por Mecha y Khroma (librerxs hace 20 años)"}</p>
            <p className="txt-color">contactanos:</p>
            <p className="txt-color-br">@lapalaciolibros</p>
            <p className="txt-color-br">lapalacio@gmail.com</p>
            <Link to='/' className="txt-color txt-size-mini">Ver más de nosotroxs+</Link>
          </div>
        </div>
      </section>
    </Layout>
)
}

export { Contact }