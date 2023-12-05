import './style.css';
import React, { useState } from 'react';
import MenuNavigazione from './componensts/MenuNavigazione.js';
import GestioneUtenti from './componensts/GestioneUtenti.js';
import SelezionaUtente from './componensts/SelezionaUtente.js';
import SpeseUtente from './componensts/SpeseUtente.js';
import SpesePerPeriodo from './componensts/SpesePerPeriodo.js';
import AggiungiSpesa from './componensts/AggiungiSpesa.js';
import ConteggioSpesa from './componensts/ConteggioSpesa.js';
import ConteggioSpesaPeriodo from './componensts/ConteggioSpesaPeriodo.js';
import VisualizzaTutti from './componensts/VisualizzaTutti.js';

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

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {menuStack.length < 1 ? (<MenuNavigazione onClick={handleClick} />) : null}
      <div className="max-w-3xl mx-auto mt-8">
        {currentMenu === 'gestioneUtenti' && <GestioneUtenti onClick={handleClick} />}
        {currentMenu === 'visualizzaTutti' && <VisualizzaTutti onClick={handleClick} />}
        {currentMenu === 'selezionaUtente' && <SelezionaUtente onClick={handleClick} />}
        {currentMenu === 'speseUtente' && <SpeseUtente onClick={handleClick} />}
        {currentMenu === 'spesePerPeriodo' && <SpesePerPeriodo onClick={handleClick} />}
        {currentMenu === 'aggiungiSpesa' && <AggiungiSpesa onClick={handleClick} />}
        {currentMenu === 'conteggioSpesa' && <ConteggioSpesa onClick={handleClick} />}
        {currentMenu === 'conteggioSpesaPeriodo' && <ConteggioSpesaPeriodo onClick={handleClick} />}

        {/* Mostra un pulsante per tornare indietro se la pila ha più di un elemento */}
        {menuStack.length > 0 && <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleBack}>Torna Indietro</button>}
      </div>
    </div >
  );
}

export default Main;
