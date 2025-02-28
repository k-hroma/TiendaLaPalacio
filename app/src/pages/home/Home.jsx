import { useState, useEffect } from 'react';
import { Layout } from "../../layout/Layout.jsx";
import { Link } from 'react-router-dom';
import { ItemBook } from '../../components/itemBook/ItemBook.jsx';
import defaultImg from '../../assets/home/default-cover-book.png'
import './home.css'
import { useImageLoader } from '../../hooks/useImageLoader';
import { LoadingComp } from '../../components/loading/Loading.jsx';

const Home = () => {
  
  // crear el estado inicial del array de books
  const [books, setBooks] = useState([]);

  //fetch de datos
  const handleFetch = () => { 
    
    fetch('https://openlibrary.org/search.json?q=queer&limit=8')
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
  
  const coverBooks = books.map(book => 
    book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : defaultImg
  );
  const isLoading = useImageLoader([coverBooks])
  
  return (
    <Layout>
      {isLoading ? (<LoadingComp />)
        : (
        <section className="home-container">
          <div className="txt-used-container">
            <span className="txt-used">Usados</span>
            <Link className="link-used" to='/store'>Ver más usados +</Link>
          </div>
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
          </div>
        </section>
      )}
    </Layout>
  );
};

export { Home };