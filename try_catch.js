//Try/catch
class customError {
  constructor(message) {
    this.message = message;
  }
}

function function1() {
  try {
    console.log("function no try");
  } catch (e) {
    throw new customError("Erro na function");
  }
}

function1()

function function2() {
  console.log("function2 executou");
  try {
    console.log("function2 no try");
  } catch (e) {
    console.error("Erro na function", e);
    throw new Error(e);
  }
}

function main() {
  console.log("main executou");
  try {
    function1()
    function2()
  } catch (e) {
    console.error("Erro na main --->", e);
  }
}
