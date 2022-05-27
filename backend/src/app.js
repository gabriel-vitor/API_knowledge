//const express = require('express');
import express from 'express'
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
    
    //iniciar a variavel "app"
    //o constructor será aquilo que será chamado assim que a 
    //classe for chamada
    constructor() {
        // const app = express();
        this.server = express();

        this.database();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
    }

    database() {
        mongoose.connect("mongodb+srv://lince:<password>@cluster0.jrcvq.mongodb.net/?retryWrites=true&w=majority", 
        { useNewUrlParser: true, useUnifiedTopology: true }
        );
    }
    
    routes() {
        this.server.use(routes);
    };
}

// para usar import/export é necessario uma biblioteca (sucrase)
//e criar um arquivo nodemon.json

export default new App().server;