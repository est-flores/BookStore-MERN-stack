import express from 'express';
import { 
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
 } from  '../controllers/bookController.js';

const router = express.Router();

//add book to database
router.post('/', createBook);

//get all books from database
router.get('/', getBooks)

//get one book by id
router.get('/:id', getBookById)

//update book by id
router.put('/:id', updateBook);

//delete book
router.delete('/:id', deleteBook);

export default router;