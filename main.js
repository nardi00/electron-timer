const { app, BrowserWindow } = require('electron')

function createWindow() {

    const win = new BrowserWindow({
        height: 150, 
        width: 300,
        frame: false, 
        resizable: false,
        icon: './timer.png',
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true, 'screen')
}

app.whenReady().then(createWindow)