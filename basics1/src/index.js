import { greet } from "./utils.js";

const user = {
  name: 'Chethan',
  preferences: {
    theme: 'dark'
  }
};

// Modern syntax
console.log(`User Theme: ${user?.preferences?.theme}`);
greet(user.name);