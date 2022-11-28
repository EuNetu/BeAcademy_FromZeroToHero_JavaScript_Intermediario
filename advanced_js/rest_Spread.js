//rest parameters
function getSum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(getSum(2, 6, 7, 8, 4));

//spread operator
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6];

console.log(arr2);

//marge array
const a = [1, 2, 3];
const b = [2, 3, 4];

const mergeArray = [0, ...a, ...b];
console.log(mergeArray);

//Destructuring
const car = {
  mark: "BMW",
  year: 2001,
  ports: 2,
};

// const mark = car.mark
// const year = car.year

const { mark, year, ports } = car;

console.log(
  `O carro da ${mark} teve seu melhor carro de ${ports} portas no ano de ${year}.`
);

const client = {
  name: "Camilla",
  purchases: {
    fingerprints: {
      books: ["Harry Potter", "Livro de Ouro da Mitologia Graga"],
      films: ["A volta dos que não foram", "As tranças do rei careca"],
    },
  },
  physical: {
    notebooks: ["caderno"],
  },
};

// console.log(client.purchases.fingerprints.books)

const { books, films } = client.purchases.fingerprints;

// console.log(books)

//destructuring arrays
const fruits = ["Mamão", "Bananar", "Morango"];

// const firstFruit = fruits[0]
// const secondFruit = fruits[1]
// const thirdFruit = fruits[2]

//Com destructuring
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(secondFruit);
