//Promises

// setTimeout(() => console.log("setTimeout"), 5000);

function show() {
  setTimeout(() => console.log("setTimeout mais rápido"), 2000);
  console.log("function show")
}

// show()

const minhaPromise = new Promise((resolve, reject) => {
  let n = 9;
  n > 10? resolve(): reject();
});

// minhaPromise.then(result => console.log("Deu Certo")).catch(err => console.log("Deu Ruim")).finally(() => console.log("Finaly"))

//fetch
import fetch from 'node-fetch';

function firstUser(userId) {
  let response = fetch(`https://api.github.com/users/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data));
}

firstUser('EuNetu')