//Herança
class Candidate{
  constructor(firstName, surName, cpf){
    this.firstName = firstName;
    this.surName = surName;
    this.cpf = cpf;
  }
}

class Masc extends Candidate{
  constructor(firstName, surName, cpf, reservista){
    super(firstName, surName, cpf);
    this.reservista = reservista;
  }
}

const firstCandidate = new Masc('Camilla', 'Falcão', '99999999999', false);
const segundCandidate = new Candidate('Dante', 'Falcão', '00000000000');

console.log(firstCandidate)
console.log(segundCandidate)
