const { ipcRenderer } = require('electron');

const soundButtons = document.querySelectorAll('.button-sound');

for (var i = 0; i < soundButtons.length; i++) {
  var soundButton = soundButtons[i];
  var soundName = soundButton.attributes['data-sound'].value;

  prepareButton(soundButton, soundName);
}

function prepareButton(buttonEl, soundName) {
  buttonEl.querySelector('span').style.backgroundImage = `url("img/icons/${soundName}.png`;

  let audio = new Audio(`${__dirname}/wav/${soundName}.wav`);
  buttonEl.addEventListener('click', function() {
    audio.currentTime = 0;
    audio.play();
  });
}

const closeEl = document.querySelector('.close');
const settingsEl = document.querySelector('.settings');


closeEl.addEventListener('click', function() {
  ipcRenderer.send('close-main-window');
});

settingsEl.addEventListener('click', function() {
  ipcRenderer.send('open-settings-window');
});
