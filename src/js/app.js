import '../scss/app.scss';

window.addEventListener('DOMContentLoaded', () => {
  // This block will be executed once the page is loaded and ready

  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const pokeDiv = document.getElementsByClassName('message-body');
  const ul = document.querySelector('ul');

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function toJSON(response) {
    return response.json();
  }

  const fetchPokemon = () => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
    fetch(url)
      .then(checkStatus)
      .then(toJSON)
      .then((data) => {
        console.log(data);
        const pokemon = [];
        for (let i = 0; i < data.results.length; i++) {
          pokemon.push(data.results[i].name);
        }

        pokemon.map((pokeman) => {
          let li = document.createElement('li');
          li.textContent = pokeman;
          ul.appendChild(li);
        });
        console.log(pokemon);
      });
  };

  fetchPokemon();
});
