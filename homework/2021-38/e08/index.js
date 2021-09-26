import fetch from "node-fetch";
import readlineSync from "readline-sync";

var id = readlineSync.question(`Give id: `);

const fetchTitle = async (id) => {
  const response = await fetch("https://swapi.dev/api/people/" + id + "/");
  const data = await response.json();
  console.log("Name: " + data.name);
  const response2 = await fetch(data.films[0]);
  const data2 = await response2.json();
  var film = "First film title: " + data2.title;
  return film;
};
fetchTitle(id).then((title) => console.log(title));
