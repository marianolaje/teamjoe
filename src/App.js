import React, {Fragment, useState} from 'react';
import Inicio from './components/Inicio'
import Batalla from './components/Batalla'

function App() {
  const [champ, setChamp] = useState(0)
  const [champEnemigo, setChampEnemigo] = useState(0)
  const [bool, setBool] = useState(true)

  return (
    <Fragment>
      {bool
      ?
      <Inicio
        setChamp={setChamp}
        champ={champ}
        setBool={setBool}
        setChampEnemigo={setChampEnemigo}
      />
      :
      <Batalla
        bool={bool}
        setBool={setBool}
        champ={champ}
        champEnemigo={champEnemigo}
      />
      }
    </Fragment>
  );
}

export default App;
