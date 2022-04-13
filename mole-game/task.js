const holeGame = window.document.getElementsByClassName('hole-game')[0];
const dead = window.document.getElementById('dead');
console.log(holeGame)
let score = 0

for (let hole of holeGame.children) {
  hole.onclick = () => {
    if (hole.className.includes('hole_has-mole')) {
      dead.textContent++
    } else {
      alert(`Игра завершена! Ваш счет: ${dead.textContent}`);
      window.document.location.reload()
    }
  }
}