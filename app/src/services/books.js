import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const booksCollection = collection(db, "books");

// Obtener todas las películas
const getBooks = async () => {
  const querySnapshot = await getDocs(booksCollection);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Agregar una película
const addBook = async (book) => {
  const docRef = await addDoc(booksCollection, book);
  return { id: docRef.id, ...book };
};

// Eliminar una película por ID
const deleteBook = async (id) => {
  await deleteDoc(doc(db, "books", id));
};

// Actualizar una película
const updateBook = async (id, newBookData) => {
  const bookDoc = doc(db, "books", id);
  await updateDoc(bookDoc, newBookData);
};

export { updateBook, deleteBook, addBook, getBooks };
