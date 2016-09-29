const { ipcRenderer } = require('electron');

const closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function() {
  ipcRenderer.send('close-settings-window');
});
