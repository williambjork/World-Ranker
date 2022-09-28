
export async function fetchGames() {
    
  
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2020-09-12,2022-07-30";
    const response = await fetch(url);
    const games = await response.json();
  
    return games
  
  }

  export async function fetchTopGames() {
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=95,100";
    const response = await fetch(url);
    const games = await response.json();
  
    return games
  }

  export async function fetchWorstGames() {
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=1,35";
    const response = await fetch(url);
    const games = await response.json();
  
    return games
  }

 