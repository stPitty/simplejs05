const span = window.document.getElementById('timer');
const download = window.document.getElementById('download');

download.href = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'

let seconds = span.textContent;
span.textContent = setDate(seconds)

function setDate(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  while (seconds > 0) {
    await sleep(1000);
    seconds--;
    span.textContent = setDate(seconds)
  }
  alert('Вы победили в конкурсе')
  download.click()
})();

