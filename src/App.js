import './App.css';
import { useState } from 'react';


function App() {
  const [pandaSize, setPandaSize] = useState(30);
  const [hedgehogSize, sethedgehogSize] = useState(30);

  return (
    <div className="App">
      <section className="fight">
        <div className="panda">
          {/* the width of the panda should be 2 times whatever the hedgehog size is in state */}
          <img src="panda.png" width={pandaSize * 1.5} />
          <button onClick={() => setPandaSize(pandaSize + 5)}>Panda gets stronger</button>
          <button onClick={() => sethedgehogSize(hedgehogSize - 5)}>Panda attacks Hedgehog</button>
        </div>
        <div className="hedgehog">
          <img src="hedgehog.png" width={hedgehogSize * 1} />
          <button onClick={() => sethedgehogSize(hedgehogSize + 5)}>Hedgehog gets stronger</button>
          <button onClick={() => setPandaSize(pandaSize - 5)}>Hedgehog attacks Panda</button>
        </div>
      </section>

      <section className="door">

      </section>

      <section className="parade">

      </section>
     
    </div>
  );
}

export default App;
