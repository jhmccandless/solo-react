export function getChuck() {
  return fetch("https://api.chucknorris.io/jokes/random").then((data) =>
    data.json()
  );
}
