//Fução de CallBack
function hello(name) {
  console.log(name);
}

function helloUser(n) {
  n("Neto");
}

//helloUser(hello)

const callback = (e) => alert("Foi clicado");

window.addEventListener("click", callback);
