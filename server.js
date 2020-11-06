const http = require ('http');
const { set } = require('./backend/app');
const app = require ('./backend/app')

const porta = process.env.PORT || 3000
app.set('port', porta);

const server = http.createServer (app);
//const server = http.createServer ((req, res) => {
  //  res.end("Fim da Operacao");
//});

server.listen (porta);