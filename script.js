const hh = document.querySelector('[data-hour-hand]');
const mh = document.querySelector('[data-min-hand]');
const sh = document.querySelector('[data-sec-hand]');

function setClock() {
  const d = new Date();

  const sr = d.getSeconds() / 60;
  const mr = (sr + d.getMinutes()) / 60;
  const hr = (mr + d.getHours()) / 12;

  setRotation(hh, hr);
  setRotation(mh, mr);
  setRotation(sh, sr);
}

function setRotation(e, r) {
  e.style.setProperty('--rotation', r * 360);
}

setInterval(setClock, 1000);


setClock();