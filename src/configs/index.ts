import antd from './antd';
import app from './app';

type Configs = {
  [key: string]: Object | null,
};

const allConfigs = { antd, app };

/**
 * ex:
 * config('app.environment')
 *
 * @param {string} chain
 * @param {any} defaultValue
 */
function config(chain: string, defaultValue?: any) {
  if (chain && typeof chain === 'string') {
    return chain
      .split('.')
      .reduce((acc: Configs, cur: string) => (acc ? acc[cur] : defaultValue || undefined), allConfigs);
  }

  return defaultValue;
}

export default config;
