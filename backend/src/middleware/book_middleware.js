export const addBookMiddleware = (req, res, next) => {
  console.log("Adding book...");
  const { title, creationDate, genres, plot } = req.body;

  if (!title || !creationDate || !genres || !plot) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Here you would typically add the book to your database
  req.book = { title, creationDate, genres, plot }; // Store book data in request object
  next(); // Call the next middleware
};