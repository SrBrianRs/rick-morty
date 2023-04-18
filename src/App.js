import rickmortyimg from './img/rick-morty.png';
import rickmortylogo from './img/logo.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };
  
  console.log(characters);
  return (
    <div className="App" >
      <header className="App-header">

        <img src={rickmortylogo} alt="Rick & Morty" className="img-home" />

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <p>Brian Sanchez Robles</p>
              <p>s19004873
            </p>
            <img src={rickmortyimg} alt="Rick & Morty" className="img-home" />
            <span onClick={reqApi} class="btn btn-one">
              Personajes
            </span>
            <div class="box-2">
  
    
  
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;