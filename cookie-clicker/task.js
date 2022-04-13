const cookie = window.document.getElementById('cookie');
const clickerStatus = window.document.getElementsByClassName('clicker__status')[0];
const clickSpeed = window.document.createElement('div');
clickSpeed.innerHTML = 'Скорость клика: <span id="click__speed"></span>';
clickerStatus.append(clickSpeed);
const speed = window.document.getElementById('click__speed');
let date = new Date();

cookie.onclick = () => {
  cookie.width = cookie.width > 200 ? 200 : 250;
  let counter = window.document.getElementById('clicker__counter');
  counter.textContent++
  speed.textContent = ((new Date() - date) / 1000).toFixed(2);
  date = new Date();
}

