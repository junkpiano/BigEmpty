import { app, BrowserWindow } from "electron";
const path = require("path");

try {
  require("electron-reloader")(module);
} catch (_) {}

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
};

app.on("ready", createWindow);
