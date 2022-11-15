import path from 'node:path';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Connect mongo');

        const app = express() as Express;
        const port = 3001 as number;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => console.log(`Server is running on http:://localhost:${port}`));

    })
    .catch(() => console.log('Connect error'));
