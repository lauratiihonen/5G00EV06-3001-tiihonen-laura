import fetch from "node-fetch";
import readlineSync from "readline-sync";

//var id = readlineSync.question(`Give id: `);

const fetchTitle = async (id) => {
  const response = await fetch("https://swapi.dev/api/people/" + id + "/");
  const data = await response.json();
  console.log("Name: " + data.name);
  return Promise.all(data.films.map((url) => fetch(url))).then((response) =>
    Promise.all(response.map((resp) => resp.json())).then((jsons) =>
      Promise.all(jsons.map((j) => j.title))
    )
  );
};

// fetchTitle(id).then((title) => console.log(title));

const fetchAll = async (li) => {
  return Promise.all(li.map((id) => fetchTitle(id)));
};

fetchAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then((data) => console.log(data));
