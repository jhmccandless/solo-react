export async function getChuck() {
  return await fetch("https://api.chucknorris.io/jokes/random").then((data) =>
    data.json()
  );
}
