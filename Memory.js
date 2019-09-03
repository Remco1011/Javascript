const cards = document.querySelectorAll('.Memory-kaart');

var gefliptekaart = false;
var lockBoard = false;
var kaart1, kaart2;

function flipkaart() {
  if (lockBoard) return;
  if (this === kaart1) return;

  this.classList.add('flip');

  if (!gefliptekaart) {
    gefliptekaart = true;
    kaart1 = this;

    return;
  }

  kaart2 = this;
  checkmatch();
}

function checkmatch() {
  var isMatch = kaart1.dataset.framework === kaart2.dataset.framework;

  isMatch ? disableCards() : geengedraaidekaarten();
}

function disableCards() {
  kaart1.removeEventListener('click', flipkaart);
  kaart2.removeEventListener('click', flipkaart);

  reset();
}

function geengedraaidekaarten() {
  lockBoard = true;

  setTimeout(() => {
    kaart1.classList.remove('flip');
    kaart2.classList.remove('flip');

    reset();
  }, 1500);
}

function reset() {
  [gefliptekaart, lockBoard] = [false, false];
  [kaart1, kaart2] = [null, null];
}

(function schuiven() {
  cards.forEach(card => {
    var randomPos = Math.floor(Math.random() * 21);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipkaart));
