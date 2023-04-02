import * as dotenv from 'dotenv';

type Env = 'development' | 'production';

export interface Configs {
  port?: number;
  env?: Env;
}

function createConfigs(
  fallback: Configs = { port: 3001, env: 'development' },
): Configs {
  dotenv.config();

  const env: Env = (process.env.NODE_ENV as Env) ?? fallback?.env;
  const port: number = Number(process.env.PORT) ?? fallback?.port;
  process.env.NODE_ENV = env;

  return {
    env,
    port,
  };
}

export const configs = createConfigs();
