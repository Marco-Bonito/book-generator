import { supabase } from '../utils/supabaseConfig.js';

// AGGIUNTA
export const addBook =
async (req, res, next) => {
  try {
    const { title, creationDate, genres, plot, cover } = req.body;
    // Here you would typically add the book to your database
    req.book = { title, creationDate, genres, plot, cover }; // Store book data in request object
    console.log("Book added:", req.book);
    res.status(201).json({
      message: "Book added successfully",
      book: req.book,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error: error.message });
  }
}
// MODIFICA
export const updateBook =
async (req, res, next) => {
  try {
    const { id, title, creationDate, genres, plot, cover } = req.body;
    // Here you would typically update the book in your database
    req.book = { id, title, creationDate, genres, plot, cover }; // Store updated book data in request object
    console.log("Book updated:", req.book);
    res.status(200).json({
      message: "Book updated successfully",
      book: req.book,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error: error.message });
  }
}
// RIMOZIONE
export const removeBook =
async (req, res, next) => {
  try {
    const { id } = req.body;
    // Here you would typically remove the book from your database
    req.bookId = id; // Store book ID in request object
    console.log("Book removed with ID:", req.bookId);
    res.status(200).json({
      message: "Book removed successfully",
      bookId: req.bookId,
    });
  } catch (error) {
    res.status(500).json({ message: "Error removing book", error: error.message });
  }
}
// QUERY SELEZIONE BOOK
export const getBook = async (req, res) => {
  const { bookId } = req.body;

  let query = supabase
    .from('book')
    .select('*')
    .eq('id', bookId);

  const { data, error } = await query;
    

  if (error) {
    res.send(error);
    return;
  }

  res.send(data);
};
// QUERY SELEZIONE TUTTI I BOOK
export const getAllBooks = async (req, res) => {

  let query = supabase
    .from('book')
    .select('*');

  const { data, error } = await query;

  if (error) {
    res.send(error);
    return;
  }

  res.send(data);
};

// QUERY CREAZIONE BOOK
export const createBook = async (req, res) => {
  const book = {
    title : req.body.title,
    creationDate : req.body.creationDate,
    genres : req.body.genres,
    plot : req.body.plot,
    cover : req.body.cover || null, // Optional cover field
  };

  const { data, error } = await supabase.from('book').insert([book]);
  console.log(data);
  console.log(error);
  if (error) {
    res.json(error);
    return;
  }

  res.json(data);
};

// QUERY MODIFICA BOOK
export const modifyBook = async (req, res) => {
  const { id, title, author, creationDate, genres, plot, cover } = req.body;

  const { data, error } = await supabase
    .from('book')
    .update({ title, author, creationDate, genres, plot, cover: cover || null }) // Optional cover field
    .eq('id', id);

  if (error) {
    res.send(error);
    return;
  }

  res.send(data);
};

// QUERY RIMOZIONE BOOK
export const deleteBook = async (req, res) => {
  const { id } = req.body;

  const { data, error } = await supabase
    .from('book')
    .delete()
    .eq('id', id);

  if (error) {
    res.send(error);
    return;
  }

  res.send(data);
};