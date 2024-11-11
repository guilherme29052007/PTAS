import express from 'express';
import handler from '../itensController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


router.get('/', handler.homePage);
router.get('/itens', authMiddleware, handler.productPage);

export default router;
