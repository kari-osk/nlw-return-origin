"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
//GET buscar info
//Post = cadastrar info
//Put  = atualizar info de uma entidade
//PATCH = atualizar info unica de uma entidade 
//Delete = deletar info
//Cors: segurança para proteger o back, quais endereço de front podem acessar o back
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log('HTTP server running!');
});
