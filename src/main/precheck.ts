import log from 'electron-log';
// eslint-disable-next-line import/no-extraneous-dependencies
import { app } from 'electron';

const appDataPath = app.getPath('userData');

export default async function preloadCheck() {
  log.debug('Preload Check successful');
  log.debug(`App data path - ${appDataPath}`);
}
