class Logger {
  constructor() {
    if (Logger.instance) return Logger.instance;
    Logger.instance = this;
  }

  log(message) {
    console.log(`[LOG] ${message}`);
  }
}

const log1 = new Logger();
const log2 = new Logger();

log1.log("Server started!");
log2.log("User logged in.");

console.log(log1 === log2); // true
