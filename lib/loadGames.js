export async function fetchGames() {
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2020-09-12,2022-07-30";
    const response = await fetch(url);
    const data = await response.json();
  
    return data
  }