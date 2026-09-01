class Source {
  constructor() {
    this.observers = [];
    this.data = "coming.....";
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  addData(data) {
    this.data = data;
    this.notify();
  }
  notify() {
    for (const observer of this.observers) {
      observer.showUpdate(this.data);
    }
  }
}

class Follower {
  constructor(name) {
    this.name = name;
  }
  showUpdate(data = "Coming....") {
    console.log(`Hello Mr. ${this.name} Latest update is, ${data}`);
  }
}

const s1 = new Source();
const follower1 = new Follower("Abir");
const follower2 = new Follower("Masum");
const follower3 = new Follower("Salman");

s1.addObserver(follower1);
s1.addObserver(follower2);

s1.addData(
  `upcoming load shedding time 10.00 PM.\nDuration (More than two hours)\n`,
);

s1.addData(`upcoming load shedding time 1.00 AM.\nDuration (One Hour)\n`);
s1.addObserver(follower3);
follower3.showUpdate();
