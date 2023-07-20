const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Tasks App',
        width: 800,
        height: 800
    });

    const starturl = url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL(starturl);
}

app.whenReady().then(createMainWindow);