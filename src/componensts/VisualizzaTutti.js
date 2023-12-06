import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Person, Payment } from '@mui/icons-material';
import TopAppBar from './TopAppBar';

const VisualizzaTutti = ({ onBackClick }) => {
    const [utenti, setUtenti] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/utenti')
            .then(response => response.json())
            .then(data => setUtenti(data))
            .catch(error => console.error('Errore durante la richiesta degli utenti:', error));
    }, []);

    return (
        <div>
            <TopAppBar title="Lista Utenti" onBackClick={onBackClick} />
            {utenti.map((utente) => (
                <Card key={utente.id} variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <Person /> ID: {utente.id}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Nome: {utente.nome}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Cognome: {utente.cognome}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Payment /> Spese:
                            {utente.spese.map(spesa => (
                                <div key={spesa.id}>
                                    Tipo: {spesa.tipo} - Importo: {spesa.importo} - Data: {spesa.data}
                                </div>
                            ))}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default VisualizzaTutti;
