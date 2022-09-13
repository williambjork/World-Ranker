export default { 
  fetchGames: {

    fetch('https://api.rawg.io/api/games?key=f6d4a95732b6497e929238e5994121e6&dates=2019-09-01,2019-09-30&platforms=18,1,7')
    .then(response => response.json())
      .then(response => setGames(response))
      .catch(err => console.error(err));
    
    }
  }