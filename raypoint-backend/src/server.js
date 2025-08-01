import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import handleSocket from './sockets/index.js';
import { PORT } from './config/index.js';

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    },
});

handleSocket(io);

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});