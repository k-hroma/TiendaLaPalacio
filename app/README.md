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
