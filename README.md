1) Middleware de Parsing de Corpo (Body Parsing)
O middleware de parsing é usado para processar e transformar os dados enviados no corpo da requisição, como JSON ou formulários. No Express, os middlewares express.json() e express.urlencoded() são bastante comuns.

express.json(): Faz o parsing de dados JSON no corpo da requisição.
express.urlencoded(): Faz o parsing de dados de formulários URL-encoded.
Exemplo:

javascript
Copiar código
const express = require('express');
const app = express();

// Middleware para parsing de JSON
app.use(express.json());  // Analisa o corpo da requisição como JSON

// Middleware para parsing de dados de formulários
app.use(express.urlencoded({ extended: true }));  // Analisa dados de formulários URL-encoded
2) Middleware de Autenticação
O middleware de autenticação garante que a requisição seja realizada por um usuário autenticado. Geralmente, ele verifica se um token (como JWT) ou sessão está presente e válido. Esse tipo de middleware é essencial em APIs RESTful para proteger rotas sensíveis.

Exemplo:

javascript
Copiar código
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  if (token !== '12345') {
    return res.status(403).json({ message: 'Token inválido.' });
  }

  next();
};

export default authMiddleware;
3) Middleware de Autorização
Este middleware é utilizado para garantir que o usuário autenticado tenha permissões para acessar uma rota específica. Ele verifica, por exemplo, se o usuário tem o papel correto (como "admin", "moderador") para acessar determinados recursos ou funcionalidades.

Exemplo:

javascript
Copiar código
function authorize(roles) {
  return (req, res, next) => {
    const userRole = req.user.role;  // Assumindo que o role foi definido no processo de autenticação

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
}

// Middleware para permitir acesso apenas a administradores
app.use('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.send('Área de Admin');
});
4) Middleware de CORS (Cross-Origin Resource Sharing)
O CORS é utilizado quando a sua API precisa ser acessada de um domínio diferente do servidor. Com esse middleware, você pode configurar quais origens têm permissão para acessar a sua API.

Exemplo:

javascript
Copiar código
const cors = require('cors');
app.use(cors({
  origin: 'https://exemplodeAPI.com',  // Permite requisições apenas de algumaAPIaleatoria.com
  methods: ['GET', 'POST'],                 // Permite apenas os métodos GET e POST
  allowedHeaders: ['content-type']          // Permite apenas cabeçalhos específicos
}));
5) Middleware de Logging
Esse middleware é utilizado para registrar as requisições feitas ao servidor. Ele pode ser útil para depuração e análise de performance. O pacote morgan é muito popular para registrar logs de requisições HTTP.

Exemplo:

javascript
Copiar código
const morgan = require('morgan');
app.use(morgan('dev'));  // Usando o formato 'dev' para logs simplificados
6) Middleware de Redirecionamento
O middleware de redirecionamento é usado para redirecionar o usuário de uma URL para outra. Isso pode ser útil em casos como migração de rotas ou redirecionamento de URLs antigas para novas.

Exemplo:

javascript
Copiar código
app.use('/old-route', (req, res) => {
  res.redirect(301, '/new-route');  // Redireciona com status 301 (permanente)
});
Conclusão

Existem muitos outros tipos de middlewares que podem ser utilizados conforme as necessidades da aplicação. No entanto, os exemplos acima são os mais comuns e cobrem a maioria dos casos de uso em sistemas baseados no Express. O uso adequado dos middlewares é crucial para garantir o bom funcionamento e a segurança de suas APIs e aplicações.