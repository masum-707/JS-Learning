// basic
// class Database {
//   static instance = null;

//   constructor() {
//     console.log("Database created");
//   }

//   static getInstance() {
//     if (Database.instance === null) {
//       Database.instance = new Database();
//     }

//     return Database.instance;
//   }
// }

class Database {
  static instance = null;

  constructor(token) {
    if (token !== Database) {
      throw new Error("Use Database.getInstance()");
    }

    console.log("Database created");
  }

  static getInstance() {
    if (Database.instance === null) {
      Database.instance = new Database(Database);
    }

    return Database.instance;
  }
}
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2);

try {
  const db3 = new Database();
} catch (error) {
  console.log(error.message);
}
