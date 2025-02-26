# Ruta de creacion de ecommerce La Palacio

## Crear carpetas:

- components | layout| pages | router
- crear componentes reutilizables : header|footer
- crear paginas que se renderizaran dinámicamente: home| store| writers| contact
- establecer la estructura: main | App| Router

### Router

1. import { BrowserRouter, Routes, Route } from "react-router-dom";
2. import de los componentes de las páginas

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Writers from "./Writers";
import Contact from "./Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/writers" element={<Writers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
```

### Layout

- En el componente Layout establezco la estructura base de la página html: header|main|footer
- El Header y el Footer son componentes reutilizables

### Header

- El componente Header está conformado por una imagen de fondo, una barra en continuo movimiento y un navBar desplegable y fixed.

### NavBar

- Tiene todos los Links a las distintintas páginas. Las rutas se establecieron en el componente Router.

### Footer

```jsx
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {/* Renderizar contenido dinámico */}
        <h1>{children}</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { Layout };
```

### Item Book

- defino la estructura de cada item que estará conformado con información de la api de libros
- cada item ocupara un lugar en la grilla creada en el Home

### Home Page

- realizo el fetch de datos
- el componente Home se inyecta en la estructura ppal del Layout en la sección main

### Store Page

### Writers Page

### Contact Page
