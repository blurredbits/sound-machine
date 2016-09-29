const { ipcRenderer } = require('electron');

const soundButtons = document.querySelectorAll('.button-sound');

for (let soundButton of soundButtons) {
  let soundName = soundButton.attributes['data-sound'].value;
  prepareButton(soundButton, soundName);
}

function prepareButton(buttonEl, soundName) {
  buttonEl.querySelector('span').style.backgroundImage = `url("img/icons/${soundName}.png`;

  let audio = new Audio(`${__dirname}/wav/${soundName}.wav`);
  buttonEl.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
}

const closeEl = document.querySelector('.close');
const settingsEl = document.querySelector('.settings');

closeEl.addEventListener('click', () => {
  ipcRenderer.send('close-main-window');
});

settingsEl.addEventListener('click', () => {
  ipcRenderer.send('open-settings-window');
});
