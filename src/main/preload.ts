import { contextBridge, ipcRenderer } from 'electron';

async function setupContextBridge() {
  contextBridge.exposeInMainWorld('mainPreload', {
    preload: {
      test: () => console.log('hello from the preload'),
    },
  });
}

async function preloadCheck() {
  await ipcRenderer.invoke('preload-check');
}

preloadCheck();
setupContextBridge();

export default setupContextBridge;
