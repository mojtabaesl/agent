import type { IRouter } from 'express';
import { Router } from 'express';

export function createRouter(): IRouter {
  const router = Router();

  // add user
  // delete user

  // add inbound
  // update inbound
  // delete inbound

  // add outbound
  // delete outbound
  // update outbound

  // system stats
  // user stats

  router.post('/user', (_, res) => {
    res.json({ message: 'hello from server' });
  });

  return router;
}
