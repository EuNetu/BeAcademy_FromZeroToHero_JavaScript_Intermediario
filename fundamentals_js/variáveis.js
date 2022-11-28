// a partir do ECMA6 o "var" ficou em desuso
// para armazenhamento de valoreres utilizar o const e caso for variar utilizar o let

let x = 21;
{
  let y = 19; //Somente em escopo local

  console.log(x);
  console.log(y);
}
x = 25;
console.log(x);

//  console.log(y) ERROR

const word = "World";

console.log(`Hello ${word}`);

const myAge = 21;
const ageOfMyGirlFriend = 19;

console.log(
  `O somatorio da minha idade com a da minha namorada é igual a: ${
    myAge + ageOfMyGirlFriend
  }`
);
