const express = require('express');
const cors = require('cors');

//Utilizamos ./routes ao invés de routes para diferenciar um arquivo de um pacote
const routes = require('./routes');
const app = express();

//Dessa forma todas as aplicações front end podem acessar o backenda
app.use(cors());

//Em produção devemos digitar quem pode acessar a aplicação 
//app.use(cors({
//     origin: 'http://meuapp.com'
// }));

//Especificar que o retorno será de um json
app.use(express.json());
//Esse comando deve ser abaixo do comando app.use(express.json());
app.use(routes);


app.listen(3333);