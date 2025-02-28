import { useState } from 'react';
import './form.css'
const ContactForm = () => {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    telephone: '',
    email: '',
    message: ''
  })

  console.log(formData)

  const handleChange = (event) => { 
    const { id, value } = event.target;
    console.log(id, value)
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (event) => { 
    event.preventDefault()
    const formDataJson = JSON.stringify(formData)
    alert(`"Formulario enviado: ${formDataJson}"`)
    setFormData({
      title: '',
      author: '',
      telephone: '',
      email: '',
      message: ''
    });

  }

  return (
    <form className="form-contact-f" onSubmit={handleSubmit}>
      <div className='row-1'>
        <div className="lab-input-container">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ingrese título"
            required
          />
        </div>
        
        <div className="lab-input-container">
          <label htmlFor="author" className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Ingrese autor"
            required
          />
        </div>
      </div>

      <div className="row-2">
        <div className="lab-input-container">
          <label htmlFor="telephone" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Ingrese teléfono"
            required
          />
        </div>
        
        <div className="lab-input-container">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nombre@ejemplo.com"
          />
        </div>
      </div>

      <div className='row-3'>
        <div className="lab-input-container">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Detalle de edición u otras observaciones"
          ></textarea>
        </div>
      </div>

      <div className='row-4'>
        <button id="btn-submit" type="submit" className="btn">Enviar</button>
      </div>
    </form>
  );
};

export { ContactForm };