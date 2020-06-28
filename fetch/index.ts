const res = await fetch("https://swapi.dev/api/films/2/");
const data = await res.json();

console.log(data);
