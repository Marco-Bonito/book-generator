export const addBook =
async (req, res, next) => {
  try {
    const { title, creationDate, genres, plot } = req.body;
    // Here you would typically add the book to your database
    req.book = { title, creationDate, genres, plot }; // Store book data in request object
    console.log("Book added:", req.book);
    res.status(201).json({
      message: "Book added successfully",
      book: req.book,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error: error.message });
  }
}