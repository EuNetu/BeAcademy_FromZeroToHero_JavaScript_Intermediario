//Async/Await
import fetch from "node-fetch";

const firstUser = async (user) => {
  let response = await fetch(`https://api.github.com/users/${user}`);
  let resultJSON = await response.json();
  let bio = await resultJSON.bio;
  console.log(bio);
};

firstUser("EuNetu");

//Try/Catch
async function user() {
  try {
    let response = await fetch(`https://api.github.com/users/${user}`);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
    throw new Error("Erro no fetch");
  } finally {
    console.log("Acabou");
  }
}

user();
