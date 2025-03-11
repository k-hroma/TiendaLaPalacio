import { useEffect, useState } from "react";
import { Layout } from "../layout/Layout.jsx";
import { addBook, deleteBook, getBooks, updateBook } from "../services/books.js";


const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ id: null, title: "", author: "", cover: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const booksData = await getBooks();
    setBooks(booksData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateBook(form.id, { title: form.title, author: form.author, cover: form.cover });
    } else {
      await addBook({ title: form.title, author: form.author, cover: form.cover });
    }
    setForm({ id: null, title: "", author: "", cover: "" });
    fetchBooks();
  };

  const handleEdit = (book) => {
    setForm(book);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este libro?")) {
      await deleteBook(id);
      fetchBooks();
    }
  };

  return (
    <Layout>
      <section className="section-container">

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">Administración de Libros</h1>
            <p className="text-gray-600">Gestiona tu catálogo de libros</p>
          </div>
          
          {/* Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-10 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">
              {form.id ? "✏️ Editar Libro" : "📖 Agregar Nuevo Libro"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Título del libro"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Autor del libro"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL de la Portada</label>
                  <input
                    type="text"
                    value={form.cover}
                    onChange={(e) => setForm({ ...form, cover: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="https://ejemplo.com/portada.jpg"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                {form.id ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293a1 1 0 00-1.414 0z" />
                    </svg>
                    <span>Actualizar Libro</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span>Agregar Libro</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Tabla de Libros */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Título</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Autor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {books.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {book.cover && (
                          <img 
                            src={book.cover} 
                            alt={`Portada de ${book.title}`} 
                            className="w-12 h-16 object-cover rounded-md shadow-sm mr-4"
                          />
                        )}
                        <span className="text-gray-900 font-medium">{book.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{book.author}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleEdit(book)}
                          className="text-indigo-600 hover:text-indigo-900 flex items-center group"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          <span className="hidden md:inline">Editar</span>
                        </button>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="text-red-600 hover:text-red-900 flex items-center group"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden md:inline">Eliminar</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {books.length === 0 && (
              <div className="text-center py-12 bg-gray-50">
                <p className="text-gray-500">No hay libros registrados</p>
              </div>
            )}
          </div>
        </div>
      </div>
      </section>
    </Layout>
  );
};

export { Dashboard };