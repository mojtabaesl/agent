import type { Application } from 'express';
import express from 'express';
import { createRouter } from './router.js';

export function createApp(): Application {
  const app = express();
  const router = createRouter();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/xray', router);

  return app;
}
