const span = window.document.getElementById('timer');
const download = window.document.getElementById('download');

download.href = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'

let seconds = span.textContent - 58;
span.textContent = setDate(seconds)

function setDate(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}

setInterval(() => {
  if (seconds > 0) {
    seconds--;
    span.textContent = setDate(seconds);
  } else if (seconds === 0) {
    seconds = -1;
    alert('Вы победили в конкурсе');
    download.click();
  }
}, 1000);

