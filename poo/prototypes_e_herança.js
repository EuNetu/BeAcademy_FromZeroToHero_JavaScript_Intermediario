//Prototypes
function User(userName, password, age) {
  this.userName = userName;
  this.password = password;
  this.age = age;
}

// const camilla = new User('Milla', '2512', 19);
// console.log(camilla.prototype)
const user = "Sophia";

const tv = {
  resolution: "4k",
  smartTV: true,
  year: 2020,
  especificacoes: (price) =>
    console.log(
      `Com uma resolução de ${tv.resolution} e sendo uma tv de ${
        tv.year
      }, por apenas ${price != null ? price : "poucos"} reais.`
    ),
};

// tv.especificacoes()
// tv.especificacoes(3800)

const lg = {
  mark: "LG",
};
const samsung = {
  mark: "Samsung",
};

Object.setPrototypeOf(lg, tv);
Object.setPrototypeOf(samsung, tv);

lg.especificacoes(2800);
samsung.especificacoes();
