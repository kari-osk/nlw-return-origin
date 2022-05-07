import express from 'express';
import { routes } from './routes';
import cors from 'cors';

//GET buscar info
//Post = cadastrar info
//Put  = atualizar info de uma entidade
//PATCH = atualizar info unica de uma entidade 
//Delete = deletar info
//Cors: segurança para proteger o back, quais endereço de front podem acessar o back

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});


