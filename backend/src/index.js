const express = require("express");
const cors = require('cors')
const routes = require("./routes");

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);
//console.log('servidor rodando em http://localhost:3333...')

/**
 * método GET: Busca uma informação do backend
 * método POST: Cria uma nova informação no backend
 * método PUT: Altera uma informação no backend
 * método DELETE: Deleta uma informação do backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, paginação...)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */
