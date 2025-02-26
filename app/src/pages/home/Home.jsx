import { useState, useEffect } from 'react';
import { Layout } from "../../layout/Layout.jsx";
import { Link } from 'react-router-dom';
import { ItemBook } from '../../components/itemBook/ItemBook.jsx';
import defaultImg from '../../assets/home/default-cover-book.png'
import './home.css'

const Home = () => {
  
  // crear el estado inicial del array de books
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // iniciar fetch 
  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=queer&limit=8')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
        setLoading(false);
  })
    .catch((error) => {
      console.log('Error fetching books', error);
      setLoading(false);
    });
}, []);
  
  return (
    <Layout>
      <div className="home-container">
        <div className="txt-used-container">
          <span className="txt-used">Usados</span>
          <Link className="link-used" to='/store'>Ver más usados +</Link>
        </div>
        {loading ? (
          <div className="loading-message"><p>LOADING...</p></div>
        ) : (
          <div className="grid-container">
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
          </div>)}
      </div>
    </Layout>
  );
};

export { Home };