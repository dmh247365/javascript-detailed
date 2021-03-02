function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const userFunctionStore = {
  increment: function() { this.score++; },
  login: function() { console.log("Logged in"); }
};

const user1 = userCreator("Dave", 5);
const user2 = userCreator("Fred", 2);
user1.increment();
console.log(user1);