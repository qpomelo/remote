import { getElectronBinding } from './get-electron-binding'

export const commonModuleNames = [
  'clipboard',
  'nativeImage',
  'shell',
];

export const browserModuleNames = [
  'app',
  'autoUpdater',
  'BaseWindow',
  'BrowserView',
  'BrowserWindow',
  'WebContentsView',
  'contentTracing',
  'crashReporter',
  'dialog',
  'globalShortcut',
  'ipcMain',
  'inAppPurchase',
  'Menu',
  'MenuItem',
  'nativeTheme',
  'net',
  'netLog',
  'MessageChannelMain',
  'Notification',
  'powerMonitor',
  'powerSaveBlocker',
  'protocol',
  'pushNotifications',
  'safeStorage',
  'screen',
  'session',
  'ShareMenu',
  'systemPreferences',
  'TopLevelWindow',
  'TouchBar',
  'Tray',
  'utilityProcess',
  'View',
  'webContents',
  'webFrameMain',
].concat(commonModuleNames);

const features = getElectronBinding('features');

if (features?.isDesktopCapturerEnabled?.() !== false) {
  browserModuleNames.push('desktopCapturer');
}

if (features?.isViewApiEnabled?.() !== false) {
  browserModuleNames.push('ImageView');
}
