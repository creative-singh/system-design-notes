const DatabaseConnection = (() => {
  let instance;

  function createInstance() {
    const db = { connection: "Connected to MongoDB" };
    return db;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2);       //true
console.log(db1.connection);    // "Connected to MongoDB"
