// Main.js
import React, { useState } from 'react';
import { List, ListItem, Button } from '@mui/material';
import MenuNavigazione from './componensts/MenuNavigazione.js';
import GestioneUtenti from './componensts/GestioneUtenti.js';
import VisualizzaTutti from './componensts/VisualizzaTutti.js';
import SelezionaUtente from './componensts/SelezionaUtente.js';
import SpeseUtente from './componensts/SpeseUtente.js';
import SpesePerPeriodo from './componensts/SpesePerPeriodo.js';
import AggiungiSpesa from './componensts/AggiungiSpesa.js';
import ConteggioSpesa from './componensts/ConteggioSpesa.js';
import ConteggioSpesaPeriodo from './componensts/ConteggioSpesaPeriodo.js';
import TopAppBar from './componensts/TopAppBar';

function Main() {
  const [menuStack, setMenuStack] = useState([]); // Stato per la navigazione

  const handleClick = (menuItem) => {
    // Aggiungi il nuovo menu alla pila di navigazione
    setMenuStack((prevStack) => [...prevStack, menuItem]);
  };

  const handleBack = () => {
    // Rimuovi l'ultimo menu dalla pila di navigazione
    setMenuStack((prevStack) => prevStack.slice(0, -1));
  };

  // Ottieni il menu corrente dalla cima della pila
  const currentMenu = menuStack.length > 0 ? menuStack[menuStack.length - 1] : '';

  const topAppBar = <TopAppBar onBackClick={handleBack} title={currentMenu} />;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {menuStack.length < 1 ? (
        <div>
          <MenuNavigazione onClick={handleClick} />
        </div>
      ) : null}
      <div className="max-w-3xl mx-auto mt-8">
        {currentMenu === 'gestioneUtenti' && <GestioneUtenti onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'visualizzaTutti' && <VisualizzaTutti onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'selezionaUtente' && <SelezionaUtente onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'speseUtente' && <SpeseUtente onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'spesePerPeriodo' && <SpesePerPeriodo onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'aggiungiSpesa' && <AggiungiSpesa onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'conteggioSpesa' && <ConteggioSpesa onClick={handleClick} topAppBar={topAppBar} />}
        {currentMenu === 'conteggioSpesaPeriodo' && <ConteggioSpesaPeriodo onClick={handleClick} topAppBar={topAppBar} />}

        {/* Mostra un pulsante per tornare indietro se la pila ha più di un elemento 
        {menuStack.length > 0 && (
          <List>
            <ListItem>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleBack}>
                Torna Indietro
              </Button>
            </ListItem>
          </List>
        )}*/}
      </div>
    </div>
  );
}

export default Main;
