import { Router } from "express";
import { addBook } from "../controller/book_controller.js";
import { addBookMiddleware } from "../middleware/book_middleware.js";

const router = Router();

router.post("/add", addBookMiddleware, addBook);


export default router;