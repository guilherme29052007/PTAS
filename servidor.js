import express from 'express';
import routes from './rotas/routes.js';

const server = express();
const port = process.env.PORT || 1000;

server.use('/', routes);

server.listen(port, () => {
    console.log(`Servidor ativo na porta 1000`);
});
