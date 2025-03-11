import { useEffect, useState } from "react";
import { Layout } from "../../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { ItemBook } from "../../components/itemBook/ItemBook.jsx";
import { getBooks } from "../../services/books.js";
import "./store.css";

const Store = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Layout>
      <section className="home-container">
        <div className="txt-news-container">
          <span className="txt-used">Usados | Recomendados | Novedades </span>
          <Link className="link-used" to="/store">Ver más +</Link>
        </div>
        <div className="grid-container-novedades">
          {books.length > 0 ? (
            books.map((book, index) => (
              <ItemBook
                key={book.id}
                index={index}
                itemSrc={book.cover}
                itemAlt={book.title}
                title={book.title}
                author={book.author}
              />
            ))
          ) : (<p>Loading...</p>)}
        </div>
      </section>
    </Layout>
  );
};

export { Store };