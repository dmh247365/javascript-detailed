console.log('Before');
getUser(1, (user) => {
  console.log('User ', user);
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: 'Elvis'});
  }, 2000)
}

