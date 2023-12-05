import React from 'react';
import MenuNavigazione from './components/MenuNavigazione.js';
import GestioneUtenti from './components/GestioneUtenti.js';
import SelezionaUtente from './components/SelezionaUtente.js';

function Main() {
  return (
    <div>
      <MenuNavigazione />
      <GestioneUtenti />
      <SelezionaUtente />
    </div>
  );
}

export default Main;
