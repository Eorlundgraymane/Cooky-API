import express from 'express';
import bodyParser from 'body-parser';
import masterRouter from './api/routers/masterRouter.js';
import database from './backend/database/sequelizeServer.js';
import relation from './backend/models/relation.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(masterRouter);

database.sync().then(() => {
    app.listen(PORT, (req, res) => {
        console.log("API is Online!");
    });
})
