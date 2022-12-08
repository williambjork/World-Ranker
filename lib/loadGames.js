
export async function fetchGames() {
    
  
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2022-11-12,2023-10-30";
    const response = await fetch(url);
    const games = await response.json();
  
<<<<<<< HEAD
    return games
=======
    return data
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
  
  }

  export async function fetchTopGames() {
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=95,100";
    const response = await fetch(url);
    const games = await response.json();
  
<<<<<<< HEAD
    return games
=======
    return data
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
  }

  export async function fetchWorstGames() {
    const url =
    "https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&metacritic=1,35";
    const response = await fetch(url);
    const games = await response.json();
  
<<<<<<< HEAD
    return games
=======
    return data
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
  }

 