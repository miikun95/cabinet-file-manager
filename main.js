const { app, BrowserWindow, dialog, Menu, shell } = require('electron');
const path = require('path');

if (process.platform !== 'win32') {
  app.on('ready', () => {
    app.quit();
  });
}

Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: 'ファイル',
    submenu: [
      {
        label: '終了',
        click: () => app.quit()
      }
    ]
  },
  {
    label: 'ヘルプ',
    submenu: [
     {
        label: 'ホームページを開く',
        click: () => shell.openExternal('https://miikun95.github.io/')
      },
      {
        label: '設定',
        click: () => {

        }
      },
      {
        label: 'キャビネットファイルマネージャーについて',
        click: () => {

        }
      }
    ]
  }
]));

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    icon: path.join(__dirname, 'resources/icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contentIsolation: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
}).catch();

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
