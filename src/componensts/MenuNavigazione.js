// Importa lo stile CSS
import './../style.css';
import React from 'react';

const MenuNavigazione = ({ onClick }) => {
  return (
    <div>
      {/* Applica classi di utilità di Tailwind ai bottoni */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onClick('gestioneUtenti')}>
        Menu Utenti
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => onClick('bilancio')}>
        Menu Bilancio
      </button>
    </div>
  );
}

export default MenuNavigazione;
