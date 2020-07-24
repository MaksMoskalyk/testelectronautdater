'use strict';

/* eslint-disable no-path-concat, import/no-unresolved */

const { app, BrowserWindow } = require('electron');
const updater                = require('electron-simple-updater');


updater.init({
  checkUpdateOnStart: true,
  autoDownload: false,
  url: "https://github.com/MaksMoskalyk/testelectronautdater/blob/master/squirrel/updates.json"
});

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
      }
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
