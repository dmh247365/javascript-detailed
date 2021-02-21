
console.log('Before');
getUser(1, (user) => {
  console.log('User ', user);
});
console.log('After');
add(1,2);

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: 'Elvis'});
  }, 2000)
}

function add(a, b) {
  return console.log(a+b);
}