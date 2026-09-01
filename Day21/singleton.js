class Singleton {
  static instance = null;

  constructor() {
    if (Singleton.instance) {
      throw new Error(
        `Instance already exists.\nUse Singleton.getInstance() instead of new.`,
      );
    }

    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const s0 = new Singleton(); //object will be created for the first time ,if again it will throw an error
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(s0 === s2);
try {
  const newCheck = new Singleton(); //error
} catch (error) {
  console.log(error.message);
}
