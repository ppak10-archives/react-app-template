/**
 * index.js
 * Entry file for express server
 */

// Node Modules
import express from 'express';

// Constants
import APP from 'app';
const PORT = APP[process.env.NODE_ENV.trim()].port;

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.info(`Listening on ${PORT}`));
