import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Componente: Bloco isolado de HTML,CSS,JS o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado: Informações mantidas pelo componente (Imutabilidade)

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => { //método que será executado apenas 1 vez quando reendenizar a tela
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);//atribui a resposta da api para o array de devs
    }

    loadDevs();//chama o método para carregar os devs 
  }, []);

  async function handleAddDev(data) {
  
    const response = await api.post('/devs', data)

    setDevs([...devs,response.data]);//cria um novo array com os devs já existentes no array de devs + o dev criado
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit ={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => ( //percorre o array de devs e retorna cada item do array 
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;