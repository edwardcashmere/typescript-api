import express from 'express';
import http from 'http';
import logging from './config/logging';
import config from './config/config';
import sampleRoute from './routes/sample';

const NAMESPACE = 'Server';
const app = express();

/** log the request */
app.use((req, res, next) => {
    logging.info(
        NAMESPACE,
        `METHOD - [${req.method}], URL - [${req.url}], IP -[${req.socket.remoteAddress}]`
    );

    res.on('finish', () => {
        logging.info(
            NAMESPACE,
            `METHOD - [${req.method}], URL - [${req.url}], IP -[${req.socket.remoteAddress}, STATUS - [${req.statusCode}]]`
        );
    });
    next();
});

/** parse the request */
app.use(express.json());

/** rules for API's */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept , Authorization'
    );
    if (req.method == 'option') {
        res.header('Access-Control-Allow-Methods', 'GET POST PATCH DELETE PUT');
        return res.status(200).json({});
    }
    next();
});

/** routes */
app.use('/sample', sampleRoute);

/** error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({ message: error.message });
});

const server = http.createServer(app);

app.listen(config.server.port, () =>
    logging.info(NAMESPACE, `server running on ${config.server.hostname}: ${config.server.port}`)
);
