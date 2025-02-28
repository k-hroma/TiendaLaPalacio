import { useState, useEffect } from 'react';
import { Layout } from "../../layout/Layout.jsx";
import { Link } from 'react-router-dom';
import { ItemBook } from '../../components/itemBook/ItemBook.jsx';
import defaultImg from '../../assets/home/default-cover-book.png'
import './store.css'

const Store = () => {
  
  const [books, setBooks] = useState([]);
  const handleFetch = () => { 
    
    fetch('https://openlibrary.org/search.json?q=queer&limit=16')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
  })
    .catch((error) => {
      console.log('Error fetching books', error);
    });
  }
  // iniciar fetch 
  useEffect(() => {
    handleFetch()
}, []);
  
  return (
    <Layout>
      <section className="home-container">
        <div className="txt-news-container">
          <span className="txt-used">Usados | Recomendados | Novedades </span>
          <Link className="link-used" to='/store'>Ver más +</Link>
        </div>
        <div className="grid-container-novedades">
          {books && books.map((book, index) => (
            <ItemBook
              key={book.key}
              index={index}
              itemSrc={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : defaultImg}
              itemAlt={book.title}
              title={book.title}
              author={book.author_name?.[0] || "Autor desconocido"}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export { Store };
