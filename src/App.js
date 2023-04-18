import rickmortyimg from './img/rick-morty.png';
import rickmortylogo from './img/logo.png';
import credencial from './img/credencial.jpeg'
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
      <p>Brian Sanchez Robles S19004873</p>
              
            
        <img src={rickmortylogo} alt="Rick & Morty" className="img-home" />

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          
            <img src={rickmortyimg} alt="Rick & Morty" className="img-home" />
            
            <span onClick={reqApi} class="btn btn-one">
              Personajes
            </span>

            

            
            <div className='App-crede' >
            <img src={credencial} float="right" alt="Credencial" className="img-home" />
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;