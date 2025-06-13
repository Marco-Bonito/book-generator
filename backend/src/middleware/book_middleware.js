// AGGIUNTA--
export const addBookMiddleware = (req, res, next) => {
  console.log("Adding book...");
  const { title, creationDate, genres, plot } = req.body;

  if (!title || !creationDate || !genres || !plot || !cover) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Here you would typically add the book to your database
  req.book = { title, creationDate, genres, plot, cover }; // Store book data in request object
  next(); // Call the next middleware
};

// RIMOZIONE--
export const removeBookMiddleware = (req, res, next) => {
  console.log("Removing book...");
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Book ID is required" });
  }

  // Here you would typically remove the book from your database
  req.bookId = id; // Store book ID in request object
  next(); // Call the next middleware
}

// MODIFICA--
export const updateBookMiddleware = (req, res, next) => {
  console.log("Updating book...");
  const { id, title, creationDate, genres, plot } = req.body;

  if (!id || !title || !creationDate || !genres || !plot) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Here you would typically update the book in your database
  req.book = { id, title, creationDate, genres, plot }; // Store updated book data in request object
  next(); // Call the next middleware
}

export const getBookMiddleware = (req, res, next) => {
  next(); // Call the next middleware
};

export const getAllBookMiddleware = (req, res, next) => {
  next(); // Call the next middleware
};