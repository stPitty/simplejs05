const holeGame = window.document.getElementsByClassName('hole-game')[0];
const dead = window.document.getElementById('dead');
console.log(holeGame)

for (let hole of holeGame.children) {
  hole.onclick = () => {
    if (hole.className.includes('hole_has-mole')) {
      dead.textContent++
    } else {
      alert(`Игра завершена! Ваш счет: ${dead.textContent}`);
      dead.textContent = 0;
    }
  }
}