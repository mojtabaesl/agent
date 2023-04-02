import { configs } from './configs/index.js';
import http from 'node:http';
import { createApp } from './app.js';

const app = createApp();
const httpServer = http.createServer(app);

httpServer.listen(configs.port, () => {
  console.log(`⚡️[server]: Server is running at port ${String(configs.port)}`);
});
