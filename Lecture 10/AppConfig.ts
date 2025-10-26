class AppConfig {
  constructor() {
    // Prevent multiple instances
    if (AppConfig._instance) {
      return AppConfig._instance;
    }

    // Example configuration data
    this.settings = {
      appName: "My Awesome App",
      version: "1.0.0",
    };

    // Save instance
    AppConfig._instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}

// --- Usage ---
const config1 = new AppConfig();
const config2 = new AppConfig();

config1.set("theme", "dark");

console.log(config2.get("theme")); // "dark"
console.log(config1 === config2);  // true — both point to same instance
