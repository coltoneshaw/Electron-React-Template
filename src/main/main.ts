// eslint-disable-next-line import/no-extraneous-dependencies
import {
  app, BrowserWindow, ipcMain, shell,
} from 'electron';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import installExtension, {
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

import preloadCheck from './precheck';

import { name } from '#/package.json';

const isDev = !app.isPackaged;
// eslint-disable-next-line import/no-mutable-exports
let win: BrowserWindow;

const createWindow = (): void => {
  win = new BrowserWindow({
    width: 1500,
    height: 1000,
    title: name,
    // icon: path.join(__dirname, '../assets/icons/icon.png'),
    webPreferences: {
      spellcheck: true,
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      // worldSafeExecuteJavaScript: true,
      // sandbox: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    // icon: appIcon

  });

  // TODO - Fix the menu export
  let loadURL = `file://${__dirname}/index.html`;
  if (isDev) {
    loadURL = 'http://localhost:9000';
  }

  win.loadURL(loadURL);
};

app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

if (isDev) {
  app.whenReady()
    .then(() => {
      installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS]);
      // .then((name) => console.log(`Added Extension:  ${name}`))
      // .catch((err) => console.log('An error occurred: ', err));
    });
}
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('open-external-link', (event, link) => {
  shell.openExternal(link);
});

ipcMain.handle(
  'preload-check',
  () => preloadCheck(),
);
