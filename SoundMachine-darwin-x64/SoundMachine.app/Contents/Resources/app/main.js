const { app, ipcMain, BrowserWindow } = require('electron');
let settingsWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    frame: false,
    height: 700,
    resizable: false,
    width: 368
  });

  mainWindow.webContents.loadURL(`file://${__dirname}/app/index.html`);
});

ipcMain.on('close-main-window', function() {
  app.quit();
});

ipcMain.on('open-settings-window', function() {
  if (settingsWindow) {
    return;
  }

  settingsWindow = new BrowserWindow({
    frame: false,
    height: 200,
    resizable: false,
    width: 200
  });

  settingsWindow.loadURL(`file://${__dirname}/app/settings.html`);

  settingsWindow.on('closed', function() {
    settingsWindow = null;
  });
})

ipcMain.on('close-settings-window', function() {
  if (settingsWindow) {
    settingsWindow.close();
  }
})
