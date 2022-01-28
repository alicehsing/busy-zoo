import './App.css';
import { useState } from 'react';
import Sign from './Sign/Sign';
import Parade from './Parade';


function App() {
  const [pandaSize, setPandaSize] = useState(30);
  const [hedgehogSize, setHedgehogSize] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  const [animalArr, setAnimalArr] = useState(['giraffe', 'seal', 'leopard', 'kangaroo']);

  return (
    <><h2>Welcome to Busy Zoo!</h2><div className="App">
      <section className="fight">
        <div className="panda">
          {/* the width of the panda should be 1.5 times whatever the hedgehog size is in state */}
          <img src="panda.png" width={pandaSize * 1.5} />
          <button onClick={() => setPandaSize(pandaSize + 5)}>Panda gets stronger</button>
          <button onClick={() => setHedgehogSize(hedgehogSize - 5)}>Panda attacks Hedgehog</button>
        </div>
        <div className="hedgehog">
          <img src="hedgehog.png" width={hedgehogSize * 1} />
          <button onClick={() => setHedgehogSize(hedgehogSize + 5)}>Hedgehog gets stronger</button>
          <button onClick={() => setPandaSize(pandaSize - 5)}>Hedgehog attacks Panda</button>
        </div>
      </section>

      <section className="sign">
        <Sign isOpen={isOpen} />
        <div className="sign-button">
          <button onClick={() => setIsOpen(false)}>Close Zoo</button>
          <button onClick={() => setIsOpen(true)}>Open Zoo</button>
        </div>
      </section>

      <section className="parade">
        <Parade animalArray={animalArr} />
        <div>
          <button onClick={() => setAnimalArr([...animalArr, 'giraffe'])}>+ Giraffe</button>
          <button onClick={() => setAnimalArr([...animalArr, 'seal'])}>+ Seal</button>
          <button onClick={() => setAnimalArr([...animalArr, 'leopard'])}>+ Leopard</button>
          <button onClick={() => setAnimalArr([...animalArr, 'kangaroo'])}>+ Kangaroo</button>
          <button onClick={() => setAnimalArr(animalArr.slice(0, animalArr.length - 1))} className="remove-animal">- Animal</button>
        </div>
      </section>
    </div></>
  );
}

export default App;
