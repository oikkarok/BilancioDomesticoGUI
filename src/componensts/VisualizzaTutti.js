import React, { useState, useEffect } from 'react';

const VisualizzaTutti = () => {
    const [utenti, setUtenti] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/utenti')
            .then(response => response.json())
            .then(data => setUtenti(data))
            .catch(error => console.error('Errore durante la richiesta degli utenti:', error));
    });

    return (
        <div>
            <h2>Lista Utenti</h2>
            {utenti.map((utente) => (
                <div key={utente.id}>
                    {utente.nome} - {utente.cognome}
                </div>
            ))}
        </div>
    );
}

export default VisualizzaTutti;