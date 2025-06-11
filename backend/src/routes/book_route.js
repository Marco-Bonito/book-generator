import { Router } from "express";
import { addBook, createBook } from "../controller/book_controller.js";
import { addBookMiddleware } from "../middleware/book_middleware.js";
import { removeBook } from "../controller/book_controller.js";
import { removeBookMiddleware } from "../middleware/book_middleware.js";
import { updateBook } from "../controller/book_controller.js";
import { updateBookMiddleware } from "../middleware/book_middleware.js";

const router = Router();

router.post("/add", addBookMiddleware, createBook);
router.post("/remove", removeBookMiddleware, removeBook);
router.post("/update", updateBookMiddleware, updateBook);

export default router;
