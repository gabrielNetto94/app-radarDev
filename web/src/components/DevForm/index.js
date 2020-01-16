import React, { useState, useEffect } from 'react';


function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [techs, setTechs] = useState('');
    const [github_username, setGithub_username] = useState('');

    useEffect(() => { //método que será executado apenas 1 vez quando reendenizar a tela
        navigator.geolocation.getCurrentPosition(//método para buscar informações da localização
            (position) => { //se deu certo retorna a position
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);

            }, (err) => {//método callback com erro
                console.log(err);
            }, {
            timeout: 30000,//timeout de 30s
        }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithub_username('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={event => setGithub_username(event.target.value)}>
                </input>
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias Utilizadas</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={event => setTechs(event.target.value)}>
                </input>
            </div>

            <div className="input-group">

                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={event => setLatitude(event.target.value)}>
                    </input>
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={event => setLongitude(event.target.value)}>
                    </input>
                </div>

            </div>

            <button type="submit">Salvar</button>

        </form>
    )
}

export default DevForm;