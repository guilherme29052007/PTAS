import express from 'express';
import controller from './controllers.js'; 



const router = express.Router();  


router.delete('/excluir/:id', controller.del); 
router.put('/alterar/:id', controller.alt)
router.post('/registrar',controller.regis)
router.get('/', controller.list)
router.get('/:id', controller.busc)

export default router;
