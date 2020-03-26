/**
 * index.js
 * Entry file for express server
 */

// Node Modules
import express from 'express';
import path from 'path';

// Constants
import APP from 'app';

let PORT;
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  PORT = APP.development.port;
} else {
  PORT = APP.production.port;
}

const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, APP.express.static)),
);
app.use(express.static(path.join(__dirname, APP.express.static)));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.info(`Listening on ${PORT}`));
