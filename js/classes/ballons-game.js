class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

// Write function below
const balloonAttack = (p1, p2) => {
    p1.balloonCount = p1.balloonCount - 10 * p2.hitsPerMinute;
    p2.balloonCount = p2.balloonCount - 10 * p1.hitsPerMinute;
    p1.status();
    p2.status();
    if (p1.balloonCount === p2.balloonCount) return 'Tie';
    return p1.balloonCount > p2.balloonCount ? p1.name : p2.name;
}

console.log(balloonAttack(p1, p2));