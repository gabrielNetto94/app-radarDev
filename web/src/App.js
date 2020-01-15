import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
//Componente: Bloco isolado de HTML,CSS,JS o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado: Informações mantidas pelo componente (Imutabilidade)



function App() {
  
  const [ latitude,setLatitude ] = useState('');
  const [ longitude, setLongitude] = useState('');

  useEffect( ()=>{
    navigator.geolocation.getCurrentPosition(//método para buscar informações da localização
      (position) =>{ //se deu certo retorna a position
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },(err) =>{//método callback com erro
        console.log(err);
      },{
        timeout: 30000,//timeout de 30s
      }
    );
  }, []);
  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias Utilizadas</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={event => setLatitude(event.target.value)}></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={event => setLongitude(event.target.value)}></input>
            </div>

          </div>

        <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/33572929?s=460&v=4" alt="Gabriel Netto"></img>
              <div className="user-info">
                <strong>Gabriel Netto</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso de sistemas de informação</p>
            <a href="https://github.com/gabrielNetto94/">Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/33572929?s=460&v=4" alt="Gabriel Netto"></img>
              <div className="user-info">
                <strong>Gabriel Netto</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso de sistemas de informação</p>
            <a href="https://github.com/gabrielNetto94/">Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/33572929?s=460&v=4" alt="Gabriel Netto"></img>
              <div className="user-info">
                <strong>Gabriel Netto</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso de sistemas de informação</p>
            <a href="https://github.com/gabrielNetto94/">Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
