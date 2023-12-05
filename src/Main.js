import React, { useState } from 'react';
import MenuNavigazione from './componensts/MenuNavigazione.js';
import GestioneUtenti from './componensts/GestioneUtenti.js';
import SelezionaUtente from './componensts/SelezionaUtente.js';
import SpeseUtente from './componensts/SpeseUtente.js'; 
import SpesePerPeriodo from './componensts/SpesePerPeriodo.js'; 
import AggiungiSpesa from './componensts/AggiungiSpesa.js'; 
import ConteggioSpesa from './componensts/ConteggioSpesa.js'; 
import ConteggioSpesaPeriodo from './componensts/ConteggioSpesaPeriodo.js'; 

function Main() {
  const [menu, setMenu] = useState('');
  const [utenti, setUtenti] = useState([]);

  const handleClick = (menuItem) => {
    setMenu(menuItem);

    // Pulisci la lista di utenti quando cambi menu
    if (menuItem !== 'selezionaUtente') {
      setUtenti([]);
    }
  };

  return (
    <div>
      <MenuNavigazione onClick={handleClick} />
      
      {menu === 'gestioneUtenti' && (
        <GestioneUtenti onClick={handleClick} />
      )}

      {menu === 'selezionaUtente' && (
        <SelezionaUtente onClick={handleClick} />
      )}

      {menu === 'speseUtente' && (
        <SpeseUtente onClick={handleClick} />
      )}

      {menu === 'spesePerPeriodo' && (
        <SpesePerPeriodo onClick={handleClick} />
      )}

      {menu === 'aggiungiSpesa' && (
        <AggiungiSpesa onClick={handleClick} />
      )}

      {menu === 'conteggioSpesa' && (
        <ConteggioSpesa onClick={handleClick} />
      )}

      {menu === 'conteggioSpesaPeriodo' && (
        <ConteggioSpesaPeriodo onClick={handleClick} />
      )}
    </div>
  );
}

export default Main;
