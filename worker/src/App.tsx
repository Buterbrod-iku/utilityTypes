import './App.css'
import React, { useState} from "react";
import {VanillaLoad} from "./components/VanillaLoad/VanillaLoad.tsx";
import {WorkerLoad} from "./components/WorkerLoad/WorkerLoad.tsx";

function App() {
    const [isVanilla, setIsVanilla] = useState(false);

    const handleChangePage = () => {
        setIsVanilla((old) => !old);
    };

  return (
      <>
          <h1>Worker</h1>

          <button type='button' onClick={handleChangePage}>
              {isVanilla ?  'Load Vanilla' : 'Load with WorkerLoad'}
          </button>

          {isVanilla ? <VanillaLoad /> : <WorkerLoad />}

      </>
  )
}

export default App
