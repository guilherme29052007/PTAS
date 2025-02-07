--DESCRIAÇÃO--
esse é o projeto recuperativo do progeto final que tem como tema uma bibiloteca virtual. foi utilizado todas as requisições http (GET,POST,PUT e DELETE) no arquivo routes.js. o app.js inicia a API que pode ser rodada no browser, insomnia ou postman, recomendo os dois ultimos pois o browser so da pra testar o metodo get.


--COMO EXECUTAR--
para rodar o projeto primeiramente deve-se inserir a uri do mongodb no local indicado no app.js. apos isso deve-se digitar localhost:3000/"rota desejada" no browseer, insomnia ou postman

--EXPLICAÇÃO E EXEMPLOS--

-->GET
Na rota localhost:3000/ o servidor lista todos os itens/livros salvos no banco de dados.

Na rota localhost:3000/"ID de um livro" o servidor busca o item com o id fornecido.

-->POST
Na rota localhost:3000/registrar o servidor insere um arquivo no banco de dados com as informações fornecidas de um arquivo JSON no body da pagina

-->PUT
Na rota localhost:3000/alterar/"ID de um livro" o servidor realiza uma busca do id fornecido e atualiza o arquivo propietariodo id no banco de dados com as informações fornecidas de um arquivo JSON no body da pagina se o mesmo existir.

-->DELETE

Na rota localhost:3000/excluir/"ID de um livro" o servidor realiza uma busca do id fornecido e exclui do banco de dados o item propietario desse id.